import { FETCH_NEWS } from "../actions/newsActions";

export const initialState = {
    results: [],
    isLoading: false,
    error: ''
} 

export const newsReducers = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_NEWS: 
        return {
            ...state,
            results: action.payload
        }
        default: 
        return state;
    }
}