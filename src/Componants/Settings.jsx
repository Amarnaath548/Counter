import close from "../assets/close.svg";

const Settings = ({ inputCount, count, closeSettings,changeBackground,background }) => {
  return (
    <div className={`absolute h-screen w-screen flex flex-col justify-center items-center ${background} z-40`}>
      <img
        className="absolute right-0 top-0 invert"
        src={close}
        onClick={closeSettings}
        alt=""
      />
      <div>
        <div className="text-white mb-3  border border-white p-6 rounded-2xl">
          <p>
            Set Count ={" "}
            <input className="bg-white text-black p-3 rounded-2xl w-20 inline-block"
              type="number"
              value={count}
              onChange={(e) => inputCount(e)}
            />
          </p>
        </div>
        <div className="flex gap-3 flex-col md:flex-row justify-center items-center border border-white p-6 rounded-2xl">
          <div onClick={()=>changeBackground("Dark Modern")} className="border border-white h-25 w-25 bg-linear-to-r from-gray-900 via-gray-800 to-gray-900"></div>
          <div onClick={()=>changeBackground("Blue Gradient")} className="border border-white h-25 w-25 bg-linear-to-r from-blue-600 to-cyan-500"></div>
          <div onClick={()=>changeBackground("Orange-Pink")} className="border border-white h-25 w-25 bg-linear-to-r from-orange-500 to-pink-600"></div>
          <div onClick={()=>changeBackground("Solid Dark")} className="border border-white h-25 w-25 bg-gray-800"></div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
