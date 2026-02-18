import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const PageOneContent = () => {
  return (
    <div className="py-10 flex item-center  h-[90vh] gap-10">
      <LeftContent />
      <RightContent />
    </div>
  );
};

export default PageOneContent;
