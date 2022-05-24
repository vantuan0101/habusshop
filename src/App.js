import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchApiDataProduct } from 'redux/apiProductSlice';
import NotFound from './components/NotFound/NotFound';
import MainLayout from './features/layout/MainLayout';
import OutletHeader from './features/layout/OutletHeader';
import { publicRoutes } from './routes/routes';
import './App.css';

function App() {
    //Call API get Products All list
    // const dispatch = useDispatch()
    // useEffect(() => {
    //   dispatch(fetchApiDataProduct())
    // },[dispatch])
    return (
        <Routes>
            <Route path="/" element={<OutletHeader />}>
                <Route index element={<MainLayout />} />
                {publicRoutes.map((route, index) => {
                    let Page = route.component;
                    return <Route key={index} path={route.path} element={<Page />} />;
                })}
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
