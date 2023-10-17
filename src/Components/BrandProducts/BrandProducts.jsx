import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa6";

const BrandProducts = ({ product }) => {
  const { name, photo, brand, type, price, rating } = product;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={photo} alt={name} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>Brand: {brand}</p>
        <p>Type: {type}</p>
        <p>Price: {price} BDT</p>
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
        <div className="card-actions">
          <button className="btn btn-sm hover:bg-black hover:text-white">Details</button>
          <button className="btn btn-sm hover:bg-black hover:text-white">Update</button>
        </div>
      </div>
    </div>
  );
};

export default BrandProducts;
