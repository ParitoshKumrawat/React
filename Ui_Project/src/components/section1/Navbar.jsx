import React from "react";

const Navbar = () => {
  return (
    <div className="flex item-center justify-between py-6 px-16">
      <h4 className="bg-black text-white px-4 py-2 upper-case rounded-full ">
        Target Audience
      </h4>
      <button className="bg-gray-200 px-4 py-2 upper-case rounded-full ">
        Digital banking platform
      </button>
    </div>
  );
};

export default Navbar;
