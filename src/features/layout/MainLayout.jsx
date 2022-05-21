import React from "react";
import Home from "../pages/Home/Main/Home";
const MainLayout = ({ dataProduct }) => {
  return (
    <>
      <div className="App">
        <Home dataProduct={dataProduct} />
      </div>
    </>
  );
};

export default MainLayout;
