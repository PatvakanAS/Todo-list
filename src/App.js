import { useState } from 'react';
 import './App.css';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import TodoFooter from "./components/TodoFooter";


function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn javaScript", isCompleted: false },
    { id: 2, text: "Learn React.js", isCompleted: false },
    { id: 3, text: "Learn Redux", isCompleted: false },
    { id: 4, text: "Learn Node.js", isCompleted: false },

  ]);
  

  return (
    <div className="App">
      <TodoForm onAdd={(text) => {
        setTodos([
          ...todos,
          {
            id: Math.random(),
            text: text,
            isCompleted: false,
          }
        ]);
      }} />
      <TodoList 
      todos={todos} 
      onDelete={(todo) => {
        setTodos(todos.filter((t) => t.id !== todo.id));
      }}
      onChange={(newTodo) => {
        setTodos(todos.map((todo) => {
          if(todo.id === newTodo.id){
            return newTodo;
          }
          return todo;
        }));
      }}
      />
      <TodoFooter todos={todos} onClearCompleted={() => {
        setTodos(todos.filter((todo) => !todo.isCompleted));
      }} />
    </div>
  );
}

export default App;
