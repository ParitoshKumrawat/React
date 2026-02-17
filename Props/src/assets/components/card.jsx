import React from "react";

const card = (props) => {
  console.log(props);
  return (
    <div className="card">
      <img src={props.img} alt="" />
      <h1>hello {props.name}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button>View profile</button>
    </div>
  );
};

export default card;
