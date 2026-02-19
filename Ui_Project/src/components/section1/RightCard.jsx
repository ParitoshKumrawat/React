import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  //   console.log(props.color);

  return (
    <div className="h-full w-60 shrink-0 rounded-4xl overflow-hidden relative">
      <img src={props.img} alt="" className="h-full w-full object-cover " />
      <RightCardContent tag={props.tag} id={props.id} color={props.color} />
    </div>
  );
};

export default RightCard;
