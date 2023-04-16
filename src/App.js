import React from 'react';
import { useState } from 'react';

const App = () => {

  const [value,setValue]=useState("");
  const [data,setData]=useState([]);

  const handleChange=(evt)=> {
console.log(evt.target.value);
setValue(evt.target.value);
  }

  const handleClick=()=> {

  }
  return (
    <>
    <div className='main_div'>
<div className='center_div'>
  <br />
  <h1>ToDo List</h1>
  <br />
  <input type="text" placeholder='Add Your Item' onChange={handleChange}/>
  <button onClick={handleClick}> + </button>
  <ol>
    <li>Buy Apple</li>
    <li>{value}</li>
    <li>
      {data.map=(item)=> {
        return(
          <>
          
          </>
        )
      }}
    </li>
  </ol>
</div>
    </div>
    </>
  )
}

export default App