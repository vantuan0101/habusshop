import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchApiDataProduct } from 'redux/apiProductSlice';
import ProductDetail from './PageDetails/ProductDetail';

const MainProductDetails = () => {
    //Call API get Products All list
    const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(fetchApiDataProduct("electronics"));
    // }, [dispatch]);

    return (
        <>
            <ProductDetail />
        </>
    );
};

export default MainProductDetails;
