import { GET_TODOLIST, POST_TODO } from '../actions/types';

const initialState = {
    items: [],
    item: {}
};

export default function (state = initialState, action) {
    switch (action, type) {
        case GET_TODOLIST:
            return {
                ...state,
                items: action.payload
            };
        case POST_TODO:
            return {
                ...state,
                item: action.payload
            };
        default:
            return state;
    }
}