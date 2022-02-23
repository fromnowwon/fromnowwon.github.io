import axios from 'axios';
import React, { useState } from 'react'
import Auth from '../../../../hoc/auth'


const ContactPage = ():JSX.Element => {
	const [Name, setName] = useState('');
	const [Email, setEmail] = useState('');
	const [Subject, setSubject] = useState('');
	const [Message, setMessage] = useState('');

	const validateForm = () => {
		const $form = document.querySelector('.contact-form') as HTMLElement;
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

	const nameHandler = (e: { preventDefault: () => void; target: { classList: { remove: (arg0: string) => void; }; value: React.SetStateAction<string>; }; }) => {
		e.preventDefault();
		e.target.classList.remove("invalid-input");
		setName(e.target.value);
	}
	const emailHandler = (e: { preventDefault: () => void; target: { classList: { remove: (arg0: string) => void; }; value: React.SetStateAction<string>; }; }) => {
		e.preventDefault();
		e.target.classList.remove("invalid-input");
		setEmail(e.target.value);
	}
	const subjectHandler = (e: { preventDefault: () => void; target: { classList: { remove: (arg0: string) => void; }; value: React.SetStateAction<string>; }; }) => {
		e.preventDefault();
		e.target.classList.remove("invalid-input");
		setSubject(e.target.value);
	}
	const messageHandler = (e: { preventDefault: () => void; target: { classList: { remove: (arg0: string) => void; }; value: React.SetStateAction<string>; }; }) => {
		e.preventDefault();
		e.target.classList.remove("invalid-input");
		setMessage(e.target.value);
	}

	const submitHandler = async (e: { preventDefault: () => void; }) => {
		e.preventDefault();

		const $btnBox = document.querySelector('.btn-box') as HTMLElement;

		axios.post('/mail', {
		 	data: {
				yourname: Name,
				youremail: Email,
				yoursubject: Subject,
				yourmessage: Message
			}
		}).then((response) => {
			console.log(response.data);
			
			$btnBox.innerHTML = 
			`<div class="sent-message wave-animation">
				<span>~</span>
				<span>S</span>
				<span>E</span>
				<span>N</span>
				<span>T</span>
				<span>~</span>
			</div>`
		})
	}
	
	return (
		<section className="page contact-page">
			<div className="page-intro about__page-intro">
				<h2 className="page-intro__title">Say Hello</h2>
			</div>
			<div className="form-cont">
				<form className="form contact-form" onSubmit={ submitHandler }>
					<label htmlFor="name" className="form__label">
						<div className="form__title">Name</div>
						<input 
							type="text" 
							id="name" 
							className="form__input" 
							name="yourname" 
							placeholder="성함을 입력해주세요." 
							required 
							onChange={ nameHandler }/>
						<div className="validation-note">성함이 입력되지 않았습니다.</div>
					</label>
					<label htmlFor="email" className="form__label">
						<div className="form__title">Email</div>
						<input 
							type="email" 
							id="email" 
							placeholder="본인의 메일 주소를 정확히 입력해주세요." 
							className="form__input" 
							name="youremail" 
							required 
							onChange={ emailHandler }/>
						<div className="validation-note">메일이 입력되지 않았습니다.</div>
					</label>
					<label htmlFor="subject" className="form__label">
						<div className="form__title">Subject</div>
						<input 
							type="text" 
							id="subject" 
							placeholder="제목을 입력해주세요." 
							className="form__input" 
							name="yoursubject" 
							required 
							onChange={ subjectHandler }/>
						<div className="validation-note">제목이 입력되지 않았습니다.</div>
					</label>
					<label htmlFor="message" className="form__label">
						<div className="form__title">Message</div>
						<textarea 
							id="message"
							className="form__input textarea" 
							name="yourmessage" 
							placeholder="아무말 대잔치" 
							required 
							onChange={ messageHandler }/>
						<div className="validation-note">메시지가 입력되지 않았습니다.</div>
					</label>
					<div className="btn-box">
						<input className="btn btn--default btn--dark form__submit" type="submit" value="Send" onClick={ validateForm }/>
					</div>
				</form>
			</div>
		</section>
	)
}

export default Auth(ContactPage, null);