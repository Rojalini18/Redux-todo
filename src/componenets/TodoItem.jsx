import React from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

export const TodoItem = ({text,id,status,deleteTodo,toggle}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleNavigate =(text)=>{
    navigate(`/${text}`)
  }

  return (
    <div  key={id}>
        <p>{text}</p>
        <p>status:{status?" DONE":" NOT DONE"}</p>
        <button onClick={() =>toggle(id,status,text)}>Toggle Todo</button>
        <button onClick={() =>deleteTodo(id)}>DELETE</button>
        <button onClick={()=>handleNavigate(id)}>MORE...</button>
    </div>
  )
}
