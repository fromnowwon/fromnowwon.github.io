/* eslint-disable import/no-anonymous-default-export */
import { useEffect } from "react"
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import axios from 'axios';

export default function (SpecificComponent: any, option: boolean | null, adminRoute: boolean | null = null) {
	// SpecificComponent : 적용할 컴포넌트
	// option : 
		// null => 아무나 출입 가능 (랜딩페이지...)
		// true => 로그인한 유저만 출입 가능
		// false => 로그인한 유저 출입 불가 (회원가입, 로그인페이지 ...)
	// adminRoute : 
		// null => 사용하지 않음 (기본값)
		// true => 어드민만 출입 가능

	function AuthenticationCheck() {
		const navigate = useNavigate();

		useEffect(() => {
			axios.get('/api/users/auth').then(response => {

				// Case 1. 아무나 진입 가능한 페이지 (Landing page ... )
				// Case 2. 로그인 한 회원만 진입 가능한 페이지 (Detail Page ... )
				// Case 3. 로그인 한 회원은 진입 불가한 페이지 (Register, Login page)
				// Case 4. 관리자만 진입 가능한 페이지 (Admin page)

				if (response) {
					// 로그인 X
					if (response.data.isAuth !== true) {
						// option이 true면 로그인 유저만 출입 가능하므로
						// 로그인 페이지로 강제 이동
						if (option) {
							navigate('/login')
						}
					} else {
						// 로그인 O

						// 어드민만 출입 가능한 페이지에
						// 어드민이 아닌 사람이 접근
						if (adminRoute && !response.data.isAuth) {
							navigate('/')
						} else {
							// 어드민이 아니어도 출입 가능한 페이지

							// 로그인한 유저는 접근 불가한 페이지에
							// 로그인한 유저가 접근
							if (option === false) {
								navigate('/');
							}
						}
					}
				}
			})
		}, [])

		return (
			<SpecificComponent />
		)
	}

	return AuthenticationCheck;
}