import * as constants from './constants'

const initialState = {
    list: [],
    activeFilter: "All",
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case constants.ADD_TODO_ITEM: {
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        }
        case constants.DELETE_TODO: {
            return {
                ...state,
                list: [...action.payload]
            }
        }
        case constants.COMPLETE_TODO: {
            return {
                ...state,
                list: [...action.payload]
            }
        }
        case constants.DELETE_ALL_COMPLETED: {
            return {
                ...state,
                list: [...action.payload]
            }
        }
        case constants.COMPLETE_ALL: {
            return {
                ...state,
                list: [...action.payload]
            }
        }
        case constants.CHANGE_FILTERS: {
            return {
                ...state,
                activeFilter: action.payload,
            }
        }
        default:
            return state;
    }
}

export default reducer;