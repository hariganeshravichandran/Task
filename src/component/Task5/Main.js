import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Create from './Create';
import Read from './Read';
import Update from './Update';
import './main.css'

function Main() {
  return (
    <div className='main'>
        <h1>Crud operation</h1>
        <BrowserRouter>
        <Routes>
            <Route exact path='/create' element={<Create/>}/>
            <Route exact path='/read' element={<Read/>}/>
            <Route exact path='/update' element={<Update/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Main