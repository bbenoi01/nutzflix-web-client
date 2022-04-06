import { types } from '../../types';

const INITIAL_STATE = {
	isFetching: false,
	lists: [],
	errors: {},
};

const ListReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action;

	switch (type) {
		case types.GET_LISTS_START: {
			return {
				...state,
				isFetching: true,
				errors: {},
			};
		}

		case types.GET_LISTS_SUCCESS: {
			return {
				...state,
				isFetching: false,
				lists: payload,
				errors: {},
			};
		}

		case types.GET_LISTS_FAILURE: {
			return {
				...state,
				isFetching: false,
				errors: payload,
			};
		}

		case types.LOGOUT: {
			return {
				isFetching: false,
				lists: [],
				errors: {},
			};
		}

		default:
			return state;
	}
};

export default ListReducer;
