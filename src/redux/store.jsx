import { combineReducers, configureStore } from "@reduxjs/toolkit";
import DetailReducer from "./TodoSlice";
import UserReducer from "./UserSlice";


const reducer = combineReducers({
    user: UserReducer,
    Detail: DetailReducer,
});

const store = configureStore({reducer}); 


export default store; 