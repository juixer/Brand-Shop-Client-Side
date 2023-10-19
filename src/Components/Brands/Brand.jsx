import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
  const { name, logo } = brand;

  const handleBrand = (name) => {
    fetch(
      `https://server-side-bahjtmsmh-juixers-projects.vercel.app/products/${name}`,
      {
        method: "GET",
      }
    ).then((res) => res.json());
  };

  return (
    <>
      <Link to={`/products/${name}`}>
        <div
          onClick={() => handleBrand(name)}
          className="card  bg-base-100 hover:bg-base-200  shadow-xl h-28"
        >
          <figure>
            <img src={logo} alt={name} />
          </figure>
        </div>
      </Link>
    </>
  );
};

export default Brand;
