import { useEffect, useState } from "react";
import FilterProducts from "../FilterProducts/FilterProducts";

const Categories = () => {
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [showMore, setShowMore] = useState(true);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleMobile = () => {
    setCategory("Mobile");
  };
  const handleLaptop = () => {
    setCategory("Laptop");
  };
  const handleSmartWatch = () => {
    setCategory("SmartWatch");
  };
  const handleHeadPhone = () => {
    setCategory("HeadPhone");
  };
  const handleTV = () => {
    setCategory("TV");
  };
  const handleConsole = () => {
    setCategory("Gaming Console");
  };

  useEffect(() => {
    fetch(`http://localhost:5000/category/${category}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [category]);
  return (
    <div className="max-w-screen-2xl mx-auto my-10 px-3">
      <h1 className="text-center text-5xl font-semibold">Find Your Category</h1>

      <div className="flex flex-row justify-center items-center my-5">
        <div className="join join-vertical md:join-horizontal">
          <button
            onClick={handleLaptop}
            className="btn hover:bg-black hover:text-white join-item"
          >
            Laptop
          </button>
          <button
            onClick={handleHeadPhone}
            className="btn hover:bg-black hover:text-white join-item"
          >
            HeadPhone
          </button>
          <button
            onClick={handleMobile}
            className="btn hover:bg-black hover:text-white join-item"
          >
            Mobile
          </button>
          <button
            onClick={handleSmartWatch}
            className="btn hover:bg-black hover:text-white join-item"
          >
            SmartWatch
          </button>
          <button
            onClick={handleConsole}
            className="btn hover:bg-black hover:text-white join-item"
          >
            Gaming Console
          </button>
          <button
            onClick={handleTV}
            className="btn hover:bg-black hover:text-white join-item"
          >
            TV
          </button>
        </div>
      </div>
      <div>
        <>
          {showMore ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
              {products.slice(0, 6).map((top) => {
                return <FilterProducts key={top._id} top={top} />;
              })}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
              {products.map((top) => {
                return <FilterProducts key={top._id} top={top} />;
              })}
            </div>
          )}
          {products.length > 6 ? (
            <div className="my-10 flex justify-center items-center">
              <button
                onClick={handleShowMore}
                className="btn btn-sm hover:bg-black hover:text-white"
              >
                {showMore ? <span>Show More</span> : <span>Show Less</span>}
              </button>
            </div>
          ) : (
            ""
          )}
        </>
      </div>
    </div>
  );
};

export default Categories;
