import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
  const { name, logo } = brand;

  const handleBrand = (name) => {
    fetch(`https://server-side-jet.vercel.app/products/${name}`, {
      method: "GET",
    }).then((res) => res.json());
  };

  return (
    <div data-aos="flip-left ">
      <Link to={`/products/${name}`}>
        <div className="card  bg-base-100 shadow-xl image-full">
          <figure>
          <img
              src={logo}
              alt={name}
            />
          </figure>
          <div className="card-body flex justify-center items-center">
            <h2 className="text-center  text-5xl">{name}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Brand;
