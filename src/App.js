import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchApiCategoryList } from 'redux/apiCategorySlice';
import { fetchApiDataProduct } from 'redux/apiProductSlice';
import NotFound from './components/NotFound/NotFound';
import MainLayout from './features/layout/MainLayout';
import OutletHeader from './features/layout/OutletHeader';
import { publicRoutes } from './routes/routes';
import './App.css';

function App() {
    //Call API get Products All list
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(fetchApiDataProduct())
    },[dispatch])

    // Call APi get All category list
    useEffect(() => {
        dispatch(fetchApiCategoryList())
      },[dispatch])

    return (
        <Routes>
           <Route path="/" element={<OutletHeader  />}>  
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
