import React from "react";
import { MoveUpRight } from "lucide-react";

const LeftContent = () => {
  return (
    <div className="py-4 px-6 w-1/3 flex flex-col justify-between">
      <div>
        <h3 className="text-6xl mb-4">
          Prospective <br />
          <span>Customer</span> <br />
          Segmentation
        </h3>
        <p className="text-lg text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est totam
          explicabo molestias commodi voluptatibus? Repellendus eos hic nobis
          optio suscipit.
        </p>
      </div>
      <div>
        <MoveUpRight className="w-20 h-20" />
      </div>
    </div>
  );
};

export default LeftContent;
