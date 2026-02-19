import { ChevronRight } from "lucide-react";

const RightCardContent = (props) => {
  //   console.log(props.color);
  return (
    <div className="absolute top-0 left-0 h-full w-full py-4 px-4 flex flex-col justify-between ">
      <h1 className="bg-white font-semibold rounded-full h-12 w-12 flex justify-center items-center">
        {props.id + 1}
      </h1>
      <div className="flex flex-col ">
        <p className="text-lg font-thin leading-[1.2] text-white mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eligendi
          quaerat exercitationem eveniet voluptatibus velit.
        </p>
        <div className="flex justify-between">
          <button
            style={{ backgroundColor: props.color }}
            className=" py-2 px-8 rounded-3xl text-white font-semibold"
          >
            {props.tag}
          </button>
          <button
            style={{ backgroundColor: props.color }}
            className="py-2 px-4 rounded-full text-white font-semibold"
          >
            <ChevronRight size={22} strokeWidth={1.25} absoluteStrokeWidth />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
