import { useState } from 'react';
import { connect } from 'react-redux';
import './register.scss';

import { register } from '../../reducers/authReducer/AuthActions';

const Register = ({ dispatch, isFetching }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [moveForward, setMoveForward] = useState(false);

	const handleRegister = (e) => {
		e.preventDefault();
		const newUser = {
			email,
			password,
		};
		dispatch(register(newUser));
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
				{!moveForward ? (
					<div className='input'>
						<input
							type='email'
							placeholder='Email Address'
							onChange={(e) => setEmail(e.target.value)}
						/>
						<button
							className='register-btn'
							onClick={() => setMoveForward(true)}
						>
							Get Started
						</button>
					</div>
				) : (
					<form className='input'>
						<input
							type='password'
							placeholder='Password'
							onChange={(e) => setPassword(e.target.value)}
						/>
						<button
							className='register-btn'
							onClick={handleRegister}
							disabled={isFetching}
						>
							Submit
						</button>
					</form>
				)}
			</div>
		</div>
	);
};

function mapStoreToProps(store) {
	return {
		isFetching: store.auth.isFetching,
	};
}

export default connect(mapStoreToProps)(Register);
