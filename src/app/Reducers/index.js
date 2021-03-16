import * as constants from './constants'

const initialState = {
    list: {
        isLoading: false,
        payload: [],
        error: null,
    },
    activeFilter: "All",
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case constants.GET_ALL_TODOS_START: {
            return {
                ...state,
                list: {
                    ...state.list,
                    isLoading: true,
                    error: null,
                }
            }
        }
        case constants.GET_ALL_TODOS_SUCCESS: {
            return {
                ...state,
                list: {
                    isLoading: false,
                    error: null,
                    payload: action.payload
                }
            }
        }
        case constants.GET_ALL_TODOS_FAILED: {
            return {
                ...state,
                list: {
                    ...state.list,
                    isLoading: false,
                    error: "Err"
                }
            }
        }
        case constants.ADD_TODO_ITEM_START: {
            return {
                ...state,
                list: {
                    ...state.list,
                    isLoading: true,
                    error: null,
                }
            }
        }

        case constants.ADD_TODO_ITEM_SUCCESS: {
            console.log(state)
            return {
                ...state,
                list: {
                    isLoading: false,
                    error: null,
                    payload: [...state.list.payload, action.payload],
                }
            }
        }

        case constants.ADD_TODO_ITEM_FAILED: {
            return {
                ...state,
                list: {
                    ...state.list,
                    isLoading: false,
                    error: "Err"
                }
            }
        }

        case constants.DELETE_TODO_START: {
            return {
                ...state,
                list: {
                    ...state.list,
                    isLoading: true,
                    error: null,
                }
            }
        }

        case constants.DELETE_TODO_SUCCESS: {
            return {
                ...state,
                list: {
                    isLoading: false,
                    error: null,
                    payload: [...action.payload],
                }
            }
        }

        case constants.DELETE_TODO_FAILED: {
            return {
                ...state,
                list: {
                    ...state.list,
                    isLoading: false,
                    error: "Err"
                }
            }
        }

        case constants.COMPLETE_TODO_START: {
            return {
                ...state,
                list: {
                    ...state.list,
                    isLoading: true,
                    error: null,
                }
            }
        }

        case constants.COMPLETE_TODO_SUCCESS: {
            return {
                ...state,
                list: {
                    isLoading: false,
                    error: null,
                    payload: [...action.payload]
                }
            }
        }

        case constants.COMPLETE_TODO_FAILED: {
            return {
                ...state,
                list: {
                    ...state.list,
                    isLoading: false,
                    error: "Err"
                }
            }
        }

        case constants.DELETE_ALL_COMPLETED: {
            return {
                ...state,
                list: {
                    payload: [...action.payload]
                }
            }
        }

        case constants.COMPLETE_All_TODO_START: {
            return {
                ...state,
                list: {
                    ...state.list,
                    isLoading: true,
                    error: null,
                }
            }
        }

        case constants.COMPLETE_All_TODO_SUCCESS: {
            return {
                ...state,
                list: {
                    isLoading: false,
                    error: null,
                    payload: [...action.payload]
                }
            }
        }

        case constants.COMPLETE_ALL_TODO_FAILED : {
            return {
                ...state,
                list: {
                    ...state.list,
                    isLoading: false,
                    error: "Err"
                }
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