import minus from "../assets/remove-80.svg";
import add from "../assets/add-80.svg";

const Counter = ({handleMinus,handlePlus,count}) => {
  
  return (
    <div className="flex justify-between w-full m-3">
      <img
        className={`${
          count <= 0 && "invisible"
        } p-4 invert cursor-pointer border border-black rounded-full active:scale-95 transition-transform duration-150`}
        src={minus}
        draggable={false}
        onClick={handleMinus}
        alt=""
      />
      <p className="p-4 text-5xl text-white ">{count}</p>
      <img
        src={add}
        draggable={false}
        className="p-4 invert cursor-pointer border border-black  rounded-full active:scale-95 transition-transform duration-150"
        onClick={handlePlus}
        alt=""
      />
    </div>
  );
};

export default Counter;
