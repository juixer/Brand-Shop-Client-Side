import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa6";

const BrandProducts = ({ product }) => {
  const { name, photo, brand, type, price, rating } = product;
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img
        className="w-44"
          src={photo}
          alt={name}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Brand: {brand}</p>
        <p>type: {type}</p>
        <p>Price: {price}BDT</p>
        <Rating
          placeholderRating={rating}
          emptySymbol={
            <span className="text-orange-500"><FaRegStar/></span>
          }
          placeholderSymbol={
            <span className="text-orange-500"><FaStar/></span>
          }
          fullSymbol={
            <span className="text-orange-500"><FaStar/></span>
          }
        />
        <div className="card-actions justify-start">
          <button className="btn btn-sm hover:bg-black hover:text-white">Details</button>
          <button className="btn btn-sm hover:bg-black hover:text-white">Update</button>
        </div>
      </div>
    </div>
  );
};

export default BrandProducts;
