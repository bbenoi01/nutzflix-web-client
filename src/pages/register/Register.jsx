import { useRef, useState } from 'react';
import './register.scss';

const Register = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const emailRef = useRef();
	const passwordRef = useRef();

	const handleStart = () => {
		setEmail(emailRef.current.value);
	};

	const handleFinish = () => {
		setPassword(passwordRef.current.value);
	};

	return (
		<div className='register'>
			<div className='top'>
				<div className='wrapper'>
					<h3 className='brand'>NUTZFLIX</h3>
					<button className='login-btn'>Sign In</button>
				</div>
			</div>
			<div className='container'>
				<h1>Unlimited movies, TV Shows, and more.</h1>
				<h2>Watch anywhere. Cancel anytime.</h2>
				<p>
					Ready to watch? Enter your email to create or restart your membership.
				</p>
				{!email ? (
					<div className='input'>
						<input type='email' placeholder='Email Address' ref={emailRef} />
						<button className='register-btn' onClick={handleStart}>
							Get Started
						</button>
					</div>
				) : (
					<form className='input'>
						<input type='password' placeholder='Password' ref={passwordRef} />
						<button className='register-btn' onClick={handleFinish}>
							Submit
						</button>
					</form>
				)}
			</div>
		</div>
	);
};

export default Register;
