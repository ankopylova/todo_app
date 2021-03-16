import * as types from './constants'
// import * as api from '../../service/TodoService'

export const getTodoItems = () => (dispatch, getState, {todoService}) => {
    dispatch({
        type: types.GET_ALL_TODOS_START,
    })

    return todoService.getAllTasks()
        .then((res) => {
            dispatch({
                type: types.GET_ALL_TODOS_SUCCESS,
                payload: res.data.list
            })
        })
        .catch((req) => {
            dispatch({
                type: types.GET_ALL_TODOS_FAILED,
                payload: req,
            })
        })
}

export const addTodoItem = text => (dispatch, getState, {todoService}) => {
    dispatch({
        type: types.ADD_TODO_ITEM_START,
    })
    return todoService.insertTask({
        text: text,
        list: "5feafaa9243aa8256d7e59c0",
        completed: false
    })
        .then((res) => {
            dispatch({
                type: types.ADD_TODO_ITEM_SUCCESS,
                payload: {
                    _id: res.data.id,
                    text: text,
                    list: res.data.list,
                    completed: false
                }
            })
        })
        .catch((req) => {
            dispatch({
                type: types.ADD_TODO_ITEM_FAILED,
                payload: req,
            })
        })
}

export const deleteTodo = id => (dispatch, getState, {todoService}) => {
    dispatch({
        type: types.DELETE_TODO_START,
    })
    return todoService.deleteTaskById(id)
        .then(() => {
            dispatch(
                {
                    type: types.DELETE_TODO_SUCCESS,
                    payload: getState().list.payload.filter(el => el._id !== id),
                })
        })
        .catch((req) => {
            console.log('err', req)
            dispatch({
                type: types.DELETE_TODO_FAILED,
                payload: req,
            })
        })
}

export const completeTodo = (id) => (dispatch, getState, {todoService}) => {
    dispatch({
        type: types.COMPLETE_TODO_START,
    })
    return todoService.updateTask(id)
        .then(() => {
            dispatch(
                {
                    type: types.COMPLETE_TODO_SUCCESS,
                    payload: getState().list.payload.map(el => el._id === id ? {...el, completed: !el.completed} : el)
                })
        })
        .catch((req) => {
            console.log('err', req)
            dispatch({
                type: types.COMPLETE_TODO_FAILED,
                payload: req,
            })
        })
}


export const deleteAllCompletedTodos = () => (dispatch, getState) => {
    return dispatch({
        type: types.DELETE_ALL_COMPLETED,
        payload: getState().list.filter(el => !el.completed)
    })
}

export const completeAllTodos = idArr => (dispatch, getState, {todoService}) => {
    console.log(idArr)
    dispatch({
        type: types.COMPLETE_All_TODO_START,
    })
    return todoService.updateAllTask(idArr)
        .then(() => {
            dispatch({
                type: types.COMPLETE_All_TODO_SUCCESS,
                payload: getState().list.map(el => el.completed === false ? el._id : "")
            })
        })
        .catch((req) => {
            console.log('err', req)
            dispatch({
                type: types.COMPLETE_ALL_TODO_FAILED,
                payload: req,
            })
        })
}

export const changeListFilter = filter => (dispatch) => {
    return dispatch({
        type: types.CHANGE_FILTERS,
        payload: filter,
    })
}