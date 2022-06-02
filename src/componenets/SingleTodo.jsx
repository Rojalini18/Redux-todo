import React from 'react'
import {useParams} from 'react-router-dom'
import { useSelector } from 'react-redux'

export const SingleTodo = () => {

  let {todo} = useParams()
  const todos = useSelector((state)=>state.todos)
  // console.log(todo)

  return (
    <div>
      <h1>{todos.filter((item)=>item.id==todo&&item).map((item)=><p>{item.todo}</p>)}</h1>
    </div>
  )
}
