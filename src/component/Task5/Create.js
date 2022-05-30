import React, { useState } from 'react'
import {Form,Button,Checkbox} from 'semantic-ui-react'
import { axios } from 'axios';
import { API_URL } from './constants/URL';


function Create() {
    const [firstname,setFirstName] = useState('')
    const [lastname,setLastName] = useState('')
    const [checked,setChecked] = useState(false)

    const postData = async () => {
       await axios.post(API_URL, {
            firstname,
            lastname,
            checked
        })
    }
  return (
    <div>
        <Form className='form'>
            <Form.Field>
                <label>FirstName:</label>
                <input value={firstname} onChange={(e)=>setFirstName(e.target.value)} placeholder='firstname'/>
            </Form.Field><br/>
            <Form.Field>
                <label>LastName:</label>
                <input value={lastname} onChange={(e)=>setLastName(e.target.value)} placeholder='lastname'/>
            </Form.Field><br/>
            <Form.Field>
            <Checkbox checked={checked} onChange={()=> setChecked(!checked)} label='i agree & terms and conditions'/>
            </Form.Field><br/>
            <Button onClick={postData}>submit</Button>
        </Form>
    </div>
  )
}

export default Create