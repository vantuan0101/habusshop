import React from "react";
import { Outlet } from "react-router-dom";
import Products from "./HomeProduct/Products";

const LayoutProducts = () => {
  return (
    <>
      <Products />
      {/* <Outlet/> */}
    </>
  );
};

export default LayoutProducts;
