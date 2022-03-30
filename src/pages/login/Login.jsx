import './login.scss';

const Login = () => {
	return (
		<div className='login'>
			<div className='top'>
				<div className='wrapper'>
					<h3 className='brand'>NUTZFLIX</h3>
				</div>
			</div>
			<div className='container'>
				<form action=''>
					<h1>Sign In</h1>
					<input type='email' placeholder='Email' />
					<input type='password' placeholder='Password' />
					<button className='login-btn'>Sign In</button>
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

export default Login;
