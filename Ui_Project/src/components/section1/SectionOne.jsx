import Navbar from "./Navbar";
import PageOneContent from "./PageOneContent";

const SectionOne = (props) => {
  return (
    <div className=" w-full py-4 px-6 ">
      <Navbar />
      <PageOneContent users={props.users} />
    </div>
  );
};

export default SectionOne;
