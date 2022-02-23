import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Auth from "../../../../hoc/auth"

const RegisterPage = ():JSX.Element => {
	const navigate = useNavigate();

	const [Email, setEmail] = useState("");
	const [Name, setName] = useState("");
	const [Password, setPassword] = useState("");
	const [ConfirmPassword, setConfirmPassword] = useState("");

	const onEmailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.target.classList.remove("invalid-input");
		setEmail(event.currentTarget.value);
	}

	const onNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.target.classList.remove("invalid-input");
		setName(event.currentTarget.value);
	}

	const onPasswordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.target.classList.remove("invalid-input");
		setPassword(event.currentTarget.value);
	}

	const onConfirmPasswordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.target.classList.remove("invalid-input");
		setConfirmPassword(event.currentTarget.value);
	}

	const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		console.log('Email:', Email);
		console.log('name:', Name);
		console.log('Password:', Password);

		if (Password !== ConfirmPassword) {
			return alert('두 비밀번호는 같아야 합니다.')
		}

		let body = {
			email: Email,
			name: Name,
			password: Password
		}

		axios.post('/api/users/register', body)
		.then(response => {
			if (response.data.success) {
				navigate('/login')
			} else {
				if (response.data.err.code === 11000) {
					alert(`이메일이 중복입니다.`)
				} else {
					alert(`회원가입 실패. 정보를 올바르게 입력해주세요. (에러코드: ${response.data.err.code})`)
				}
			}
		})
	}

	const validateForm = () => {
		const $form = document.querySelector('.register-form') as HTMLElement;
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

	return (
		<section className="page register-page">
			<div className="page-intro about__page-intro">
				<h2 className="page-intro__title">Welcome to here!</h2>
				{/* <p className="page-intro__text">로그인해주세요.</p> */}
			</div>
			<div className="form-cont">
				<form className="form register-form flex-grid flex-grid--dir-column" onSubmit={ onSubmitHandler }>
					<label>
						<span className="form__title">Email</span>
						<input className="form__input" type="email" value={ Email } onChange={ onEmailHandler }/>
						<div className="validation-note">이메일이 입력되지 않았습니다.</div>
					</label>
					<label>
						<span className="form__title">Name</span>
						<input className="form__input" type="text" value={ Name } onChange={ onNameHandler } />
						<div className="validation-note">이름이 입력되지 않았습니다.</div>
					</label>
					<label>
						<span className="form__title">Password</span>
						<input className="form__input" type="password" value={ Password } onChange={ onPasswordHandler } />
						<div className="validation-note">비밀번호가 입력되지 않았습니다.</div>
					</label>
					<label>
						<span className="form__title">Confirm Password</span>
						<input className="form__input" type="password" value={ ConfirmPassword } onChange={ onConfirmPasswordHandler } />
						<div className="validation-note">비밀번호가 입력되지 않았습니다.</div>
					</label>
					<span className="btn-box">
						<button className="btn btn--small btn--dark" onClick={ validateForm }>
							<span className="btn-text">
								Submit
							</span>
						</button>
					</span>
				</form>
			</div>
			<div className="btn-cont flex-grid flex-grid--center">
				<div className="btn-box">
					<button onClick={ goBack } className="btn btn--underline go-back">
						<span className="btn-text">
							Go back
						</span>
					</button>
				</div>
			</div>
		</section>
	);
};

export default Auth(RegisterPage, false);
