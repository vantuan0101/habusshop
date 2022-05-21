import Carts from "../features/pages/Carts/Carts";
import Login from "../features/pages/Login/Login";
import ProductDetail from "../features/pages/ProductDetail/ProductDetail";
import Products from "../features/pages/products/HomeProduct/Products";


const publicRoutes = [
    { path : 'products',  component : Products },
    { path : 'products/details',  component : ProductDetail },
    { path : 'carts',  component : Carts },
    { path : 'login',  component : Login },
    
]
const privateRoutes = [

]

export { publicRoutes, privateRoutes };
