import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Inc , Dec } from './states/reducers';

function App() {
  const curState = useSelector((state) =>state.number);
  const dispatch =useDispatch();
  return (
   <>
    <h1>react reducer tutorial</h1>
    <div style={{width:'100%', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
      <h1>{curState}</h1>
      <div>
      <button onClick={()=> dispatch(Inc(10))}>inc</button>
      <button onClick={()=> dispatch(Dec(5))}>dec</button>
      </div>
    </div>
   </>
  );
}

export default App;
