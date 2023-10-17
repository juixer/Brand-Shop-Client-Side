import { useLoaderData } from "react-router-dom";

const BrandProduct = () => {
    const loadedBrandProduct = useLoaderData()
    return (
        <div>
            {loadedBrandProduct.length}
        </div>
    );
};

export default BrandProduct;