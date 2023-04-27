import { combineReducers, legacy_createStore } from "redux";
import basketReducer from "./reducers/basketReducer";


const reducers = combineReducers ({
    basket: basketReducer,
});


const store = legacy_createStore (reducers);


window.store = store


export default store;