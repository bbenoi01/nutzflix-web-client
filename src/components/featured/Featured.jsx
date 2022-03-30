import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import './featured.scss';

const Featured = ({ type }) => {
	return (
		<div className='featured'>
			{type && (
				<div className='category'>
					<span>{type === 'movie' ? 'Movies' : 'Series'}</span>
					<select name='genre' id='genre'>
						<option>Genre</option>
						<option value='adventure'>Adventure</option>
						<option value='comedy'>Comedy</option>
						<option value='crime'>Crime</option>
						<option value='fantasy'>Fantasy</option>
						<option value='historical'>Historical</option>
						<option value='horror'>Horror</option>
						<option value='romance'>Romance</option>
						<option value='sci-fi'>Sci-fi</option>
						<option value='thriller'>Thriller</option>
						<option value='western'>Western</option>
						<option value='animation'>Animation</option>
						<option value='drama'>Drama</option>
						<option value='documentary'>Documentary</option>
					</select>
				</div>
			)}
			<img src='iw.png' alt='' />
			<div className='info'>
				<img
					src='https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABQq7tk0559I6V-2JOzeZUVb9NBKmKbBGHy5tFraxB9jN-O9cBB595XlGhG9Ao2JK2aF3Q0ydLBYyFHSe0OFyThDRCqsrVt-bioHd.webp?r=933'
					alt=''
				/>
				<span className='desc'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quasi,
					illum sint ad facilis sequi consequatur tempore eaque recusandae
					asperiores, perferendis vel iure deserunt ex molestiae praesentium
					magni totam laudantium?
				</span>
				<div className='buttons'>
					<button className='play'>
						<PlayArrow />
						<span>Play</span>
					</button>
					<button className='more'>
						<InfoOutlined />
						<span>Info</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Featured;
