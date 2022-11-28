import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import MainLayout from "../layouts/MainLayout";
import AddCategory from "../pages/Dashboard/Admin/AddCategory";
import AddProduct from "../pages/Dashboard/Seller/AddProduct";
import MyOrders from "../pages/Dashboard/User/MyOrders";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import SingleCategory from "../pages/SingleCategory/SingleCategory";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import MyProducts from "../pages/Dashboard/Seller/MyProducts";
import AllSellers from "../pages/Dashboard/Admin/AllSellers";
import AllBuyers from "../pages/Dashboard/Admin/AllBuyers";
import Payment from "../pages/Dashboard/Payment/Payment";
import Blog from "../pages/Blog/Blog";
import MyWishlist from "../pages/Dashboard/User/MyWishlist";
import ReportedItems from "../pages/Dashboard/Admin/ReportedItems";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/category/:id',
                element:<PrivateRoute><SingleCategory></SingleCategory></PrivateRoute>
            }
        ]
    },{
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/dashboard',
                element:<MyOrders></MyOrders>
            },
            {
                path:'/dashboard/addproduct',
                element:<AddProduct></AddProduct>
            },
            {
                path:'/dashboard/myproducts',
                element:<MyProducts></MyProducts>
            },
            {
                path:'/dashboard/wishlist',
                element:<MyWishlist></MyWishlist>
            },
            {
                path:'/dashboard/addcategory',
                element:<AddCategory></AddCategory>
            },
            {
                path:'/dashboard/allsellers',
                element:<AllSellers></AllSellers>
            },
            {
                path:'/dashboard/allbuyers',
                element:<AllBuyers></AllBuyers>
            },
            {
                path:'/dashboard/reportedItems',
                element:<ReportedItems></ReportedItems>
            },
            {
                path:'/dashboard/payment/:id',
                element:<Payment></Payment>,
                loader:({params}) => fetch(`${process.env.REACT_APP_API_URL}/bookings/payment/${params.id}`)
            },
            
        ]
    }
])