import Backendless from "backendless";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ loggedin, setLoggedin,setMealPlan }) {
  const navigate = useNavigate();

  function logoutUser() {
    Backendless.UserService.logout()
      .then((res) => console.log(res))
      .catch((erro) => console.log(erro));
    setLoggedin(false);
    navigate("/");
    setMealPlan([])
    
  }

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/home">Recipes</a>
            </li>

            <li>
              <a href="/groceries">Groceries</a>
            </li>
          </ul>
        </div>
        <a href="/home" className="btn btn-ghost text-xl">Easy Meals</a>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 flex gap-10">
        <Link to={"/"}><button  className="btn btn-primary ">Home</button></Link>
          {/* <li> */}
            <a href="/home">
              <button className="btn btn-primary">Recipes</button>
            </a>
          {/* </li> */}

          {/* <li> */}
            <Link to={"/groceries"}>
              <button className="btn btn-primary ">Groceries</button>
            </Link>
          {/* </li> */}
          
        </ul>
      </div>
     
      <div className="navbar-end">
        {loggedin ? (
          <button className="btn btn-secondary" onClick={logoutUser}>
            Logout
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Navbar;
