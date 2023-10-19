import { createBrowserRouter } from "react-router-dom";
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
import Subscribers from "../Pages/Subscribers";
import AboutUs from "../Pages/AboutUs";
import Contact from "../Pages/Contact";
import Cart from "../Pages/Cart";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch(
            "https://server-side-bahjtmsmh-juixers-projects.vercel.app/brands"
          ),
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProducts />
          </PrivateRoute>
        ),
      },
      {
        path: "/products/:id",
        element: (
          <PrivateRoute>
            <BrandProduct />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://server-side-bahjtmsmh-juixers-projects.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "product/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://server-side-bahjtmsmh-juixers-projects.vercel.app/product/${params.id}`
          ),
      },
      {
        path: "updateProduct/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://server-side-bahjtmsmh-juixers-projects.vercel.app/product/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/subscriber",
        element: <Subscribers />,
        loader: () =>
          fetch(
            "https://server-side-bahjtmsmh-juixers-projects.vercel.app/subscribers"
          ),
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default Router;
