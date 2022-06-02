import {ADD_TODO,TOGGLE_TODO, REMOVE_TODO} from './actionType'

const init = {
    todos:[]
}

export const reducer =(state= init,{type,payload})=>{
    switch(type){

        case TOGGLE_TODO:
        return{
            ...state,todos:state.todos.map((el)=>el.id===payload?{...el,status:!el.status}:el)
        }

        case ADD_TODO:
        return{
            ...state,todos:[...payload]
        }

        case REMOVE_TODO:
        return{
            ...state,todos:state.todos.filter((el)=>el.id!==payload)
            // (console.log(payload))
        }

        default:
        return state
    }
}