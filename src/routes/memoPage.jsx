import { useState } from "react";
import TodosNoMemo from "../components/TodosNoMemo";
import { TodosMemo } from "../components/TodosMemo";

function MemoPage() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment1 = () => {
    setCount1((c) => c + 1);
  };

  const increment2 = () => {
    setCount2((c) => c + 1);
  };

  return (
    <>
      <h1>memo</h1>
      <hr />
      <div>
        <p>
          1. memo ใช้เพื่อทำให้ React ข้ามการ render component
          หากไม่มีการเปลี่ยนแปลง props
        </p>
        <p>2. ประโยชน์ของ memo คือ ใช้ในการ optimize</p>
      </div>
      <div className="border border-black p-4 mb-3">
        <h2>Problem</h2>
        <p>
          เมื่อคลิกปุ่ม + แล้วดูที่ log จะเห็นว่าตัว Todos re-render
          ไปด้วยทั้งที่ข้อมูลไม่มีการเปลี่ยนแปลงเลย หาก Todos เป็น component
          ที่ซับซ้อนมากจะยิ่งทำให้เสียทรัพยากรในการ render ทำให้ต้องใช้ memo
          เข้ามาช่วยเพื่อประสิทธิภาพที่ดีขึ้น
        </p>
        <hr />
        <TodosNoMemo todos={todos} />
        <hr />
        <div>
          Count: {count1}
          <button className="ms-2" onClick={increment1}>
            +
          </button>
        </div>
      </div>
      <div className="border border-black p-4 mb-3">
        <h2>Solution</h2>
        <p>นำ memo ไปคลอบที่ Todos component ตรงส่วน export</p>
        <hr />
        <TodosMemo todos={todos} />
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

export default MemoPage;
