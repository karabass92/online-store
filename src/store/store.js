import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import basketReducer from "./reducers/basketReducer";
import shopReducer from "./reducers/shopReducer";
import thunkMiddleWare from "redux-thunk";
import mainPageReducer from "./reducers/mainPageReducer";
import productReducer from "./reducers/productReducer";


const reducers = combineReducers ({
    basket: basketReducer,
    shop: shopReducer,
    mainPage: mainPageReducer,
    productPage: productReducer,
});


const store = legacy_createStore (reducers, applyMiddleware(thunkMiddleWare));


window.store = store


export default store;