import Home from '../pages/home/Home'
import Cart from '../pages/cart/Cart'
import Cuisines from '../pages/cuisines/Cuisines'
import Login from '../pages/login/Login'
import Restaurants from '../pages/restaurants/Restaurants'
import NotFound from '../pages/notFound/NotFound'

//Public Routes
const publicRoutes = [
    { path: '/', component: Home, id: 1 },
    { path: '/cart', component: Cart, id:2 },
    { path: '/cuisines', component: Cuisines, id:3 },
    { path: '/login', component: Login, id:4 },
    { path: '/restaurants', component: Restaurants, id:5 },
    { path: '*', component: NotFound, id:6 }
]

//Private Routes
 const privateRoutes = [
]
 
export {publicRoutes, privateRoutes}