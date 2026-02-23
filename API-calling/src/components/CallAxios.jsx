import axios from "axios";

const CallAxios = () => {
  const getData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    console.log(response.data);
  };

  return (
    <div>
      <button onClick={getData}>Respo</button>
    </div>
  );
};

export default CallAxios;
