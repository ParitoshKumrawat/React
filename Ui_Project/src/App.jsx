import React from "react";
import SectionOne from "./components/section1/SectionOne";
import SectionTwo from "./components/section2/SectionTwo";

const App = () => {
  const arr = [
    {
      img: "https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      color: "royalblue",
      tag: "Satisfied",
    },
    {
      img: "https://media.istockphoto.com/id/1369746033/photo/portrait-of-a-handsome-young-businessman-working-in-office.jpg?s=2048x2048&w=is&k=20&c=Zv_d4Mry2Sice0-J22nHx-06dIJeVZPU65-GcfyJBOE=",
      color: "pink",
      intro: "",
      tag: "Ultimate",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661766513512-c32d32da0c06?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "orange",
      intro: "",
      tag: "Super",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661582704052-d6b0fe069b72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
      color: "black",
      intro: "",
      tag: "SuperMan",
    },
  ];

  return (
    <div>
      <SectionOne users={arr} />
      <SectionTwo />
    </div>
  );
};

export default App;
