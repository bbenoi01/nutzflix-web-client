import { ArrowBackIosOutlined } from '@material-ui/icons';
import './watch.scss';

const Watch = () => {
	return (
		<div className='watch'>
			<div className='back'>
				<ArrowBackIosOutlined />
				Home
			</div>
			<video
				src='Avengers_Infinity_War.mp4'
				className='video'
				autoPlay
				progress
				controls
			/>
		</div>
	);
};

export default Watch;
