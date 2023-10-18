import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BrandAds from "../Components/BrandAds/BrandAds";
import BrandProducts from "../Components/BrandProducts/BrandProducts";

const BrandProduct = () => {
    const loadedBrandProduct = useLoaderData()
    const [brandAd, setBrandAd] = useState([])
    const {id} = useParams();
    useEffect(()=>{
        fetch(`http://localhost:5000/brands/${id}`)
        .then(res => res.json())
        .then(data => setBrandAd(data))
    },[id])
    
    return (
        <div className="max-w-screen-2xl mx-auto px-3 my-10">
            {brandAd.map(ad => {
                return(
                    <BrandAds key={ad._id} ad={ad}/>
                )
            })}
            {loadedBrandProduct.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">{loadedBrandProduct.map(product => {
                return(
                    <BrandProducts key={product._id} product={product} />
                )
            })}</div> : <><p>no data</p></>}
        </div>
    );
};

export default BrandProduct;