import React from 'react'
import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { TodoItem } from './TodoItem'
import { addTodo } from '../redux/action'
import { useEffect } from 'react'

const Todo = () => {

    const todos = useSelector((state)=>state.todos)
    console.log("todos",todos)
    const dispatch = useDispatch()

    const [todo, setTodo] = useState("")

    useEffect(() => {
      getTodo()
    }, [])
    

    const handleChange=(e)=>{
        setTodo(e.target.value)
    }
    const handleClick=()=>{
        let payload = {
            todo:todo,
            status:false,
        }
        fetch("http://localhost:3003/todos",{
            method: "POST",
            body:JSON.stringify(payload),
            headers: {'Content-Type':"Application/json"}
        })
        .then(()=>getTodo())
        setTodo("")

        // dispatch(addTodo(todo))
        // setTodo({ text:"",
        // status:false,
        // id:uuid()})
    }

    const getTodo =()=>{
        fetch("http://localhost:3003/todos")
        .then((data)=>data.json())
        .then((data)=>dispatch(addTodo(data)))
    }

    const deleteTodo =(id)=>{
        fetch(`http://localhost:3003/todos/${id}`,{
            method: "DELETE"
        })
        .then(()=>getTodo())
    }
    const toggle=(id,stat,text)=>{
        let payload = {status:!stat,id:id,todo:text}
        fetch(`http://localhost:3003/todos/${id}`,{
            method: "PATCH",
            body: JSON.stringify({status:!stat}),
            headers: {'Content-Type':'Application/json'}
        })
        .then(()=>getTodo())
    }

  return (
    <div>
        <input value={todo} onChange={handleChange} type="text" />
        <button onClick={handleClick}>Add Todo</button>
        <div>
            {todos.length!==0&&todos.map((el)=><TodoItem id={el.id} toggle={toggle} deleteTodo={deleteTodo} status={el.status} text = {el.todo}/>)}
        </div>
    </div>
  )
}

export default Todo