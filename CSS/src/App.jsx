import Headers from "./components/header/header";
import Card from "./components/card/card";
import styles from "./components/header/header.module.css";

const App = () => {
  return (
    <div className="parent">
      {/* <h1>CSS</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
        nostrum!
      </p> */}
      <Headers />
      <Card />
    </div>
  );
};

export default App;
