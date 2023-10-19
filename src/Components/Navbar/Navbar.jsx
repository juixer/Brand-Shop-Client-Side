import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "../../Hook/useAuth";
import Swal from "sweetalert2";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  const { user, userSignOut } = useAuth();

  // dark mode toggle
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "Light"
  );

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dracula");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const navlinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink to={"/addProduct"}>Add Product</NavLink>
          </li>
        </>
      ) : (
        ""
      )}
      <li>
        <NavLink to={"/about"}>About us</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
    </>
  );

  // handle LogOut
  const handleLogOut = () => {
    userSignOut()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Logout Successfully",
          timer: 1500,
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: `${err.message}`,
          timer: 1500,
        });
      });
  };
  return (
    <div className="navbar bg-base-100 max-w-screen-2xl mx-auto ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navlinks}
          </ul>
        </div>
        <Link to={"/"}>
          {" "}
          <img className="w-28" src='https://i.ibb.co/5kKZVWy/logo.png' />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold text-lg relative space-x-3">
          {navlinks}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="mt-1 rounded-full ">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              onChange={handleToggle}
              checked={theme === "light" ? false : true}
            />

            {/* sun icon */}
            <svg
              className="swap-on fill-current w-10 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off fill-current w-10 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
        {user ? (
          <div className="flex gap-2 justify-center items-center">
            <div>
              {" "}
              <Link className="text-2xl" to={`/cart`}>
                <FaCartShopping />
              </Link>
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <p className="justify-between font-bold">
                    {user?.displayName}
                  </p>
                </li>
                <li onClick={handleLogOut}>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <>
            <Link to={"/login"}>
              {" "}
              <button className="btn btn-sm hover:bg-black hover:text-white font-bold">
                LogIn
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
