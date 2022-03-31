import './navbar.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	window.onscroll = () => {
		setIsScrolled(window.pageYOffset > 0 ? true : false);
		return () => (window.onscroll = null);
	};

	return (
		<div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
			<div className='container'>
				<div className='left'>
					<h1 className='brand'>NUTZFLIX</h1>
					<Link to={'/'} className='link'>
						<span>Home</span>
					</Link>
					<Link to={'/series'} className='link'>
						<span>Series</span>
					</Link>
					<Link to={'/movies'} className='link'>
						<span>Movies</span>
					</Link>
					<span>New and Popular</span>
					<span>My List</span>
				</div>
				<div className='right'>
					<Search className='icon' />
					<span>KID</span>
					<Notifications className='icon' />
					<img src='Helmet.jpg' alt='' />
					<div className='profile'>
						<ArrowDropDown className='icon' />
						<div className='options'>
							<span>Settings</span>
							<span>Logout</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
