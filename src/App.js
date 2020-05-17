import React, {useEffect} from 'react';
import './App.css';
import {Memory} from './Memory';
import {useSelector, useDispatch} from 'react-redux';
import {loadDay,startAddingMemory} from './actions';




// const userName = "TEST";

const userName = "liuj0331"


function App() {

  const memories = useSelector(state =>state.memories); 
  const isWaiting =useSelector(state => state.isWaiting);
  const dispatch = useDispatch();


  useEffect(() =>{
    dispatch(loadDay(userName));
  },[dispatch]);


const onAdd =() =>{
  dispatch(startAddingMemory(userName));
}


  return (
    
    <div className="main-root">
      {isWaiting && <div className="spinner"/>}
       <div className="header">Welcome to UWEC Second-hand Markeplace</div>
        <span className="userName">UserName: {userName}</span><button onClick = {onAdd} class="addButton">Add My Item</button>
       <div className="card-root">
           {memories.map(memory => <Memory key={memory.id} memory = {memory} />)}
        </div>
    </div> 
  );
}

export default App;