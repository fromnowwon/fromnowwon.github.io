// combineReducers를 통해 여러 Reducer를 합쳐줌
import { combineReducers } from "redux";

import user from './user_reducer';

const rootReducer = combineReducers({
	user,
})

export default rootReducer