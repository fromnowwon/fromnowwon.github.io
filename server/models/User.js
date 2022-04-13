const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

// schema 생성 (DB에 넣기 전에 검사)
const userSchema = mongoose.Schema({
	name: {
		type: String,
		maxlength: 50
	},
	email: {
		type: String,
		trim: true, // 공백 지우기
		unique: 1 // 동일한 이메일 1개만 가능
	},
	password: {
		type: String,
		minlength: 5
	},
	lastname: {
		type: String,
		maxlength: 50
	},
	role: {
		// 관리자와 일반 유저를 숫자로 구분
		type: Number,
		default: 0
	},
	image: String,
	token: {
		// 유효성 관리
		type: String
	},
	tokenExp: {
		type: Number
	}
})

// save 전에 pre 메서드를 사용해 사전 동작 정의
// 비밀번호 암호화부터
userSchema.pre('save', function( next ) {
	let user = this; // userSchema

	// isModified함수는 해당 값이 db에 기록된 값과 비교해서 
	// 변경된 경우 true를, 그렇지 않은 경우 false를 반환하는 함수
	// user 생성시는 항상 true이며, 
	// user 수정시는 password가 변경되는 경우에만 true를 반환
	// 모두 최초 생성일 수밖에 없다. 이미 저장된 비밀번호는 암호화된 상태니까!
	if(user.isModified('password')) {
		// salt는 암호화된 비밀번호 바이트 단위의 임의 문자열
		// saltRounds(10자리)로 설정
		bcrypt.genSalt(saltRounds, function(err, salt) {
			if(err) return next(err);

			// 성공
			// salt를 인자로 받아 user.password를 암호화된 비밀번호 생성
			bcrypt.hash(user.password, salt, function(err, hash) {
				if(err) return next(err);
				user.password = hash;

				next();
			});
		});
	} else {
		next();
	}
});

// 비밀번호 비교 메서드
userSchema.methods.comparePassword = function(plainPassword, callback) {
	// plainPassword : 로그인 시 사용된 비밀번호
	// this.password : DB에 저장된 암호화된 비밀번호
	bcrypt.compare(plainPassword, this.password, function(err, isMatch) {
		if(err) return callback(err)
		
		callback(null, isMatch)
	})
}

// 토큰 생성 메서드
userSchema.methods.generateToken = function(callback) {
	let user = this; // userSchema
	
	let token = jwt.sign( user._id.toHexString(), 'secretToken' )

	user.token = token;
	user.save(function(err, user) {
		if (err) return callback(err);

		callback(null, user);
	})
} 

// 토큰을 이용한 권한 인증 메서드
userSchema.statics.findByToken = function( token, callback ) {
	let user = this; // userSchema

	jwt.verify(token, 'secretToken', function( err, decoded ) {
		user.findOne({ "_id": decoded, "token": token, }, function(err, user){
			if (err) return callback(err);
			callback(null, user);
		})
	})
}

const User = mongoose.model('User', userSchema);

module.exports = { User }