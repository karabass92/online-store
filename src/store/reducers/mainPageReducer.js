import { mainPageAPI } from "../../api/api";

const SET_NEW_COLLECTION = 'SET_NEW_COLLECTION'


const initialState = {
    newCollection: []
};


const mainPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEW_COLLECTION:
            return {
                ...state, newCollection: action.newCollection
            };
        default:
            return state
    }
};


const setNewCollection = (newCollection) => {
    return { type: SET_NEW_COLLECTION, newCollection}
};


export const getNewCollection = () => async (dispatch) => {
    const data = await mainPageAPI.getNewCollection()
    dispatch(setNewCollection(data));
};


export default mainPageReducer;