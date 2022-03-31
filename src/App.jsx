import './app.scss';
import {
	BrowserRouter as Router,
	Routes as Switch,
	Route,
	Navigate,
} from 'react-router-dom';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Watch from './pages/watch/Watch';

const App = () => {
	const user = true;
	return (
		<Router>
			<Switch>
				<Route
					path='/'
					element={user ? <Home /> : <Navigate to='/login' replace />}
				/>
				<Route
					path='/register'
					element={!user ? <Register /> : <Navigate to='/' replace />}
				/>
				<Route
					path='/login'
					element={!user ? <Login /> : <Navigate to='/' replace />}
				/>
				{user && (
					<>
						<Route path='/movies' element={<Home type='movies' />} />
						<Route path='/series' element={<Home type='series' />} />
						<Route path='/watch' element={<Watch />} />
					</>
				)}
			</Switch>
		</Router>
	);
};

export default App;
