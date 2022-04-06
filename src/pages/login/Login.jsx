import { useState } from 'react';
import { connect } from 'react-redux';
import './login.scss';

import { login } from '../../reducers/authReducer/AuthActions';

const Login = ({ dispatch, isFetching }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = (e) => {
		e.preventDefault();
		const userCredentials = {
			email,
			password,
		};
		dispatch(login(userCredentials));
	};

	return (
		<div className='login'>
			<div className='top'>
				<div className='wrapper'>
					<h3 className='brand'>NUTZFLIX</h3>
				</div>
			</div>
			<div className='container'>
				<form onSubmit={handleLogin}>
					<h1>Sign In</h1>
					<input
						type='email'
						placeholder='Email'
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type='password'
						placeholder='Password'
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button type='submit' className='login-btn' disabled={isFetching}>
						Sign In
					</button>
					<span>
						New to Nutzflix? <b>Sign up now.</b>
					</span>
					<small>
						This is protected by the Red, the Trak, and Tical. <b>With a key</b>
						.
					</small>
				</form>
			</div>
		</div>
	);
};

function mapStoreToProps(store) {
	return {
		isFetching: store.auth.isFetching,
	};
}

export default connect(mapStoreToProps)(Login);
