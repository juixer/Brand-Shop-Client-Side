import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../Hook/useAuth";

const Register = () => {
  //auth provider
  const { createUser, updateUser } = useAuth();
  // show password
  const [showPassword, setShowPassword] = useState(true);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  //   navigate
  const navigate = useNavigate();

  //register by email and password
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    const photo = e.target.photo.value;
    const checkbox = e.target.checkbox.checked;

    const user = { name, email, photo };

    if (password !== confirmPassword) {
      return Swal.fire({
        icon: "error",
        title: `Password does not matched`,
        timer: 5000,
      });
    } else if (password.length < 6) {
      return Swal.fire({
        icon: "error",
        title: `Password should be at least 6 characters`,
        timer: 5000,
      });
    } else if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*[@#$%^&+=!])/.test(password)) {
      return Swal.fire({
        icon: "error",
        title: `Password does not match the requirements`,
        timer: 5000,
      });
    } else if (checkbox === false) {
      return Swal.fire({
        icon: "error",
        title: `Please accept our terms and conditions`,
        timer: 5000,
      });
    }

    createUser(email, password)
      .then(() => {
        updateUser(name, photo)
        .then(() => {
            Swal.fire({
                icon: "success",
                title: "Registration Completed",
                timer: 1500,
              });
              navigate('/')
        })
        .catch((err) => {
            Swal.fire({
                icon: "error",
                title: `${err.message}`,
                timer: 5000,
              });
        })
        
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: `${err.message}`,
          timer: 5000,
        });
      });
  };
  return (
    <div>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <form onSubmit={handleRegister} className="card-body max-w-2xl mx-auto">
        <h1 className="text-center text-5xl font-semibold">Register</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="name"
            placeholder="Type your name"
            name="name"
            className="input input-bordered"
            required
          />
        </div>
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
            <span className="label-text">Profile Picture</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Give your picture URL"
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
            <span onClick={handleShowPassword} className="-ml-8 text-xl">
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          <ul className="text-red-500 list-disc ml-8 my-3">
            <li>Password should be at least 6 characters</li>
            <li>Contains at least one capital letter</li>
            <li>Contains at least one special character</li>
          </ul>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <div className="flex items-center">
            <input
              type={showPassword ? "password" : "text"}
              name="confirmPassword"
              placeholder="Confirm your password"
              className="w-full input input-bordered"
              required
            />
            <span onClick={handleShowPassword} className="-ml-8 text-xl">
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-5 mt-5">
          <input
            type="checkbox"
            name="checkbox"
            className="checkbox checkbox-black"
          />
          <p className="label-text">
            I read and agree with{" "}
            <span className="text-indigo-600 font-bold">
              terms & conditions
            </span>
          </p>
        </div>
        <div className="form-control mt-6">
          <button className="btn hover:bg-black hover:text-white">
            Register
          </button>
        </div>
        <div>
          <h1 className="text-center mt-3">
            Already have an Account?{" "}
            <Link to={"/login"}>
              <span className="text-indigo-600 font-bold">Log In</span>
            </Link>
          </h1>
        </div>
      </form>
    </div>
  );
};

export default Register;
