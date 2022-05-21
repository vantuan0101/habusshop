import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import productApi from './api/productsApi';
import './App.css';
import NotFound from './components/NotFound/NotFound';
import MainLayout from './features/layout/MainLayout';
import OutletHeader from './features/layout/OutletHeader';
import Carts from './features/pages/Carts/Carts';
import Login from './features/pages/Login/Login';
import ProductDetail from './features/pages/ProductDetail/ProductDetail';
import Products from './features/pages/products/HomeProduct/Products';
import LayoutProducts from './features/pages/products/LayoutProducts';
import React, { lazy, Suspense } from 'react';
import Loading from './components/Loading/Loading';

// const Loadable = (Component, fallback) => {
//     //return func- component
//     return () =>
//         <Suspense fallback={fallback ? <Loading /> : <></>}>
//             <Component />
//         </Suspense>
// }
// const MainLayout = Loadable(lazy(() => import('./features/layout/MainLayout')), true)

function App() {
    const [dataProduct, setDataProduct] = useState([]);
    const [load, setLoad] = useState(false);

    // Request API get data
    useEffect(() => {
        const fetchApi = async () => {
            const productList = await productApi.getAll();
            setDataProduct(productList);
            setLoad(true);
        };
        fetchApi();
    }, []);

    return (
        <Routes>
            <Route path="/" element={<OutletHeader load={load} />}>
                <Route index element={<MainLayout dataProduct={dataProduct} load={load} />} />
                <Route path="products" element={<LayoutProducts />} />
                <Route path="products/details" element={<ProductDetail />} />
                <Route path="carts" element={<Carts />} />
                <Route path="login" element={<Login />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
