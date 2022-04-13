// combineReducers를 통해 여러 Reducer를 합쳐줌
import { combineReducers } from "redux";

import user from './user_reducer';
import mode from './mode_reducer';

const rootReducer = combineReducers({
	user,
	mode,
})

export default rootReducer