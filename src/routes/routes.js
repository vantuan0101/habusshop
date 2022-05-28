import MainProductDetails from 'features/pages/ProductDetail';
import Carts from '../features/pages/Carts/Carts/Carts';
import Login from '../features/pages/Login/Login';
import ProductDetail from '../features/pages/ProductDetail/PageDetails/ProductDetail';
import Products from '../features/pages/products/HomeProduct/Products';

const publicRoutes = [
    { path: 'products', component: Products },
    { path: 'products/details', component: MainProductDetails },
    { path: 'carts', component: Carts },
    { path: 'login', component: Login },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
