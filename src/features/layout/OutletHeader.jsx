import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Loading from '../../components/Loading/Loading';

const OutletHeader = () => {
    const { loading } = useSelector((state) => state.apiCategory);
    // console.log(loading);
    return (
        <>
            {!loading ? (
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
