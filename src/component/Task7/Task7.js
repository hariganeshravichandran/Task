import React from 'react'

function Task7() {
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
  // delete person.age
  const {age,...other} = person

  console.log(other)
  return (
    // <div>Task7{JSON.stringify(person,3)}</div>
    <div>drtfyg</div>
  )
}

export default Task7