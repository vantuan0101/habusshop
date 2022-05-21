import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import productApi from './api/productsApi';
import './App.css';
// import NotFound from '~/components/NotFound/NotFound.jsx';
import NotFound from './components/NotFound/NotFound';
import MainLayout from './features/layout/MainLayout';
import OutletHeader from './features/layout/OutletHeader';
import { publicRoutes } from './routes/routes';

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
                {publicRoutes.map((route, index) => {
                    let Page = route.component;
                    return <Route key={index} path={route.path} element={<Page />} />;
                })}
                {/* <Route path="products" element={<Products />} />
                <Route path="products/details" element={<ProductDetail />} />
                <Route path="carts" element={<Carts />} />
                <Route path="login" element={<Login />} /> */}
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
