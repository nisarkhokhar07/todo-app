import { AddTodo } from "./AddTodo";
import { Navbar } from "./Navbar";
import { TodoList } from "./TodoList";
import { useState } from "react";

function App() {
  const [reload, setReload] = useState(false);

  return (
    <div className="App">
      <Navbar />
      <div className="mydiv">
        <AddTodo setReload={setReload} reload={reload} />
        <TodoList reload={reload} setReload={setReload} />
      </div>
    </div>
  );
}

export default App;
