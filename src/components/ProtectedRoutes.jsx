import React from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoutes({ loggedin, children }) {
  const navigate = useNavigate();
  function clickHandler() {
    navigate("/login");
  }
  function registerHandler(){
    navigate("/register")
  }

  if (!loggedin) {
    return (<div className="flex flex-col gap-20 justify-center h-full items-center">
      <button className="btn btn-secondary w-60 " onClick={clickHandler}>
        You need to login
      </button>
      <div className=" flex gap-10 h-1/4 items-center">
      <p>Not a member yet ?</p>
      <button onClick={registerHandler} className="btn btn-primary"> Register</button>
      </div>
      </div>
      
    )
  } else {
    return <>{children}</>;
  }
}

export default ProtectedRoutes;
