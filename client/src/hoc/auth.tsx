/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import { useEffect } from "react"
import { useNavigate } from "react-router";

export default function (SpecificComponent: any, option: any, adminRoute: any = null) {
	function AuthenticationCheck(props: any) {
		const navigate = useNavigate();

		useEffect(() => {
			axios.get('/api/users/auth')
			.then(response => {

				// 로그인 X
				if (response.data.isAuth !== true) {
					if(option) {
						navigate('/login')
					}
				} else {
					// 로그인 O
					if (adminRoute && !response.data.payload.isAdmin) {
						// admin만 접근 가능
						navigate('/')
					} else {
						// 로그인 후 접근 불가
						if (option === false) {
							navigate('/')
						}
					}
				}
			}).catch((err) => {
				console.log(err)
			})
		}, [])

		return (
			<SpecificComponent />
		)
	}

	return AuthenticationCheck;
}