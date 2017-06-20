import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
	case FETCH_WEATHER:
		// New city data put in front of array
		return [ action.payload.data, ...state ];
	}
	return state;
}