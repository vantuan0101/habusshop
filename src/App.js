import LayoutPage from 'features/layout/LayoutPage';
import Carts from 'features/pages/Carts/Carts/Carts';
import Checkout from 'features/pages/Carts/Checkout/Checkout/CheckOut';
import LayoutCheckOut from 'features/pages/Carts/Checkout/LayoutCheckout/LayoutCheckout';
import Payment from 'features/pages/Carts/Checkout/Payment/Payment';
import ShipMethod from 'features/pages/Carts/Checkout/ShipMethod/ShipMethod';
import ThanksCheckout from 'features/pages/Carts/Checkout/ThanksCheckout/ThanksCheckout';
import Home from 'features/pages/Home/Main/Home';
import Login from 'features/pages/Login/Login';
import MainProductDetails from 'features/pages/ProductDetail';
import DetailSpecificProduct from 'features/pages/ProductDetail/DetailSpecific/DetailSpecificProduct';
import Products from 'features/pages/products/HomeProduct/Products';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchApiCategoryList } from 'redux/apiCategorySlice';
import { fetchApiProductAll } from 'redux/productAllSlice';
import './App.css';
import NotFound from './components/NotFound/NotFound';
import OutletHeader from './features/layout/OutletHeader';

function App() {
    // Call APi get All
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchApiCategoryList());
        dispatch(fetchApiProductAll());
        // console.log('re-render');
    }, []);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return (
        <Routes>
            <Route path="/" element={<OutletHeader />}>
                <Route index element={<Home />} />
                <Route path="products" element={<LayoutPage />}>
                    <Route index element={<Products />} />
                    <Route path="details" element={<LayoutPage />}>
                        <Route index element={<MainProductDetails />} />
                        <Route path=":detailsId" element={<DetailSpecificProduct />} />
                    </Route>
                </Route>
                <Route path="carts" element={<LayoutPage />}>
                    <Route index element={<Carts />} />
                    <Route path="checkout" element={<LayoutCheckOut />}>
                        <Route index element={<Checkout />} />
                        <Route path="ship-method" element={<ShipMethod />} />
                        <Route path="payment" element={<Payment />} />
                    </Route>
                    <Route path="checkout/success" element={<ThanksCheckout />} />
                </Route>
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
