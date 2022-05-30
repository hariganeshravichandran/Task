import React, { useState } from 'react'
import FormTodo from './FormTodo'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'react-bootstrap'
import Todolist from './Todolist';

function Todo() {
    const [todos, setTodos] = useState([{
      text:'i like ',
      isDone:false
    },
])

const addTodo = (text) => {
    const newTodos =[...todos, {text,isDone:false}]
    setTodos(newTodos)
}
const markTodo = (index) => {
    const newTodos =[...todos]
    newTodos[index].isDone = !newTodos[index].isDone;
    setTodos(newTodos)
}
const deleteTodo = (index) => {
    const newTodos =[...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
}
  return (
    <div className='app'>
        <div className='container'>
             <h1 className='text-center'>Todo</h1>
             <FormTodo addTodo={addTodo}/>
             <br/>
             <div className='todos'>
                 {todos.map((todo,index) => 
                     <Card>
                          <Card.Body>
                              <Todolist markTodo={markTodo} deleteTodo={deleteTodo} todo={todo} index={index} />
                          </Card.Body>
                     </Card>
                 )}
             </div>
        </div>
    </div>
  )
}

export default Todo