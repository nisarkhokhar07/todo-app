import { AddTodo } from "./AddTodo";
import { Navbar } from "./Navbar";
import { TodoList } from "./TodoList";

function App() {
  return (
    <div className="App">
      <Navbar />
    <div className="mydiv">
      <AddTodo />
      <TodoList/>
    </div>
    </div>
  );
}

export default App;
