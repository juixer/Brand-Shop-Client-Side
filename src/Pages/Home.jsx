import { Helmet } from "react-helmet-async";
import Banner from "../Components/Banner/Banner";
import Brands from "../Components/Brands/Brands";

const Home = () => {
    return (
        <div>
            <Helmet><title>Home</title></Helmet>
            <Banner/>
            <Brands/>
        </div>
    );
};

export default Home;