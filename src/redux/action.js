import {ADD_TODO,TOGGLE_TODO, REMOVE_TODO} from './actionType'

export const addTodo =(payload)=>{
    return {
        type: ADD_TODO,
        payload:payload,
    }
}

export const toggleTodo=(payload)=>{
    return {
        type:TOGGLE_TODO,
        payload:payload,
    }
}
export const removeTodo=(payload)=>{
    return {
        type:REMOVE_TODO,
        payload:payload,
    }
}