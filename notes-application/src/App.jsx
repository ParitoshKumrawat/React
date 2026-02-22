import React, { useState } from "react";

const App = () => {
  const [tittle, setTittle] = useState("");
  const [details, setDetails] = useState("");
  const [Task, setTask] = useState([]);

  const submiHandler = (e) => {
    e.preventDefault();

    const copyTask = [...Task];
    copyTask.push({ tittle, details });
    setTask(copyTask);

    setTittle("");
    setDetails("");
  };

  const deleteTask = (idx) => {
    const copyTask = [...Task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <div className="h-screen lg:flex bg-black text-white ">
      <form
        onSubmit={(e) => {
          submiHandler(e);
        }}
        className="flex flex-col w-full lg:w-1/2 p-10 item-start  gap-10 jsutify-between "
      >
        <h1 className="text-3xl text-white font-bold">Add Notes:</h1>

        {/* First Input for heading. */}
        <input
          type="text"
          placeholder="Enter Task"
          className="p-5 h-5 text-xl border-2 rounded color-white "
          value={tittle}
          onChange={(e) => {
            setTittle(e.target.value);
          }}
        />

        {/* Second input for details. */}
        <textarea
          type="text"
          placeholder="Enter details "
          className="p-5 h-32 text-xl flex item-start flex-row border-2 rounded color-white "
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />

        {/* Submit button to create the notes. */}
        <button className="bg-white active:scale-95 text-xl h-10 text-black px-5 py-2 rounded">
          Add notes
        </button>
      </form>
      <div className="p-10 lg:w-1/2 lg:border-l ">
        <h1 className="text-3xl text-white font-bold">Your Notes:</h1>
        <div className="flex flex-wrap gap-10 mt-5 h-full overflow-auto">
          {Task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="relative h-70 w-50 flex flex-col justify-between items-start text-black rounded-2xl py-11 px-4 bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] overflow-auto "
              >
                <div className="p-2">
                  <h1 className="font-medium leading-tight text-2xl text-bold font-bold">
                    {elem.tittle}
                  </h1>
                  <p className="text-gray-600 text-lg leading-tight font-medium mt-5">
                    {elem.details}
                  </p>
                </div>
                <button
                  onClick={() => {
                    deleteTask(idx);
                  }}
                  className="font-medium active:scale-95 w-full text-white bg-teal-800 rounded-2xl px-2 text-lg"
                >
                  Delete Note
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
