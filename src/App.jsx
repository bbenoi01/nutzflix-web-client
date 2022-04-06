import './app.scss';
import {
	BrowserRouter as Router,
	Routes as Switch,
	Route,
	Navigate,
} from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Watch from './pages/watch/Watch';

const App = ({ user }) => {
	return (
		<Router>
			<Switch>
				<Route path='/'>
					<Route
						index
						element={!user ? <Login /> : <Navigate to={'/home'} replace />}
					/>
					<Route
						path='register'
						element={!user ? <Register /> : <Navigate to={'/'} replace />}
					/>
					<Route
						path='home'
						element={user ? <Home /> : <Navigate to={'/'} replace />}
					/>
					<Route
						path='movies'
						element={
							user ? <Home type='movies' /> : <Navigate to={'/'} replace />
						}
					/>
					<Route
						path='series'
						element={
							user ? <Home type='series' /> : <Navigate to={'/'} replace />
						}
					/>
					<Route
						path='watch'
						element={user ? <Watch /> : <Navigate to={'/'} replace />}
					/>
				</Route>
			</Switch>
		</Router>
	);
};

function mapStoreToProps(store) {
	return {
		user: store.auth.user,
	};
}

export default connect(mapStoreToProps)(App);
