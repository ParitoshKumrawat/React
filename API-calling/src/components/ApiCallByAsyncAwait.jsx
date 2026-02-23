import React from "react";

// This component demonstrates how to make an API call using async/await in React.
// When the button is clicked, it fetches data from the specified URL and logs the JSON response to the console.

const ApiCallByAsyncAwait = () => {
  const data = fetch("https://jsonplaceholder.typicode.com/users");

  const jsonData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");

    const d2 = await data.json();

    console.log(d2);
  };

  return (
    <div>
      <button onClick={jsonData}>Data</button>
    </div>
  );
};

export default ApiCallByAsyncAwait;
