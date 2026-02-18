import React from "react";
import Card from "./assets/components/card";

const App = () => {
  return (
    <div className="parent">
      <Card
        name="Harsh"
        age={25}
        img="https://images.unsplash.com/photo-1760810650339-57876138fd11?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        name="Sai"
        age={20}
        img="https://plus.unsplash.com/premium_photo-1768288662582-24c46f53d290?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card name="Rohit" age={30} />
    </div>
  );
};

export default App;
