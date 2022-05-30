import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Task.css';

function Task3() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [startDate, setStartDate] = useState();
  const [updateTodo, setUpdateTodo] = useState({});
  const [isDeleted, setIsDeleted] = useState(false);

  const date = new Date(startDate).toLocaleDateString();

  useEffect(() => {
    if (updateTodo.text) {
      setInput(updateTodo.text);
    }
  }, [updateTodo]);
  const saveTodo = (e) => {
    e.preventDefault();
    if (e.target.value === 'AddTodo') {
      setInput('');
      if (input) {
        addTodo(input);
      } else if (input === '') {
        alert('Enter Your Task ');
        return;
      }
    } else {
      let updatedTodo = {
        text: input,
        id: updateTodo.id,
        date: date,
      };
      updateTodoList(updatedTodo);
      setInput('');
    }
  };

  const todoInput = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const addTodo = (text) => {
    const NewTodos = [...todos, { text, id: todos.length + 1, date }];
    setTodos(NewTodos);
  };

  const updateTodoList = (value) => {
    console.log(value.id);
    let updatedTodo = [...todos];
    updatedTodo.splice(value.id - 1, 1);
    updatedTodo.push(value);
    updatedTodo.sort((a, b) => a.id - b.id);
    setTodos(updatedTodo);
    setUpdateTodo({});
  };

  const deleteTodos = (index) => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
    setIsDeleted(true);
  };

  const editTodos = (index) => {
    setUpdateTodo(todos[index]);
  };

  const maxDate = new Date();
  const minDate = new Date();
  maxDate.setDate(maxDate.getDate() + 60);
   minDate.setDate(minDate.getDate() - 19);


  return (
    <div>
      <form>
        User
        <br></br>
        <input type="text" value={input} onChange={todoInput} />
        <br></br>
        Date
        <DatePicker
          selected={startDate}
          // minDate={new Date()}
          maxDate={maxDate}
          minDate={minDate}
          onChange={(date) => setStartDate(date)}
          isClearable
        />
        <input
          type="submit"
          onClick={(e) => saveTodo(e)}
          value={updateTodo.text ? 'updateTodo' : 'AddTodo'}
        />
      </form>
      {todos && todos.length > 0 ? (
        <table style={{ width: '100%' }}>
          <tr>
            <th>User</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          {todos.map((todo, index) => (
            <tr>
              <td>{todo.text}</td>
              <td>{todo.date}</td>
              <td>
                <button onClick={() => editTodos(index)}>Edit</button>
                <button onClick={() => deleteTodos(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </table>
      ) : (
        <p>No more data..</p>
      )}
    </div>
  );
}

export default Task3;
