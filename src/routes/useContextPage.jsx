import ThemeContext from "../contexts/ThemeContext";
import { useContext } from "react";

function UseContextPage() {
  const cc = useContext(ThemeContext);

  return (
    <>
      <h1>useContext Hook</h1>
      <hr />
      <div className="border border-black p-4 text-center">
        <ThemeContext.Consumer>
          {(color) => <h1 style={{ color }}>Color is {color}</h1>}
        </ThemeContext.Consumer>

        <h2>{cc}</h2>
      </div>
    </>
  );
}

export default UseContextPage;
