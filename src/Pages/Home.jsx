import { Helmet } from "react-helmet-async";
import Banner from "../Components/Banner/Banner";
import Brands from "../Components/Brands/Brands";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const loadedBrand = useLoaderData()
    return (
        <div>
            <Helmet><title>Home</title></Helmet>
            <Banner/>
            <Brands loadedBrand={loadedBrand}/>
        </div>
    );
};

export default Home;