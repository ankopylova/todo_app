import {
    ADD_TODO_ITEM,
    DELETE_TODO,
    COMPLETE_TODO,
    DELETE_ALL_COMPLETED,
    COMPLETE_ALL,
} from './constants'

const initialState = {
    list: [],
    activeFilter: "All",
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO_ITEM: {
            console.log({...state});
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        }
        case DELETE_TODO: {
            return {
                ...state,
                list: [...action.payload]
            }
        }
        case COMPLETE_TODO: {
            return {
                ...state,
                list: [...action.payload]
            }
        }
        case DELETE_ALL_COMPLETED: {
            return {
                ...state,
                list: [...action.payload]
            }
        }
        case COMPLETE_ALL: {
            return {
                ...state,
                list: [...action.payload]
            }
        }
        default:
            return state;
    }
}

export default reducer;