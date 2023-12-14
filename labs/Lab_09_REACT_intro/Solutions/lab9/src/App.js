import './App.css';
import { useState } from 'react';
import React from 'react';



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='App'>
        <button className='btn' onClick={() => {setCount(count - 1);}}>-1</button>
        <button className='btn' onClick={() => {setCount(count + 1);}}>+1</button>
      </div>
      <div className='count-field'>
        <h1>{count}</h1>
      </div>
      <p className='delimiter'></p>
    </>
  );
}

export default App;
