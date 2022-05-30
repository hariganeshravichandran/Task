import React from 'react'
import { Button } from 'react-bootstrap';
import './Todo.css'


function Todolist({todo,index,markTodo,deleteTodo}) {
     const {text , isDone} = todo;

  return (
    <div className='todo'>
        <span style={{ textDecoration:isDone ? 'line-through' : ''}}>{text}</span>
        <div className='todo_button'>
        <Button onClick={()=> markTodo(index)}>{isDone ?'NotDone' :'Done'}</Button>
        <Button onClick={() => deleteTodo(index)} variant='danger'>Delete</Button>
        </div>
    </div>
  )
}

export default Todolist