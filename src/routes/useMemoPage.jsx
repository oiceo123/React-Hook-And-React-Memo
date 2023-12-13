import { useMemo, useState } from "react";
import PropTypes from "prop-types";

function UseMemoPage() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [todos1, setTodos1] = useState([]);
  const [todos2, setTodos2] = useState([]);
  const calculation = expensiveCalculation(count1);
  // const calculation = useMemo(() => expensiveCalculation(count2), [count2]);

  const increment1 = () => {
    setCount1((c) => c + 1);
  };

  const increment2 = () => {
    setCount2((c) => c + 1);
  };

  const addTodo1 = () => {
    setTodos1((t) => [...t, "New Todo"]);
  };

  const addTodo2 = () => {
    setTodos2((t) => [...t, "New Todo"]);
  };

  return (
    <>
      <h1>useMemo Hook</h1>
      <hr />
      <p>
        1. useMemo ใช้ในการจดจำค่าบางอย่างไว้แม้ว่าจะ re-render
        แต่ค่าที่จดจำไว้ก็จะไม่เปลี่ยนแปลงและไม่ทำการคำนวณใหม่
      </p>
      <p>
        2. ค่าที่จดจำไว้จะเปลี่ยนแปลงก็ต่อเมื่อค่าใน [] มีการเปลี่ยนแปลงเท่านั้น
      </p>
      <p>3. มักจะใช้ useMemo กับค่าที่จะได้มาจากกระบวนการที่ต้องใช้เวลานาน</p>
      <p>4. ประโยชน์ของ useMemo คือใช้ในการ optimize</p>
      <div className="border border-black p-4 text-center mb-3">
        <div className="text-start">
          <h1>Basic</h1>
          <p>
            เมื่อคลิกที่ปุ่ม Increase หรือ Reset จะช้าเนื่องมาจากในส่วนของ
            Problem ด้านล่าง
          </p>
        </div>
        <hr />
        <div className="mb-3">
          <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
        <Content a={1} b={count} />
      </div>
      <div className="border border-black p-4 mb-3">
        <h1>Problem</h1>
        <p>
          เมื่อลองคลิกที่ปุ่ม + หรือ Add Todo
          จะเห็นว่าช้ามากกว่าจะเกิดการเปลี่ยนแปลง
        </p>
        <p>
          เหตุผลที่เป็นแบบนี้เพราะว่า ตัว expensive calculation
          ที่ใช้เวลาในการคำนวณนานต้อง re-render ตาม Component
          ทุกครั้งที่เกิดการเปลี่ยนแปลงกับ state ของ component
          ทำให้เกิดความช้าอย่างที่เห็น
        </p>
        <p>วิธีแก้คือใช้ useMemo ช่วยจำค่าไว้</p>
        <p style={{ color: "red" }}>
          !!! หากต้องการใช้งานส่วน Solution ให้ไปแก้โค้ดในส่วน calculation ก่อน
        </p>
        <p>1. comment calculation ที่ไม่มี useMemo ก่อน</p>
        <p>2. ลบ comment calculation ที่มี useMemo ออก</p>
        <hr />
        <div>
          <h2>My Todos</h2>
          {todos1.map((todo, index) => {
            return <p key={index}>{todo}</p>;
          })}
          <button className="mt-2" onClick={addTodo1}>
            Add Todo
          </button>
        </div>
        <hr />
        <div>
          Count: {count1}
          <button className="ms-2 mb-2" onClick={increment1}>
            +
          </button>
          <h2>Expensive Calculation</h2>
          {calculation}
        </div>
      </div>
      <div className="border border-black p-4 mb-3">
        <h1>Solution</h1>
        <hr />
        <div>
          <h2>My Todos</h2>
          {todos2.map((todo, index) => {
            return <p key={index}>{todo}</p>;
          })}
          <button className="mt-2" onClick={addTodo2}>
            Add Todo
          </button>
        </div>
        <hr />
        <div>
          Count: {count2}
          <button className="ms-2 mb-2" onClick={increment2}>
            +
          </button>
          <h2>Expensive Calculation</h2>
          {calculation}
        </div>
      </div>
    </>
  );
}

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

const Content = ({ a, b }) => {
  const memorizedRandom = useMemo(() => {
    return Math.random();
  }, [a]);

  const random = Math.random();

  return (
    <>
      <h1>
        A/B: {a}/{b}
      </h1>
      <h1>Random: {random}</h1>
      <h1>MemorizedRandom: {memorizedRandom}</h1>
    </>
  );
};

Content.propTypes = {
  a: PropTypes.number,
  b: PropTypes.number,
};

export default UseMemoPage;
