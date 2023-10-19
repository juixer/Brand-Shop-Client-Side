import { Helmet } from "react-helmet-async";
import { FaRegStar, FaStar } from "react-icons/fa6";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import Swal from "sweetalert2";

const ProductDetails = () => {
  // loader data
  const loadedProductDetails = useLoaderData();
  const { brand, details, name, photo, price, rating, type } =
    loadedProductDetails;

  // authProvider
  const {user} = useAuth()

    // handle cart
    const handleAddCart = () => {
       fetch(`http://localhost:5000/user/${user.email}`,{
        method: "PATCH",
        headers:{'content-type': 'application/json'},
        body: JSON.stringify(loadedProductDetails),
       })
       .then(res => res.json())
       .then(data => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "Product added to your cart",
          timer: 1500,
        });
       })
    }

  return (
    <div className="card lg:card-side bg-base-100 shadow-2xl my-10 max-w-screen-xl mx-auto px-3">
      <Helmet><title>{name}</title></Helmet>
      <figure>
        <img className="w-96" src={photo} alt={name} />
      </figure>
      <div className="space-y-2 m-5">
        <h2 className="text-3xl font-semibold">{name}</h2>
        <p className="text-xl font-semibold">
          Brand: <span className="font-normal">{brand}</span>
        </p>
        <p className="text-xl font-semibold">
          Type: <span className="font-normal">{type}</span>
        </p>
        <div className="flex items-center gap-2">
          <Rating
            placeholderRating={rating}
            emptySymbol={
              <span className="text-orange-500">
                <FaRegStar />
              </span>
            }
            placeholderSymbol={
              <span className="text-orange-500">
                <FaStar />
              </span>
            }
            fullSymbol={
              <span className="text-orange-500">
                <FaStar />
              </span>
            }
          />
          <p className="text-xl">{rating}</p>
        </div>
        <p className="text-xl font-semibold">Price: <span className="font-normal">{price}BDT</span></p>
        <p className="max-w-3xl text-xl font-semibold">Description: <span className="font-normal">{details}</span></p>
        <div className="card-actions justify-start mt-5">
          <button onClick={handleAddCart} className="btn btn-sm bg-black text-white hover:bg-white hover:text-black">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
