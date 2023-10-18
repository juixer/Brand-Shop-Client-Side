import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import { Triangle } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  // location
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center py-64">
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
    );
  }
  if (!user){
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
  }
  return children;
};

export default PrivateRoute;
