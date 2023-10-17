import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
  const { name, img } = brand;

  const handleBrand = (name) => {
    console.log(name);
    fetch(`http://localhost:5000/products/${name}`, {
      method: "GET",
    })
      .then((res) => res.json())
      
  };

  return (
    <>
      <Link to={`/products/${name}`}>
        <div
          onClick={() => handleBrand(name)}
          className="card  bg-base-100 hover:bg-gray-200 shadow-xl"
        >
          <figure>
            <img src={img} alt={name} />
          </figure>
        </div>
      </Link>
    </>
  );
};

export default Brand;
