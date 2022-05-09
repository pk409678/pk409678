import React, { useState } from 'react';
import './App.css'


function App() {

  let  [count, uptValue] = useState(0);
  const valChange = () => {
     uptValue(count +1);
  }
  const valueChange = () => {
    uptValue(count -1)

 }



  return (
    <>
      <div className='container1'>
    <h1>Counter App</h1>
    <br></br>
        <h1 id='num'>{count}</h1>
        <button onClick={valueChange}   disabled = {count === 0 }>Decrement</button>
        <button  style={{backgroundColor:'green'}} onClick={valChange}>Increment</button>
        <br></br>
        <button style={{backgroundColor:'red',marginTop: '20px'}} onClick={()=>{uptValue(0)}}  disabled = {count === 0 }>Reset</button>
      </div>
    </>
  );
}

export default App;
