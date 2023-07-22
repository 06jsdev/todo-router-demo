import PropTypes from "prop-types";

const TodoList = ({ todos, handleDelete, handleToggle }) => {
  return (
    <>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <div key={todo.id}>
            <li className="flex items-center">
              <input
                type="checkbox"
                className="mr-2 text-indigo-600"
                checked={todo.completed}
                onChange={() => handleToggle(todo.id)}
              />
              <p
                className={`flex-1 text-lg ${
                  todo.completed ? "line-through text-gray-400" : "text-black"
                }`}
                onClick={() => handleToggle(todo.id)}
              >
                {todo.title}
              </p>
              <button
                className="ml-4 bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                onClick={() => handleDelete(todo.id)}
              >
                Delete
              </button>
            </li>
            <hr />
          </div>
        ))}
      </ul>
    </>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

export default TodoList;
