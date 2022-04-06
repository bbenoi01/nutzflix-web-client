import { types } from '../../types';
import nutzflixApi from '../../api/nutzflixApi';

export function getRandomLists(type, genre) {
	return (dispatch) => {
		dispatch({
			type: types.GET_LISTS_START,
		});
		nutzflixApi
			.get(
				`/lists${type ? '?type=' + type : ''}${genre ? '&genre=' + genre : ''}`
			)
			.then((res) => {
				dispatch({
					type: types.GET_LISTS_SUCCESS,
					payload: res.data,
				});
			})
			.catch((err) => {
				dispatch({
					type: types.GET_LISTS_FAILURE,
					payload: err.response.data,
				});
			});
	};
}
