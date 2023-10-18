import { Triangle } from "react-loader-spinner";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { FaArrowUp } from "react-icons/fa6";

const Root = () => {
  const navigation = useNavigation();

  const handleTop = () => {
    window.scrollTo({
      top:0,
      behavior: "smooth",
    })
  }
  return (
    <div className="relative">
      <div className="">
        <Navbar />
        {navigation.state === "loading" ? (
          <div className="flex justify-center py-44">
            <Triangle
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="triangle-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </div>
        ) : (
          <Outlet />
        )}
      </div>
      <button onClick={handleTop} className="btn bg-black rounded-full text-white hover:text-black fixed bottom-5 right-5"><FaArrowUp/></button>
      <Footer/>
    </div>
  );
};

export default Root;
