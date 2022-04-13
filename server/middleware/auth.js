const { User } = require('../models/User');

// 인증 처리 하는 곳
let auth = (req, res, next) => {
	// 쿠키에 담긴 토큰을 가져온다.
	let token = req.cookies.x_auth;

	// 쿠키에서 가져온 토큰을 복호화한 다음 유저를 찾는다.
	User.findByToken(token, (err, user) => {
		if (err) throw err;

		// 로그인 확인
		if (!user) {
			return res.json({ 
				isAuth: false, 
				error: true, 
				message: "로그인되지 않았습니다." 
			})
		}
			
		req.token = token;
		req.user = user;
		next();
	})
}

module.exports = { auth };