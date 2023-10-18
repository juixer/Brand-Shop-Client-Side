import { FaRegStar, FaStar } from "react-icons/fa6";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const FilterProducts = ({top}) => {
    const { _id, name, photo, brand, type, price, rating } = top;
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
            <Link to={`/product/${_id}`}>
              {" "}
              <button className="btn btn-sm hover:bg-black hover:text-white">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterProducts;
