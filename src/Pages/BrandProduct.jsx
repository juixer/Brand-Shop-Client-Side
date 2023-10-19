import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BrandAds from "../Components/BrandAds/BrandAds";
import BrandProducts from "../Components/BrandProducts/BrandProducts";
import { Helmet } from "react-helmet-async";

const BrandProduct = () => {
  const loadedBrandProduct = useLoaderData();
  const [brandAd, setBrandAd] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://server-side-jet.vercel.app/brands/${id}`)
      .then((res) => res.json())
      .then((data) => setBrandAd(data));
  }, [id]);

  return (
    <div className="max-w-screen-2xl mx-auto px-3 my-10">
      <Helmet>
        <title>{id}</title>
      </Helmet>
      {loadedBrandProduct.length > 0 ? (
        <div>
          {brandAd.map((ad) => {
            return (
              <>
                <h1 className="text-center text-5xl font-semibold my-5">
                  All Products of <span className="font-bold">{ad.name}</span>
                </h1>

                <BrandAds key={ad._id} ad={ad} />
              </>
            );
          })}
        </div>
      ) : (
        ""
      )}
      {loadedBrandProduct.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {loadedBrandProduct.map((product) => {
            return <BrandProducts key={product._id} product={product} />;
          })}
        </div>
      ) : (
        <div className=" flex flex-col justify-center items-center">
          <img
            src="https://static.thenounproject.com/png/213498-200.png"
            alt="N/A"
          />
          <h1 className="text-2xl md:text-6xl max-w-2xl text-center mx-auto">
            We are working on bringing products from this brand to our
            collection. Check back soon!
          </h1>
        </div>
      )}
    </div>
  );
};

export default BrandProduct;
