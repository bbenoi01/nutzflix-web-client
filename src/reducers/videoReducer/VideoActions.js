import { types } from '../../types';
import nutzflixApi from '../../api/nutzflixApi';

export function getRandomContent(type) {
	return (dispatch) => {
		dispatch({
			type: types.GET_FEATURED_VIDEO_START,
		});
		nutzflixApi
			.get(`/videos/random${type ? '?type=' + type : ''}`)
			.then((res) => {
				dispatch({
					type: types.GET_FEATURED_VIDEO_SUCCESS,
					payload: res.data[0],
				});
			})
			.catch((err) => {
				dispatch({
					type: types.GET_FEATURED_VIDEO_FAILURE,
					payload: err.response.data,
				});
			});
	};
}

export function getVideo(item) {
	return (dispatch) => {
		dispatch({
			type: types.GET_VIDEO_START,
		});
		nutzflixApi
			.get('/videos/find' + item)
			.then((res) => {
				dispatch({
					type: types.GET_VIDEO_SUCCESS,
					payload: res.data,
				});
			})
			.catch((err) => {
				dispatch({
					type: types.GET_VIDEO_FAILURE,
					payload: err.response.data,
				});
			});
	};
}
