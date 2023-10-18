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
            element:<AddProducts/>
        },
        {
            path:'/products/:id',
            element:<BrandProduct/>,
            loader:  ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
        },
        {
          path: 'product/:id',
          element: <ProductDetails/>,
          loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
        },
        {
          path: 'updateProduct/:id',
          element: <UpdateProduct/>,
          loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
        }
      ]
    },
  ]);
  

export default Router;