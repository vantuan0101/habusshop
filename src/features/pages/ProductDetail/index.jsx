import categoryApi from 'api/categoryApi';
import productApi from 'api/productsApi';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from '../../../redux/cartsSlice';
import ProductDetail from './PageDetails/ProductDetail';

const MainProductDetails = () => {
    const [dataProduct, setDataProduct] = useState([]);
    const [productClick, setProductClick] = useState('electronics');
    const [sort, setSort] = useState('');
    const [showAll, setShowAll] = useState(false);
    const a = showAll ? productApi : categoryApi;
    const b = showAll ? 'getAllSort' : 'getSpecific';

    const dispatch = useDispatch()
   
    useEffect(() => {
        const res = async () => {
            const req = await a[b](showAll ? sort : productClick + sort);
            setDataProduct(req);
        };
        res();
        
    }, [productClick, sort, showAll]);
    const handleGetCategoryName = (categoryName) => {
        setProductClick(categoryName);
        setShowAll(false);
    };
    const handleSortDesc = () => {
        setSort('?sort=desc');
    };
    const handleSortAsc = () => {
        setSort('?sort=asc');
    };
    const handleShowAllProduct = () => {
        setShowAll(true);
        setProductClick('Show All Product');
        setSort('');
    };
    const handleAddClick = (item) => {
        // console.log(item);
        dispatch(addCart(item))
    };
    return (
        <>
            <ProductDetail
                dataProduct={dataProduct}
                handleGetCategoryName={handleGetCategoryName}
                handleSortDesc={handleSortDesc}
                handleSortAsc={handleSortAsc}
                handleShowAllProduct={handleShowAllProduct}
                productClick={productClick}
                handleAddClick={handleAddClick}
            />
            {/* <Outlet /> */}
        </>
    );
};

export default MainProductDetails;
