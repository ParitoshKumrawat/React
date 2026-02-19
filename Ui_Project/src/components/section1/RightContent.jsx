import React from "react";
import RightCard from "./RightCard";

const RightContent = (props) => {
  return (
    <div
      id="right"
      className="py-4 px-6 w-2/3 flex flex-nowrap gap-10 overflow-x-auto"
    >
      {props.users.map(function (elem, idx) {
        // console.log(elem.color);
        return (
          <RightCard
            key={idx}
            color={elem.color}
            id={idx}
            img={elem.img}
            tag={elem.tag}
          />
        );
      })}
    </div>
  );
};

export default RightContent;
