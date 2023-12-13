import { memo } from "react";
import PropTypes from "prop-types";

function TodosUseCallbackComponent({ todos, addTodo }) {
  console.log("print from TodosUseCallbackComponent");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button className="mt-2" onClick={addTodo}>
        Add Todo
      </button>
    </>
  );
}

TodosUseCallbackComponent.propTypes = {
  todos: PropTypes.array,
  addTodo: PropTypes.func,
};

export const TodosUseCallback = memo(TodosUseCallbackComponent);
