import * as types from './constants'
import {store} from "../Utils/store";
//=> (getState, dispatch)

export const addTodoItem = text => {
    const inxArr = store.getState().list.map(el => el.id);
    const newId = inxArr.length ? Math.max(...inxArr) + 1 : 1;
    return {
        type: types.ADD_TODO_ITEM,
        payload: {
            id: newId,
            text: text,
            completed: false,
        },
    }
}

export const deleteTodo = id => {
    return {
        type: types.DELETE_TODO,
        payload: store.getState().list.filter(el => el.id !== id)
    }
};

export const completeTodo = id => {
    return {
        type: types.COMPLETE_TODO,
        payload: store.getState().list.map(el =>
            el.id === id ? {...el, completed: !el.completed} : el
        )
    }
}

export const deleteAllCompleted = () => {
    return {
        type: types.DELETE_ALL_COMPLETED,
        payload: store.getState().list.filter(el => el.completed !== true)
    }
}

export const completeAll = () => {
    return {
        type: types.COMPLETE_ALL,
        payload: store.getState().list.map(el => !el.completed ? {...el, completed: true} : el)
    }
}


export const changeFilter = (filter) => {
    console.log(filter)
    return {
        type: types.CHANGE_FILTERS,
        filter
    }
}
