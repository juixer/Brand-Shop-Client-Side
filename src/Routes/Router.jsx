import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import AddProducts from "../Pages/AddProducts";
import BrandProduct from "../Pages/BrandProduct";
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/addProduct',
            element:<AddProducts/>
        },
        {
            path:'/products/:id',
            element:<BrandProduct/>,
            loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`),
        }
      ]
    },
  ]);
  

export default Router;