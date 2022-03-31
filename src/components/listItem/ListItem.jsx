import './listItem.scss';
import {
	Add,
	PlayArrow,
	ThumbDownAltOutlined,
	ThumbUpAltOutlined,
} from '@material-ui/icons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListItem = ({ index, item }) => {
	const [isHovered, setIsHovered] = useState(false);
	const [video, setVideo] = useState({});

	useEffect(() => {
		const getVideo = async () => {
			try {
				const res = await axios.get('/videos/find/' + item, {
					headers: {
						Authorization:
							'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDM4YjZjY2NlM2I5YjBjYzQyNGQwMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODYyMzI0OCwiZXhwIjoxNjQ5MDU1MjQ4fQ.7DMwZpdAXWSgJBiOd-NRV-HgBY_dJnyqW8UWsS_EgKM',
					},
				});

				setVideo(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		getVideo();
	}, [item]);

	return (
		<Link to='/watch' state={{ video }}>
			<div
				className='list-item'
				style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<img src={video?.img} alt='' />
				{isHovered && (
					<>
						<video src={video?.trailer} autoPlay={true} loop />
						<div className='item-info'>
							<div className='icons'>
								<PlayArrow className='icon' />
								<Add className='icon' />
								<ThumbUpAltOutlined className='icon' />
								<ThumbDownAltOutlined className='icon' />
							</div>
							<div className='item-info-top'>
								<span>{video?.runTime}</span>
								<span className='rating'>{video?.rating}</span>
								<span>{video?.year}</span>
							</div>
							<div className='desc'>{video?.desc}</div>
							<div className='genre'>{video?.genre}</div>
						</div>
					</>
				)}
			</div>
		</Link>
	);
};

export default ListItem;
