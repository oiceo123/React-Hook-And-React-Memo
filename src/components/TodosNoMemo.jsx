import PropTypes from "prop-types";

const TodosNoMemo = ({ todos }) => {
  console.log("print from TodosNoMemo");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
};

TodosNoMemo.propTypes = {
  todos: PropTypes.array,
};

export default TodosNoMemo;
