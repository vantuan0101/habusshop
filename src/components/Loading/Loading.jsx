import React from "react";
import "../Loading/loading.css";
const Loading = () => {
  return (
    <>
      <div className="dice">
        <div className="face first-face">
          <div className="dot"></div>
        </div>

        <div className="face second-face">
          <div className="dot"></div>
          <div className="dot"></div>
        </div>

        <div className="face third-face">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>

      <p className="loader_wait">Wait, please...</p>
    </>
  );
};

export default Loading;
