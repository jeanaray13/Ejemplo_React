import './App.css';
import React, {useState} from 'react';
import ToDo from './Components/ToDo';
import Adder from './Components/Adder';

function App() {

  const [todoLst, setTodoList] = useState ([]);
  const addTask = (newTask) => {
    setTodoList([...todoLst, newTask]);
  }

  const updateStatus = (idx) => {
    const item = { ...todoLst[idx] };
    item.status = !item.status;
    setTodoList(
      [
        ...todoLst.slice(0, idx),
        item,
        ...todoLst.slice(idx+1, todoLst.length)
      ]
    );
    console.log(todoLst);
  }

  const removeTask = (idx) =>{
    setTodoList(
      [
        ...todoLst.slice(0, idx),
        ...todoLst.slice(idx+1, todoLst.length)
      ]
    );
  }


  return (
    <div className="App">
      <Adder addTask={addTask} />
      <ToDo todoLst={todoLst} removeTask={removeTask} updateStatus={updateStatus}/>
    </div>
  );
}

export default App;
