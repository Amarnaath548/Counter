import minus from "../assets/remove-80.svg";
import add from "../assets/add-80.svg";

const Counter = ({handleMinus,handlePlus,count}) => {
  
  return (
    <div className="flex justify-center md:justify-between w-full m-3 items-center">
      <img
        className={`${
          count <= 0 && "invisible"
        } p-4 invert h-25 absolute md:static bottom-5 left-1 cursor-pointer border border-black rounded-full active:scale-95 transition-transform duration-150`}
        src={minus}
        draggable={false}
        onClick={handleMinus}
        alt=""
      />
      <p className="p-4 text-9xl text-white ">{count}</p>
      <img
        src={add}
        draggable={false}
        className="p-4 invert h-25 absolute md:static bottom-5 right-1 cursor-pointer border border-black  rounded-full active:scale-95 transition-transform duration-150"
        onClick={handlePlus}
        alt=""
      />
    </div>
  );
};

export default Counter;
