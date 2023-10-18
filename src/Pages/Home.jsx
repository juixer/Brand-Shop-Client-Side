import { Helmet } from "react-helmet-async";
import Banner from "../Components/Banner/Banner";
import Brands from "../Components/Brands/Brands";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import TopRatedProduct from "../Components/TopRatedProduct/TopRatedProduct";

const Home = () => {
  const loadedBrand = useLoaderData();
  const [topRated, setTopRated] = useState([]);
  const [showMore, setShowMore] = useState(true);

  const handleShowMore = () => {
    setShowMore(!showMore)
  }

  useEffect(() => {
    fetch("http://localhost:5000/topRating")
      .then((res) => res.json())
      .then((data) => setTopRated(data));
  }, []);
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner />
      <Brands loadedBrand={loadedBrand} />
      <div className=" max-w-screen-2xl mx-auto px-3 my-10">
        <h1 className="text-center text-5xl font-semibold  my-16">
          Our Top Rated Product
        </h1>
        {showMore ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {topRated.slice(0, 6).map((top) => {
                return <TopRatedProduct key={top._id} top={top} />;
              })}
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
              {topRated.map((top) => {
                return <TopRatedProduct key={top._id} top={top} />;
              })}
            </div>
          </>
        )}
        <div className="my-10 flex justify-center items-center">
          <button onClick={handleShowMore} className="btn btn-sm hover:bg-black hover:text-white">
            {showMore ? <span>Show More</span> : <span>Show Less</span>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
