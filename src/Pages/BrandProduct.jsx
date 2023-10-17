import { useLoaderData } from "react-router-dom";

const BrandProduct = () => {
    const loadedBrandProduct = useLoaderData()
    console.log(loadedBrandProduct);
    return (
        <div>
            {loadedBrandProduct.length}
        </div>
    );
};

export default BrandProduct;