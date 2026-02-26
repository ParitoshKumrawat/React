import React from "react";
import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <div className="flex justify-center gap-10 px-8 py-4">
        <Link to="/contact/phone" className="text-semibold ">
          Phone Number
        </Link>
        <Link to="/contact/adderess" className="text-semibold">
          Adderess
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Contact;
