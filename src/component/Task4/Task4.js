//useCallback

// import React, { useCallback, useState } from 'react'
// import Product from './Product'

// function Task4() {
//   const [ prod, setProd] = useState(["prod1","prod2"])
//   const [count,setCount] = useState(0)
//   const[cart , setCart] = useState(0)

//   const addCart = useCallback(() =>{
//     setCart(cart + 1)
//   },[cart])
//   return (
//     <div className='app'>
//       <h1>{count}</h1>
//       <h1>cart:{cart}</h1>
//       <button onClick={()=>setCount(count + 1)}>-</button>
//       <div className='wrapper'>
//         {prod.map((p,i)=>{
//           return <Product name={p} addCart={addCart}key={i}/>
//         })}
//       </div>
      
//     </div>
//   )
// }

// export default Task4


import React from 'react'

function Task4() {
  return (
    <div>
      
    </div>
  )
}

export default Task4