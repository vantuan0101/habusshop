import Carts from 'features/pages/Carts/Carts/Carts';
import CheckOut from 'features/pages/Carts/Checkout/CheckOut';
import LayoutCart from 'features/pages/Carts/LayoutCart';
import MainProductDetails from 'features/pages/ProductDetail';
import DetailSpecificProduct from 'features/pages/ProductDetail/DetailSpecific/DetailSpecificProduct';
import LayoutProductDetail from 'features/pages/ProductDetail/LayoutProductDetail';
import Products from 'features/pages/products/HomeProduct/Products';
import LayoutProduct from 'features/pages/products/layoutProduct';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchApiCategoryList } from 'redux/apiCategorySlice';
import './App.css';
import NotFound from './components/NotFound/NotFound';
import MainLayout from './features/layout/MainLayout';
import OutletHeader from './features/layout/OutletHeader';
import { publicRoutes } from './routes/routes';

function App() {
    // Call APi get All category list
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchApiCategoryList());
        // console.log('re-render');
    }, [dispatch]);

    return (
        <Routes>
            <Route path="/" element={<OutletHeader />}>
                <Route index element={<MainLayout />} />
                <Route path="products" element={<LayoutProduct />}>
                    <Route index element={<Products />} />
                    <Route path="details" element={<LayoutProductDetail />}>
                        <Route index element={<MainProductDetails />} />
                        <Route path=":detailsId" element={<DetailSpecificProduct />} />
                    </Route>
                </Route>
                <Route path="carts"  element={<LayoutCart />} >
                    <Route index element={<Carts />} />
                    <Route path="checkout"  element={<CheckOut />} />
                    
                </Route>
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
