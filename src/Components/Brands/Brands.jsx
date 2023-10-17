import { useEffect, useState } from "react";
import Brand from "./Brand";

const Brands = () => {
    const [brands, setBrands] = useState([])

    useEffect(() => {
        fetch('Brand.json')
        .then(res => res.json())
        .then(data => setBrands(data))
    },[])

  return (
    <div>
      <h1 className="text-center text-5xl font-semibold my-5">
        Our Partner Brands
      </h1>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mx-3 my-10">
        {
            brands.map(brand => {
                return(
                    <Brand key={brand.id} brand={brand}/>
                )
            })
        }
      </div>
    </div>
  );
};

export default Brands;
