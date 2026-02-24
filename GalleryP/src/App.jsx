import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [data, setData] = React.useState([]);
  const [index, setIndex] = React.useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=30`,
    );

    setData(response.data);
  };

  useEffect(
    function () {
      getData();
    },
    [index],
  );

  let printData = (
    <h3 className="text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      Loading...
    </h3>
  );

  if (data.length > 0) {
    printData = data.map(function (elem, idx) {
      return (
        <div key={idx}>
          <a href={elem.url} target="_blank">
            <div className="h-40 w-44 overflow-hidden rounded-xl bg-white">
              <img
                className="h-full w-full object-cover "
                src={elem.download_url}
                alt=""
              />
            </div>
            <h2>{elem.author}</h2>
          </a>
        </div>
      );
    });
  }

  return (
    <div className=" h-screen overflow-auto bg-black text-white">
      {/* Album of images starts as follows. */}

      <div className="flex flex-wrap h-[90%] overflow-auto px-4 gap-4">
        {printData}
      </div>

      <div className="flex justify-center item-center gap-10 m-4">
        <button
          style={{ opacity: index == 1 ? 0.5 : 1 }}
          onClick={() => {
            if (index > 1) setIndex(index - 1);
          }}
          className="bg-amber-400 active:scale-95 rounded-xl text-black px-4 py-2  "
        >
          prevs
        </button>
        <h2 className="text-bold py-2 text-gray-300 ">page {index}</h2>
        <button
          style={{ opacity: index == 34 ? 0.5 : 1 }}
          onClick={() => {
            if (index < 34) setIndex(index + 1);
          }}
          className="bg-amber-400 active:scale-95 rounded-xl text-black px-4 py-2  "
        >
          next
        </button>
      </div>
    </div>
  );
};

export default App;
