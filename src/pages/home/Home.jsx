import './home.scss';
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { getRandomLists } from '../../reducers/listReducer/ListActions';

const Home = ({ dispatch, type, lists }) => {
	const [genre, setGenre] = useState(null);

	useEffect(() => {
		dispatch(getRandomLists(type, genre));
	}, [dispatch, type, genre]);

	return (
		<div className='home'>
			<Navbar />
			<Featured type={type} />
			{lists && lists.map((list) => <List key={list._id} list={list} />)}
		</div>
	);
};

function mapStoreToProps(store) {
	return {
		lists: store.list.lists,
	};
}

export default connect(mapStoreToProps)(Home);
