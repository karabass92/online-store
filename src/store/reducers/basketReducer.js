const ADD_PRODUCT = 'ADD_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';


let initialState = {
    productsInBasket: [],
};


const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            let product = {
                id: action.product.id,
                name: action.product.name,
                img: action.product.img,
                price: action.product.price,
                type: action.product.type,
                productCount: action.productCount,
                productSize: action.productSize
            }
            return {
                ...state, 
                productsInBasket: [...state.productsInBasket, product]
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                productsInBasket: [...state.productsInBasket.filter(i => i.id !== action.productId)]
            }
        default:
            return state;
    }
};


export const addProductToBasket = (product, productCount, productSize) => {
    return { type: ADD_PRODUCT, product, productCount, productSize}
};


export const deleteProductFromBasket = (productId) => {
    return { type: DELETE_PRODUCT, productId}
};


export default basketReducer;