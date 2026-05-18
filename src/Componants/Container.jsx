import React, { useState } from "react";
import Counter from "./Counter";
import Intro from "./Intro";
import Menu from "./Menu";
import Modal from "./Modal";

const Container = () => {
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [background, setBackground] = useState(
    "bg-linear-to-r from-gray-900 via-gray-800 to-gray-900"
  );
  const handleMinus = () => {
    if (count > 0) {
      setCount((pre) => pre - 1);
    }
  };

  const changeBackground = (color) => {
    if (color === "Dark Modern") {
      setBackground("bg-linear-to-r from-gray-900 via-gray-800 to-gray-900");
    }

    if (color === "Blue Gradient") {
      setBackground("bg-linear-to-r from-blue-600 to-cyan-500");
    }

    if (color === "Orange-Pink") {
      setBackground("bg-linear-to-r from-orange-500 to-pink-600");
    }

    if (color === "Solid Dark") {
      setBackground("bg-gray-800");
    }
  };

  const handlePlus = () => {
    setCount((pre) => pre + 1);
  };

  const resetCount = () => {
    setOpen(true);
    
  };
  
  const handleYes=()=>{
      setCount(0);
      setOpen(false)
  }

  const handleNo=()=>{
    setOpen(false);
  }

  const inputCount = (e) => {
    if (e.target.value >= 0) {
      setCount(Number(e.target.value));
    }
  };
  return (
    <div className="h-screen select-none">
      <header
        className={`h-screen w-screen absolute animate-custom-fade ${background} z-20`}
      >
        <Intro />
      </header>
      <main
        className={`h-screen  flex justify-center items-center flex-col gap-5 ${background}`}
      >
        <Menu
          resetCount={resetCount}
          inputCount={inputCount}
          count={count}
          changeBackground={changeBackground}
          background={background}
        />
        <Counter
          handleMinus={handleMinus}
          handlePlus={handlePlus}
          count={count}
        />
        <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        onYes={handleYes}
        onNo={handleNo}
      />
      </main>
    </div>
  );
};

export default Container;
