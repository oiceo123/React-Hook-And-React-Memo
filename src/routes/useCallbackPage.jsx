import { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { TodosNoUseCallback } from "../components/TodosNoUseCallback";
import { TodosUseCallback } from "../components/TodosUseCallback";
import { useLocation } from "react-router-dom";

function UseCallbackPage() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [todos1, setTodos1] = useState([]);
  const [todos2, setTodos2] = useState([]);

  const increment1 = () => {
    setCount1((c) => c + 1);
  };

  const increment2 = () => {
    setCount2((c) => c + 1);
  };

  const addTodoNoUseCallback = () => {
    setTodos1((t) => [...t, "New Todo"]);
  };

  const addTodoUseCallback = useCallback(() => {
    setTodos2((t) => [...t, "New Todo"]);
  }, [todos2]);

  return (
    <>
      <h1>useCallback Hook</h1>
      <hr />
      <p>
        1. useCallback ใช้ในการจดจำ function บางอย่างไว้แม้ว่าจะ re-render แต่
        function ที่จดจำไว้จะไม่ถูกสร้างใหม่
      </p>
      <p>
        2. function ที่จดจำไว้จะถูกสร้างใหม่ก็ต่อเมื่อค่าใน []
        มีการเปลี่ยนแปลงเท่านั้น
      </p>
      <p>
        3. ใช้ useCallback กับ function ที่จะใช้ทรัพยากรจำนวนมาก
        เพื่อไม่ให้ฟังก์ชันเหล่านั้นทำงานโดยอัตโนมัติในการเรนเดอร์ทุกครั้ง
      </p>
      <p>4. ประโยชน์ของ useCallback คือใช้ในการ optimize</p>
      <div className="border border-black p-4 text-center mb-3">
        <h1 className="text-start">Basic</h1>
        <hr />
        <div className="mb-3">
          <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
        <Content id={count} />
      </div>
      <div className="border border-black p-4 mb-3">
        <h1>Problem</h1>
        <p>
          ลองคลิกปุ่ม + แล้วดูที่ log จะเห็นว่า Todos ถูก re-render
          ทั้งๆที่เราก็ใส่ memo ให้กับ Todos แล้ว
        </p>
        <p>เหตุผลที่เป็นแบบนั้นเพราะสิ่งที่เรียกว่า referential equality</p>
        <p>
          ทุกครั้งที่ component ถูก re-render ตัวฟังก์ชั่นภายใน component
          ก็จะถูกสร้างใหม่ ด้วยเหตุนี้ฟังก์ชั่น addTodo
          จึงถือว่าเกิดการเปลี่นแปลงขึ้น
        </p>
        <p>
          ทำให้ Todos component ที่มี props เป็น addTodo เกิดการ re-render ด้วย
        </p>
        <hr />
        <TodosNoUseCallback todos={todos1} addTodo={addTodoNoUseCallback} />
        <hr />
        <div>
          Count: {count1}
          <button className="ms-2" onClick={increment1}>
            +
          </button>
        </div>
      </div>
      <div className="border border-black p-4 mb-3">
        <h1>Solution</h1>
        <hr />
        <TodosUseCallback todos={todos2} addTodo={addTodoUseCallback} />
        <hr />
        <div>
          Count: {count2}
          <button className="ms-2" onClick={increment2}>
            +
          </button>
        </div>
      </div>
    </>
  );
}

const Content = ({ id }) => {
  console.log("Re-render");
  const handleClick = useCallback(() => {
    console.log("Click");
  }, []);

  return (
    <>
      <h1>UseCallback Demo {id}</h1>
      <button onClick={handleClick}>Test</button>
    </>
  );
};

Content.propTypes = {
  id: PropTypes.number,
};

export default UseCallbackPage;
