import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Auth from "../../../../hoc/auth"
import { auth, loginUser } from '../../../../_actions/user_actions'
import { useDispatch, useSelector } from "react-redux";

const LoginPage = ():JSX.Element => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [Email, setEmail] = useState("");
	const [Password, setPassword] = useState("");

	const onEmailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.target.classList.remove("invalid-input");
		setEmail(event.currentTarget.value);
	}

	const onPasswordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.target.classList.remove("invalid-input");
		setPassword(event.currentTarget.value);
	}

	const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		let body = {
			email: Email,
			password: Password
		}

		dispatch(loginUser(body))	
	}

	const validateForm = () => {
		const $form = document.querySelector('.login-form') as HTMLElement;
		const $input = $form.querySelectorAll('.form__input') as NodeListOf<HTMLInputElement>;

		if ($form) {
			$input.forEach( input => {
				if (input.value === "") {
					input.classList.add('invalid-input');
					$form.classList.add('invalid-form');
				}
			});
		}
	}

	const goBack = () => {
		navigate(-1);
	}

	useEffect(() => {
		dispatch(auth())
	}, []);

	// useEffect(() => {
	// 	if (logState) {
	// 		console.log(logState.isAuth)
	// 		if (logState.isAuth) {
	// 			navigate('/')
	// 		}
	// 	}
		
	// }, [logState])

	return (
		<section className="page login-page">
			<div className="page-intro about__page-intro">
				<h2 className="page-intro__title">Please sign in</h2>
				{/* <p className="page-intro__text">로그인해주세요.</p> */}
			</div>
			<div className="form-cont">
				<form className="form login-form flex-grid flex-grid--dir-column" onSubmit={ onSubmitHandler }>
					<label>
						<span className="form__title">Email</span>
						<input className="form__input" type="email" value={ Email } onChange={ onEmailHandler }/>
						<div className="validation-note">이메일이 입력되지 않았습니다.</div>
					</label>
					<label>
						<span className="form__title">Password</span>
						<input className="form__input" type="password" value={ Password } onChange={ onPasswordHandler } />
						<div className="validation-note">비밀번호가 입력되지 않았습니다.</div>
					</label>
					<span className="btn-box">
						<button className="btn btn--small btn--dark" onClick={ validateForm }>
							<span className="btn__text">
								Sign in
							</span>
						</button>
					</span>
				</form>
			</div>
			<div className="btn-cont flex-grid flex-grid--center">
				<div className="btn-box">
					<Link to="/register" className="btn btn--underline sign-up">
						<span className="btn__text">
							Create an account
						</span>
					</Link>
				</div>
				<div className="btn-box">
					<button onClick={ goBack } className="btn btn--underline go-back">
						<span className="btn__text">
							Go back
						</span>
					</button>
				</div>
			</div>
		</section>
	);
};

export default Auth(LoginPage, false);
