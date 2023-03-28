import React, { useState } from "react";
import TodoItem from "./TodoItem";

function App() {
  
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(e){
    setInput(e.target.value)
  }

  function addItem(){
    setItems( (prevItems)=> {
      return [...prevItems, input]
    })
    setInput("")
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={input} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
         {items.map(todoitem => (
              <TodoItem 
                text = {todoitem}
              />
         ))}

        


        </ul>
      </div>
    </div>
  );
}

export default App;
