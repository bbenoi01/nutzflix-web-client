import {
	Add,
	PlayArrow,
	ThumbDownAltOutlined,
	ThumbUpAltOutlined,
} from '@material-ui/icons';
import { useState } from 'react';
import './listItem.scss';

const ListItem = ({ index }) => {
	const [isHovered, setIsHovered] = useState(false);
	// const trailer = 'https://www.youtube.com/embed/TcMBFSGVi1c?controls=0';

	return (
		<div
			className='list-item'
			style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<img src='iw.png' alt='' />
			{isHovered && (
				<>
					{/* <video src={trailer} autoPlay={true} loop /> */}
					<iframe
						src='https://www.youtube.com/embed/TcMBFSGVi1c?controls=0'
						title='YouTube video player'
						frameborder='0'
						allow='autoplay; clipboard-write; encrypted-media;'
					/>
					<div className='item-info'>
						<div className='icons'>
							<PlayArrow className='icon' />
							<Add className='icon' />
							<ThumbUpAltOutlined className='icon' />
							<ThumbDownAltOutlined className='icon' />
						</div>
						<div className='item-info-top'>
							<span>1 hour 14 mins</span>
							<span className='age-limit'>+16</span>
							<span>1999</span>
						</div>
						<div className='desc'>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Praesentium hic rem eveniet error possimus, neque ex doloribus.
						</div>
						<div className='genre'>Action</div>
					</div>
				</>
			)}
		</div>
	);
};

export default ListItem;
