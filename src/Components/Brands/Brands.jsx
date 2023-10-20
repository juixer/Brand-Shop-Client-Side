import { useState } from "react";
import Brand from "./Brand";

const Brands = ({loadedBrand}) => {
    const [brands, setBrands] = useState(loadedBrand)

    

  return (
    <div className="max-w-screen-2xl mx-auto">
      <h1 className="text-center text-5xl font-semibold my-16">
        Our Partner Brands
      </h1>

      <div className="grid grid-cols-1 gap-5 lg:gap-x-16 md:grid-cols-2 lg:grid-cols-3 mx-3 my-10">
        {
            brands.map(brand => {
                return(
                    <Brand key={brand._id} brand={brand}/>
                )
            })
        }
      </div>
    </div>
  );
};

export default Brands;
