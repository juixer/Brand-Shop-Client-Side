import { useEffect, useState } from "react";
import useAuth from "../Hook/useAuth";
import CartItem from "../Components/Cart/CartItem";

const Cart = () => {
  const { user } = useAuth();
  const [carts, setCarts] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://server-side-bahjtmsmh-juixers-projects.vercel.app/user/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setCarts(data.cart);
      });
  }, [user]);

  return (
    <div className="mb-28">
      <h1 className="text-center text-5xl font-semibold  my-10">My Cart</h1>
      <div className="max-w-screen-2xl mx-auto my-10 md:my-16">
        {data.cart !== undefined && carts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {carts.map((item, i) => {
              return <CartItem key={i} item={item} />;
            })}
          </div>
        ) : (
          <div className="flex justify-center items-center max-w-screen-2xl mx-auto">
            <img src="https://i.ibb.co/85s3yST/empty-shopping-cart-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-e.png" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
