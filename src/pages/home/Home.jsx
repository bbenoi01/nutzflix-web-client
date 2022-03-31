import './home.scss';
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = ({ type }) => {
	const [lists, setLists] = useState([]);
	const [genre, setGenre] = useState(null);

	useEffect(() => {
		const getRandomLists = async () => {
			try {
				const res = await axios.get(
					`/lists${type ? '?type=' + type : ''}${
						genre ? '&genre=' + genre : ''
					}`,
					{
						headers: {
							Authorization:
								'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDM4YjZjY2NlM2I5YjBjYzQyNGQwMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODYyMzI0OCwiZXhwIjoxNjQ5MDU1MjQ4fQ.7DMwZpdAXWSgJBiOd-NRV-HgBY_dJnyqW8UWsS_EgKM',
						},
					}
				);
				console.log(res.data);
				setLists(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		getRandomLists();
	}, [type, genre]);

	return (
		<div className='home'>
			<Navbar />
			<Featured type={type} />
			{lists.map((list) => (
				<List key={list._id} list={list} />
			))}
		</div>
	);
};

export default Home;
