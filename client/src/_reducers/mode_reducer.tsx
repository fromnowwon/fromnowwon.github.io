import {
	PAGE_MODE
} from '../_actions/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state={ }, action: { type: string, payload: any }){
	switch (action.type) {
		case PAGE_MODE:
			return { ...state, pageMode: action.payload };
		default:
			return state;
	}
}

