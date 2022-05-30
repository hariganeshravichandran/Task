import React from "react";
import "./App.css";
import Task7 from './component/Task7/Task7';
// import Todo from './component/Todo/Todo';
// import Task2 from "./component/Task2/Task2";
// import Button from './component/Counter/Button';
// import Task1 from './component/Task/Task1';
// import Task3 from './component/Task3/Task3';
// import Task4 from './component/Task4/Task4';
// import Main from './component/Task5/Main';
// import Page from './component/Task6/page';
import Main from './component/Router/Main';

function App() {
  return (
    <div className="App">
      {/* <div className='item1'>
        <Button sign= '+'/>
      </div>
      <div className='count'>
        {count}
      </div>
      <div className='item2'>
        <Button sign= '-'/>
      </div>
      <div className='item3'>
        <Button sign= 'Reset'/>
      </div> */}
      {/* <Button/> */}
      {/* <Task1/> */}
      {/* <Task2 /> */}
      {/* <Task3/> */}
      {/* <Task4/> */}
      {/* <Main/> */}
      {/* <Page/> */}
      {/* <Todo/> */}
      {/* <Task7/> */}
      <Main/>
    </div>
  );
}

export default App;
