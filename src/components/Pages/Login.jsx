import Backendless from "backendless";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ email, setEmail, password, setPassword, setLoggedin }) {
  const navigate = useNavigate();

  function loginUser(e) {
    e.preventDefault();

    Backendless.UserService.login(email, password, true)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    setLoggedin(true);
    navigate("/mealPlan");
  }

  return (
    <div className="flex justify-center items-center h-full">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={loginUser} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
