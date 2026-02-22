import React from "react";

const App = () => {
  const submitHandler = (elem) => {
    elem.preventDefault(); // Stops the default reloading behaviour of form.
    console.log("form submitted..");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input type="text" placeholder="Enter your name" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
