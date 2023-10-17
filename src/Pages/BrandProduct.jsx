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
        <div>
            {brandAd.map(ad => {
                return(
                    <BrandAds key={ad._id} ad={ad}/>
                )
            })}
            {loadedBrandProduct.length > 0 ? <>{loadedBrandProduct.map(product => {
                return(
                    <BrandProducts key={product._id} product={product} />
                )
            })}</> : <><p>no data</p></>}
        </div>
    );
};

export default BrandProduct;