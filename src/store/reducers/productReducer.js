import { productAPI } from "../../api/api";


const SET_PRODUCT = 'SET_PRODUCT';


const initialState = {
    product: null
};


const productReducer = (state= initialState, action) => {
    switch (action.type) {
        case SET_PRODUCT:
            return {...state, product: action.product}
        default:
            return state
    };
};


const setProduct = (product) => {
    return { type: SET_PRODUCT, product}
};


export const getProduct = (productId) => async (dispatch) => {
    const product = await productAPI.getOneProduct(productId);
    dispatch(setProduct(product));
};


export default productReducer;