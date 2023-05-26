import { legacy_createStore, applyMiddleware,combineReducers } from "redux"
import thunk from "redux-thunk"
import Reducer from "./Reducer";

const rootReducer = combineReducers({
     count: Reducer
}) 

 const store = legacy_createStore(rootReducer,applyMiddleware(thunk));

export default store;
