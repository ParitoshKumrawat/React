import axios from "axios";

import { useState } from "react";

const CallAxiosII = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");

    setData(response.data);
  };

  return (
    <div>
      <button onClick={getData}>axiosII</button>
      <div>
        {data.map(function (elem, idx) {
          return (
            <h1 key={idx}>
              Hello,{idx} & {elem.author}
            </h1>
          );
        })}
      </div>
    </div>
  );
};

export default CallAxiosII;
