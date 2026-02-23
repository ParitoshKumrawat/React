import React from "react";
import { useEffect } from "react";

const App = () => {
  const [a, setA] = React.useState(0);
  const [b, setB] = React.useState(0);

  function changeA() {
    console.log("A is changing");
  }

  function changeB() {
    console.log("B is changing");
  }

  useEffect(() => {
    changeA();
  }, [a]);

  useEffect(() => {
    changeB();
  }, [b]);

  return (
    <div>
      <h1>Helllo</h1>
      <h1>a = {a}</h1>
      <h1>b = {b}</h1>
      <button
        onClick={() => {
          setA(a + 1);
        }}
      >
        Btn1
      </button>
      <button
        onClick={() => {
          setB(b + 1);
        }}
      >
        Btn2
      </button>
    </div>
  );
};

export default App;
