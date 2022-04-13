const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

// schema 생성
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

userSchema.pre('save', function( next ) {
	let user = this; // userSchema

	if(user.isModified('password')) {
		bcrypt.genSalt(saltRounds, function(err, salt) {
			if(err) return next(err);

			// 성공
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