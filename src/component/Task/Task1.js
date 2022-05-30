import React, { useState } from 'react'
import { userPosts } from './UserPosts';

function Task1() {

    const [state,setState] = useState("")
    const [user, setUser] = useState(userPosts)
    // const data = user.filter
    // console.log("data",user.filter((data,index)=>data.id.toString() === state));
  return (
    <div>
        <div>
            <input type="text" placeholder='search' onChange={(e)=>setState(e.target.value)}/>
        </div>
       <table>
           <tr>
           <th>userid</th>
           <th>id</th>
           <th>tittle</th>
           <th>body</th>
           </tr>
        {user.filter((v) => {
            if(state === ""){
                return v
            }else if (
               v.body.toLowerCase().includes(state.toLowerCase()) ||
               v.title.toLowerCase().includes(state.toLowerCase()) ||
               v.id.toString().includes(state)
            ) {
             return v
            }
        }).map((v , index) => 
             <tr key={index}>
            <td>{v.userId}</td>
            <td>{v.id}</td>
            <td>{v.title}</td>
            <td>{v.body}</td>
            </tr>
        )}
        </table>
    </div>
  )
}

export default Task1