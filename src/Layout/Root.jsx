import { Triangle } from "react-loader-spinner";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const Root = () => {
  const navigation = useNavigation();
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Navbar/>
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
  );
};

export default Root;
