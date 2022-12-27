import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [toDo, setToDo] = useState(["Go to dentist", "Read about useEffect"])

  const [toDoValue, setToDoValue] = useState("");

  const handleChangeInput = (event) => {
    setToDoValue(event.target.value);
  }
  
  const handleChange = (e) => {
    e.preventDefault();
    setToDo(prevToDo => [...prevToDo, toDoValue])
  }

  const items = toDo.map(item => (
    <li key={item}>{item}</li>
  ));
  
    
  return (
    <div className="App">
      <h2>To Do List</h2>
      <form >
        <input 
          className='add-todo' 
          onChange={handleChangeInput}
          type="text"
          id='toDoValue'
          name='toDoValue'
          value={toDoValue}
        />
        <button onClick={handleChange}>Add</button>
      </form>
      <ul>
        {items}
      </ul>
    </div>
  )
}

export default App
