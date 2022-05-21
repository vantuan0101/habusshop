import React from "react";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import Footer from "../../components/Footer/Footer";

const OutletHeader = ({ load }) => {
  return (
    <>
      {load ? (
        <>
          <Header />
          <Outlet />
          <Footer />

        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default OutletHeader;
