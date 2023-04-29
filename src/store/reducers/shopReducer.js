import { shopAPI } from "../../api/api";

const SET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';


const initialState = {
    products: []
};


const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALL_PRODUCTS:
            return {
                ...state,
                products: action.products
            };
        default:
            return state;
    };
};


const setAllProducts = (products) => {
    return {type: SET_ALL_PRODUCTS, products}
};


export const getAllProducts = () => async (dispatch) => {
    const data = await shopAPI.getAllProducts();
    dispatch(setAllProducts(data));
};


export default shopReducer;