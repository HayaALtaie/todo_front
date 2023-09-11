import { useEffect, useState } from "react";
import ToDo from "./components/toDo";
import { addToDo, getAllToDo,  deleteToDo } from "./utils/HandleApi";


function App() {

  const [toDo, setToDo] = useState([])
  const [text, setText] = useState("")

  useEffect(() => {
    getAllToDo(setToDo)
  }, [])

  return (
    <div className="App">

      <div className="container">

        <h1 >ToDo List</h1>

        <div className="top">
          <input
            type="text"
            placeholder="Add ToDos..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button
            className="add"
            onClick={() => addToDo(text, setText, setToDo)}>
            Add
          </button>

        </div>

        <div className="list">

          {toDo.map((item) => <ToDo 
          key={item._id} 
          text={item.text}
          deleteToDo = {() => deleteToDo(item._id, setToDo)} />)}

        </div>

      </div>

    </div>
  );
}

export default App;
