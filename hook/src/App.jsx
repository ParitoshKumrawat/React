import React from "react";
import { useState } from "react";

const App = () => {
  const [num, setNum] = useState(1);

  function increase() {
    setNum(num + 1);
  }

  function decrease() {
    setNum(num - 1);
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increase}> Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
};

export default App;
