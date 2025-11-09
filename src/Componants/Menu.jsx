import React, { useState } from "react";
import refresh from "../assets/refresh.svg";
import settings from "../assets/settings.svg";
import Settings from "./Settings";
import info from "../assets/info.svg";

const Menu = ({
  resetCount,
  inputCount,
  count,
  changeBackground,
  background,
}) => {
  const [showSettings, setShowSettings] = useState(false);

  const closeSettings = () => {
    setShowSettings(false);
  };
  return (
    <>
      <div className="w-1/4 flex justify-between">
        <img src={info} className="invert cursor-pointer" alt="" />
        <img
          src={settings}
          className="invert cursor-pointer"
          onClick={() => setShowSettings(true)}
          alt=""
        />
        <img
          src={refresh}
          onClick={resetCount}
          className="invert cursor-pointer"
          alt=""
        />
      </div>

      {showSettings && (
        <Settings
          inputCount={inputCount}
          count={count}
          closeSettings={closeSettings}
          changeBackground={changeBackground}
          background={background}
        />
      )}
    </>
  );
};

export default Menu;
