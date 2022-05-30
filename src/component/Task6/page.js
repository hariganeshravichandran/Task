import React from 'react'
import './page.css'
import { Navbar, Nav } from 'rsuite';
import Task3 from './../Task3/Task3';
function Page() {
  return (
    // <div className='main'>  
    //     <h1 className='hi'>crud</h1>
    //    <div className='heading'>
    //       <p>santhosh</p>
    //        <p>hari</p>
    //        <p>manoj</p>
    //        <p>maha</p>
    //    </div>
    //    <div className='head'>
    //       <h1>students</h1>
    //    </div>
    //    <div className='list'>
    //      <li>how</li>
    //      <li>here</li>
    //      <li>okay</li>
    //    </div>
    // </div>
    <Navbar>
    <Navbar.Brand href="#">RSUITE</Navbar.Brand>
    <Nav>
      <Nav.Item icon={<Task3 />}>Home</Nav.Item>
      <Nav.Item>News</Nav.Item>
      <Nav.Item>Products</Nav.Item>
      <Nav.Menu title="About">
        <Nav.Item>Company</Nav.Item>
        <Nav.Item>Team</Nav.Item>
        <Nav.Item>Contact</Nav.Item>
      </Nav.Menu>
    </Nav>
    <Nav pullRight>
      {/* <Nav.Item icon={<Task2 />}>Settings</Nav.Item> */}
    </Nav>
  </Navbar>
  )
}

export default Page