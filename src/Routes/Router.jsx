import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import AddProducts from "../Pages/AddProducts";
import BrandProduct from "../Pages/BrandProduct";
import ProductDetails from "../Pages/ProductDetails";
import ErrorPage from "../Pages/ErrorPage";
import UpdateProduct from "../Pages/UpdateProduct";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage/>,
      children: [
        {
            path:'/',
            element:<Home/>,
            loader: () => fetch('http://localhost:5000/brands')
        },
        {
            path:'/addProduct',
            element:<PrivateRoute><AddProducts/></PrivateRoute>
        },
        {
            path:'/products/:id',
            element:<PrivateRoute><BrandProduct/></PrivateRoute>,
            loader:  ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
        },
        {
          path: 'product/:id',
          element: <ProductDetails/>,
          loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
        },
        {
          path: 'updateProduct/:id',
          element: <PrivateRoute><UpdateProduct/></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/register',
          element: <Register/>
        }
      ]
    },
  ]);
  

export default Router;