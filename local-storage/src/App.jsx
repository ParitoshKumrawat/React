import React from "react";

const App = () => {
  const obj = {
    name: "Jonhn",
    age: 30,
    city: "New York",
  };

  localStorage.setItem("user", JSON.stringify(obj));

  const naam = JSON.parse(localStorage.getItem("user"));
  console.log(naam);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default App;
