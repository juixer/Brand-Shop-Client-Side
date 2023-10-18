import { useState } from "react";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from '../Hook/useAuth'
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Login = () => {
    // location & navigate
    const location = useLocation();
    const navigate = useNavigate();
    // authProvider
    const {googleLogin} = useAuth();
    // show password
    const [showPassword, setShowPassword] = useState(true);

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
      }
    
    // google login
    const handleGoogleLogin = () => {
        googleLogin()
        .then(() => {
            Swal.fire({
                icon: "success",
                title: "Login Successfully",
                timer: 1500,
              });
              navigate(location.state ? location?.state : "/");
        })
        .catch((err)=> {
            Swal.fire({
                icon: "error",
                title: `${err.message}`,
                timer: 5000,
              });
        })
    }
  return (
    <div className="max-w-screen-2xl mx-auto my-16">
        <Helmet><title>Log In</title></Helmet>
      <h1 className="text-center text-5xl font-semibold  my-16">
        Log In
      </h1>
      <form className="card-body max-w-2xl mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Type your email address"
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="flex items-center">
            <input
              type={showPassword ? "password" : "text"}
              name="password"
              placeholder="Type your password"
              className="input w-full input-bordered"
              required
            />
            <span onClick={handleShowPassword} className="-ml-8 text-xl">{showPassword? <FaEye/> : <FaEyeSlash/>}</span>
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn hover:bg-black hover:text-white">
            Login
          </button>
        </div>
      </form>
      <div className="max-w-2xl mx-auto -mt-5">
        <h1 className="text-center mb-3">
          Or <br></br>LogIn With
        </h1>
        <div className="flex justify-center gap-10">
          <button
            onClick={handleGoogleLogin}
            className="my-5 text-4xl btn hover:bg-black hover:text-white"
          >
            <FaGoogle />
          </button>
          <button
            className="my-5 text-4xl btn hover:bg-black hover:text-white"
          >
            <FaGithub />
          </button>
        </div>
        <h1 className="text-center mt-3">
          Do not have an Account?{" "}
          <Link to={"/register"}>
            <span className="text-indigo-600 font-bold">Register</span>
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Login;
