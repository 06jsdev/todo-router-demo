import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import TodoList from "../components/TodoList";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [newTask, setNewTask] = useState("");
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const location = useLocation();
  const filter = location.pathname.split("/").pop();

  const filteredTodos =
    filter === "active"
      ? todos.filter((todo) => !todo.completed)
      : filter === "completed"
      ? todos.filter((todo) => todo.completed)
      : todos;

  const handleAddTask = () => {
    if (newTask.trim() === "") {
      return;
    }
    const newTodo = {
      id: uuidv4(),
      title: newTask,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setNewTask("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <>
      <div className="max-w-md mx-auto my-8 p-4 drop-shadow-xl shadow-xl rounded">
        <h1 className="text-2xl font-bold mb-4">Todo App</h1>
        <div className="flex my-6">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter a new task"
            className="flex-1 rounded-l py-2 px-4 border border-gray-300 focus:outline-none focus:border-indigo-500"
          />
          <button
            onClick={handleAddTask}
            className="bg-indigo-500 text-white px-4 py-2 rounded-r focus:outline-none hover:bg-indigo-600"
          >
            Add
          </button>
        </div>
        <TodoList
          todos={filteredTodos}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
      </div>
    </>
  );
};

export default Home;
