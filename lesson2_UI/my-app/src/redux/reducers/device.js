import { DeviceAction } from '../actions';

const initialState = {
	WIDTH: window.innerWidth,
	HEIGHT: window.innerHeight,
	STATUSBAR_HEIGHT: 20,
	BOTTOM_PADDING: 0,
	UNIQUE_ID: '',
}

const device = (state = initialState, action) => {
	switch (action.type) {
		case DeviceAction.UPDATE_DEVICE:
			return {
				...state,
				...action.data,
			};
		default:
			return state;
	}
}

export default device;
