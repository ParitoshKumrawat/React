import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const PageOneContent = (props) => {
  return (
    <div className="py-10 flex item-center  h-[90vh] gap-10">
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  );
};

export default PageOneContent;
