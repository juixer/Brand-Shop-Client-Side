import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import AddProducts from "../Pages/AddProducts";
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
        }
      ]
    },
  ]);
  

export default Router;