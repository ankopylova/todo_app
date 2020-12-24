import * as types from './constants'



export const addTodoItem = text => (dispatch, getState) => {
    const newId = getState().list.map(el => el.id).length ? Math.max(...getState().list.map(el => el.id)) + 1 : 1;
    return dispatch({
        type: types.ADD_TODO_ITEM,
        payload: {
            id: newId,
            text: text,
            completed: false,
        },
    })
}


export const deleteTodo = id => (dispatch, getState) => {
    return dispatch({
        type: types.DELETE_TODO,
        payload: getState().list.filter(el => el.id !== id)
    })
};

export const completeTodo = id => (dispatch, getState) => {
    return dispatch({
        type: types.COMPLETE_TODO,
        payload: getState().list.map(el =>
            el.id === id ? {...el, completed: !el.completed} : el
        )
    })
}

export const deleteAllCompletedTodos = () => (dispatch, getState) => {
    return dispatch({
        type: types.DELETE_ALL_COMPLETED,
        payload: getState().list.filter(el => el.completed !== true)
    })
}

export const completeAllTodos = () => (dispatch, getState) => {
    return dispatch({
        type: types.COMPLETE_ALL,
        payload: getState().list.map(el => !el.completed ? {...el, completed: true} : el)
    })
}


export const changeListFilter = filter => (dispatch) => {
    return dispatch({
        type: types.CHANGE_FILTERS,
        payload: filter,
    })
}
