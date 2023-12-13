import { memo } from "react";
import PropTypes from "prop-types";

const TodosMemoComponent = ({ todos }) => {
  console.log("print from TodosMemo");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
};

TodosMemoComponent.propTypes = {
  todos: PropTypes.array,
};

export const TodosMemo = memo(TodosMemoComponent);
