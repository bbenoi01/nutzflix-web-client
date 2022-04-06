import { types } from '../../types';

const INITIAL_STATE = {
	isFetching: false,
	featured: null,
	video: null,
	errors: {},
};

const VideoReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action;

	switch (type) {
		case types.GET_FEATURED_VIDEO_START: {
			return {
				...state,
				isFetching: true,
				errors: {},
			};
		}

		case types.GET_FEATURED_VIDEO_SUCCESS: {
			return {
				...state,
				isFetching: false,
				featured: payload,
				errors: {},
			};
		}

		case types.GET_FEATURED_VIDEO_FAILURE: {
			return {
				...state,
				isFetching: false,
				errors: payload,
			};
		}

		case types.GET_VIDEO_START: {
			return {
				...state,
				isFetching: true,
				errors: {},
			};
		}

		case types.GET_VIDEO_SUCCESS: {
			return {
				...state,
				isFetching: false,
				video: payload,
				errors: {},
			};
		}

		case types.GET_VIDEO_FAILURE: {
			return {
				...state,
				isFetching: false,
				errors: payload,
			};
		}

		case types.LOGOUT: {
			return {
				isFetching: false,
				featured: null,
				video: null,
				errors: {},
			};
		}

		default:
			return state;
	}
};

export default VideoReducer;
