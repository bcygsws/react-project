import {configureStore} from "@reduxjs/toolkit";
import foodReducer from './modules/takeaway';

const store = configureStore({
	reducer: {
		food: foodReducer
	}
});
export default store;
