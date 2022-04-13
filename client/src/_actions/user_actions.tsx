import axios from 'axios';
import { 
	LOGIN_USER, 
	REGISTER_USER,
	AUTH_USER,
	LOGOUT_USER
} from "./types";

// Action creator
export function loginUser(dataToSubmit: { email: string; password: string; }) {
	const request = axios.post('/api/users/login', dataToSubmit) 
		.then(response => response.data)

		request.then((data: { loginSuccess: boolean; message: string; }) => {
			if (data.loginSuccess) {
				console.log("로그인 성공");
				window.location.href = "/"; // 컴포넌트가 아니여서 훅 사용 안됨
			} else {
				alert(data.message);
			}
		})

		// Action 반환
		return {
			type: LOGIN_USER,
			payload: request 
		}
}

export function registerUser(dataToSubmit: { email: string; name: string; password: string; }) {
	const request = axios.post('/api/users/register', dataToSubmit) 
		.then(response => response.data)
		
		request.then(data => {
			if (data.success) {
				console.log("가입 성공");
				window.location.href = "/login";
			} else {
				if (data.err.code === 11000) {
					alert(`이미 존재하는 이메일입니다.`)
				} else {
					alert(`회원가입 실패. 정보를 올바르게 입력해주세요. (${data.err._message})`)
				}
			}
		})

		return {
			type: REGISTER_USER,
			payload: request 
		}
}

export function auth () {
	const request = axios.get('/api/users/auth') 
		.then(response => response.data)

		return {
			type: AUTH_USER,
			payload: request
		}
}

export function logoutUser(){
	const request = axios.get('/api/users/logout')
	.then(response => response.data);

	request.then(data => {
		if (data.success) {
			window.location.href = "/login";
		} else {
			alert("로그아웃 실패")
		}
	})

	return {
		type: LOGOUT_USER,
		payload: request
	}
}