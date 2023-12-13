import { useState } from "react";

function UseStatePage() {
  const [account, setAccount] = useState({ username: "", password: "" });
  const [accountList, setAccountList] = useState([]);
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: "", address: "" });
  const [prevUser, setPrevUser] = useState({ name: "", address: "" });
  return (
    <>
      <h1>useState Hook</h1>
      <div className="border border-black p-4">
        <h2>แบบที่ 1 ใช้งานกับ Object</h2>
        <p>#Debug {JSON.stringify(account)}</p>
        <input
          type="text"
          placeholder="Username"
          value={account.username}
          onChange={(e) => setAccount({ ...account, username: e.target.value })}
        />
        <br />
        <input
          type="text"
          placeholder="Password"
          value={account.password}
          onChange={(e) => setAccount({ ...account, password: e.target.value })}
        />
        <br />
        <div className="mt-3">
          <button
            onClick={(e) => {
              e.preventDefault();
              setAccountList([...accountList, account]);
            }}
          >
            submit
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setAccount({ username: "", password: "" });
            }}
          >
            clear
          </button>
        </div>
      </div>
      <div className="border border-black p-4">
        <h2>แบบที่ 2 ใช้งานกับ Array</h2>
        <ul>
          {accountList.map((item, index) => (
            <li key={index}>
              Username: {item.username}, Password: {item.password}
            </li>
          ))}
        </ul>
      </div>
      <div className="border border-black p-4">
        <h2>แบบที่ 3 ดึงค่าก่อนหน้าการเปลี่ยนแปลงมาใช้งาน</h2>
        <h3>Counter: {count}</h3>
        <div className="mt-3">
          <button onClick={() => setCount(count + 1)}>เพิ่ม +1</button>
          <button
            onClick={() => {
              setCount((prevState) => prevState + 1); // setCount(0 => 1)
              setCount((prevState) => prevState + 1); // setCount(1 => 2)
              setCount((prevState) => prevState + 1); // setCount(2 => 3)
            }}
          >
            เพิ่ม +3
          </button>
          <button
            onClick={() => {
              setCount(count + 1); // setCount(0 + 1)
              setCount(count + 1); // setCount(0 + 1)
              setCount(count + 1); // setCount(0 + 1)
            }}
          >
            เพิ่ม +3 แบบ Error
          </button>
        </div>
      </div>
      <div className="border border-black p-4">
        <h2>แบบที่ 4 ส่ง event ไปพร้อมกับค่าก่อนหน้าการเปลี่ยนแปลง</h2>
        <p>Current: </p>
        <p>
          Name: {user.name}, Address: {user.address}
        </p>
        <p>Previous: </p>
        <p>
          Name: {prevUser.name}, Address: {prevUser.address}
        </p>
        <input
          type="text"
          placeholder="Name"
          value={user.name}
          onChange={(e) => {
            setUser((prevState) => {
              setPrevUser(prevState);
              return { ...user, name: e.target.value };
            });
          }}
        />
        <br />
        <input
          type="text"
          placeholder="Address"
          value={user.address}
          onChange={(e) => {
            setUser((prevState) => {
              setPrevUser(prevState);
              return { ...user, address: e.target.value };
            });
          }}
        />
        <br />
      </div>
    </>
  );
}

export default UseStatePage;
