import { memo } from "react";
import PropTypes from "prop-types";

function TodosNoUseCallbackComponent({ todos, addTodo }) {
  console.log("print from TodosNoUseCallbackComponent");
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

TodosNoUseCallbackComponent.propTypes = {
  todos: PropTypes.array,
  addTodo: PropTypes.func,
};

export const TodosNoUseCallback = memo(TodosNoUseCallbackComponent);
