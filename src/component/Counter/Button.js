import React, { useEffect, useRef, useState } from 'react'

function Button() {
  const [name , setName] = useState('')
  // const count = useRef(1)
  const inputRef = useRef()
  // useEffect(() => {
  //   count.current=count.current + 1
  // })
  
  return (
    <div>
      <input ref={inputRef} onChange={(e) => setName(e.target.value)}/>
      <p>my name is {name} </p>
      <button onClick={()=> {
        inputRef.current.focus()
        inputRef.current.value="heloo"
      }}>click</button>
      {/* <p>the value in {count.current - 1}</p> */}
    </div>
  )
}

export default Button