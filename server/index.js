const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cookieParser = require('cookie-parser');
const config = require('./config/key');
const { User } = require('./models/User');
const { auth } = require('./middleware/auth');
require("dotenv").config();
const mailer = require('./mailer.js');

// body-parser
app.use(express.json()); 
app.use(express.urlencoded( {extended : true } ));

// cookie-parser
app.use(cookieParser());

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI)
.then(() => console.log('MongoDB Connected...'))
.catch(error => console.log(error));

// 메일 전송 라우트
app.post("/mail", (req, res) => {
	const { yourname, youremail, yoursubject, yourmessage } = req.body.data;

	mailer(yourname, youremail, yoursubject, yourmessage)
	.then((response) => {
		if (response === "success") {
			res.status(200).json({
				status: 'Success',
				code: 200
				// message: 'Message Sent Successfully!',
			})
		} else {
			res.json({
				status: 'Fail',
				code: response.code
			})
		}
	})
});

// 회원 가입을 위한 라우트
app.post('/api/users/register', (req, res) => {
	const user = new User(req.body); 

	user.save((err, userInfo) => { 
		if(err) return res.json({ success: false, err })
		return res.status(200).json({ success: true })
	})
})

// 로그인을 위한 라우트
app.post('/api/users/login', (req, res) => {
	User.findOne({ email: req.body.email }, (err, user) => {
		if(!user) {
			return res.json({
				loginSuccess: false,
				message: "제공된 이메일에 해당하는 유저가 없습니다."
			})
		}

		user.comparePassword( req.body.password, (err, isMatch) => {
			if(!isMatch) 
			return res.json( {loginSuccess: false, message: "비밀번호가 틀렸습니다."} )

			// 유저 토큰 생성
			user.generateToken((err, user) => {
				if(err) return res.status(400).send(err);

				res.cookie("x_auth", user.token)
				.status(200)
				.json({ loginSuccess: true, userId: user._id })
			})
		})
	})
})

// 권한 확인을 위한 라우트
app.get('/api/users/auth', auth, (req, res) => {
	res.status(200).json({ 
		_id: req.user._id,
		isAdmin: req.user.role === 0 ? false : true, // 0이 아니면 관리자
		isAuth: true,
		email: req.user.email,
		name: req.user.name,
		role: req.user.role,
		image: req.user.image
	})
})

// 로그아웃을 위한 라우트
app.get('/api/users/logout', auth, (req, res) => {
	User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, user) => {
		if(err) return res.json({ success: false, err });

		return res.status(200).send({
			success: true
		})
	})
})

// production mode
if(process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));

	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, "../client/build/index.html"))
	})
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})