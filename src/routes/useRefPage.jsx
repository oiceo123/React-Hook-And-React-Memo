import { useState, useEffect, useRef } from "react";

// ใช้เก็บค่าระหว่างการ render ได้
// ใช้เก็บค่าที่มีการเปลี่ยนแปลงค่าได้ แต่เมื่อใช้ useRef จะไม่ทำให้เกิดการ re-render เหมือนกับ useState
// ใช้เข้าถึง DOM
function UseRefPage() {
  const inputEl = useRef();

  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  const focusInput = () => {
    inputEl.current.focus();
  };

  return (
    <>
      <h1>useRef Hook</h1>
      <hr />
      <div className="border p-4 mb-3">
        <h2 className="mb-4">แบบที่ 1 ใช้งานเพื่อเข้าถึง DOM</h2>
        <input type="text" ref={inputEl} />
        <button onClick={focusInput}>Focus Input</button>
      </div>
      <div className="border p-4">
        <h2 className="mb-4">
          แบบที่ 2 ใช้งานเพื่อดึงค่าก่อนหน้าการเปลี่ยนแปลง
        </h2>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="mt-3">
          <h3>Current Value: {inputValue}</h3>
          <h3>Previous Value: {previousInputValue.current}</h3>
        </div>
      </div>
    </>
  );
}

export default UseRefPage;
