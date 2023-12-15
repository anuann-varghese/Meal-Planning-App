import React from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoutes({ loggedin, children }) {
  const navigate = useNavigate();
  function clickHandler() {
    navigate("/login");
  }

  if (!loggedin) {
    return (
      <button className="btn btn-secondary w-1/4" onClick={clickHandler}>
        You need to login
      </button>
    );
  } else {
    return <>{children}</>;
  }
}

export default ProtectedRoutes;
