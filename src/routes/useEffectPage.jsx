import { useState, useEffect } from "react";

function UseEffectPage() {
  const [count, setCount] = useState(0);

  // แบบที่ไม่ควรทำ ในกรณีใช้งานกับ setInterval ลอง log ดูความแตกต่าง
  /* const doSomeThing = () => {
    setCount(count + 1);
    console.log("Do Some Thing");
  };

  useEffect(() => {
    // ถูกเรียกเมื่อ state ที่กำหนดใน [] มีการเปลี่ยนแปลงค่า
    const intervalId = setInterval(doSomeThing, 1000);
    // Cleanup
    return () => {
      // ถูกเรียกเมื่อ component นี้ถูกทำลาย หรือ ค่าที่กำหนดใน [] เปลี่ยนแปลง
      console.log("Destroyed");
      clearInterval(intervalId);
    };
  }, [count]); */

  // แบบที่ควรทำ ในกรณีใช้งานกับ setInterval ลอง log ดูความแตกต่าง
  const doSomeThing = () => {
    setCount((prevState) => prevState + 1);
    console.log("Do Some Thing");
  };

  useEffect(() => {
    // ถูกเรียกเมื่อ state ที่กำหนดใน [] มีการเปลี่ยนแปลงค่า
    const intervalId = setInterval(doSomeThing, 1000);
    // Cleanup
    return () => {
      // ถูกเรียกเมื่อ component นี้ถูกทำลาย หรือ ค่าที่กำหนดใน [] เปลี่ยนแปลง
      console.log("Destroyed");
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <h1>useEffect Hook</h1>
      <div className="border border-black p-4">
        <h1>Basic</h1>
        <hr />
        <div className="row">
          <div className="col-2">
            <h2>Timer:</h2>
          </div>
          <div className="col text-end">
            <h2>{count}</h2>
          </div>
          <div className="col-1 text-end">
            <h2>Sec</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default UseEffectPage;
