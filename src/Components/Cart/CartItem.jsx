import { FaRegStar, FaStar } from "react-icons/fa6";
import Rating from "react-rating";
import useAuth from "../../Hook/useAuth";
import Swal from "sweetalert2";

const CartItem = ({ item }) => {
  const { _id, name, photo, brand, type, price, rating } = item;
  const { user } = useAuth();

  const handleDelete = () => {
    fetch(`http://localhost:5000/user/${user.email}/cart/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "Product removed from cart",
          timer: 1500,
        });
        window.location.reload();
      });
  };

  const handlePurchase = () => {
    fetch(`http://localhost:5000/user/${user.email}/cart/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "Thanks for your purchase",
          timer: 1000,
        });
        setTimeout(() => {
            window.location.reload();
        }, 1000);
      });
  };

  return (
    <div>
      <div className="card lg:card-side bg-base-100  shadow-2xl">
        <figure>
          <img className="lg:w-56" src={photo} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>
            <span className="font-bold">Brand:</span> {brand}
          </p>
          <p>
            <span className="font-bold">type:</span> {type}
          </p>
          <p>
            <span className="font-bold">Price:</span> {price}BDT
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
            <p>{rating}</p>
          </div>
          <div className="card-actions justify-start">
            <button
              onClick={handlePurchase}
              className="btn btn-sm hover:bg-black hover:text-white"
            >
              Purchase
            </button>
            <button
              onClick={handleDelete}
              className="btn btn-sm bg-red-500 hover:bg-red-400 text-white"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
