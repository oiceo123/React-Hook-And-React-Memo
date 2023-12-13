import { useReducer } from "react";

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

function UseReducerPage() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  console.log(todos);

  return (
    <>
      <h1>useReducer Hook</h1>
      <hr />
      <div className="border border-black p-4">
        <h2>Basic</h2>
        <hr />
        {todos.map((todo) => (
          <div key={todo.id}>
            <input
              type="checkbox"
              className="me-2"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </div>
        ))}
      </div>
    </>
  );
}

export default UseReducerPage;
