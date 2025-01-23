import {configureStore} from "@reduxjs/toolkit";
import BillReducer from "./modules/billStore";

const store = configureStore({
	reducer: {
		bill: BillReducer
	}
});
export default store;