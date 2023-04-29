import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import basketReducer from "./reducers/basketReducer";
import shopReducer from "./reducers/shopReducer";
import thunkMiddleWare from "redux-thunk";


const reducers = combineReducers ({
    basket: basketReducer,
    shop: shopReducer,
});


const store = legacy_createStore (reducers, applyMiddleware(thunkMiddleWare));


window.store = store


export default store;