import React from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
// import useAuth from './../../../hooks/useAuth';
import useAuth from "../../../Hooks/useAuth";

const Signup = () => {
  const { setUser, setIsLoading } = useAuth();
  const location = useLocation();
  const history = useHistory();
  return (
    <div className="text-center Signin-container ">
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                <h2 className="card-title text-center mb-5  fs-5 ">
                  Please Sign In
                </h2>
                <>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                      required
                    />
                    <label htmlFor="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                    <label htmlFor="floatingPassword">Password</label>
                  </div>

                  <div className="form-check mb-3">
                    <label
                      className="form-check-label"
                      htmlFor="rememberPasswordCheck"
                    >
                      Already have an account ?{" "}
                      <Link to="/signin">Signin here</Link>
                    </label>
                  </div>
                  <div className="d-grid">
                    <button
                      className="btn btn-Signin text-uppercase fw-bold signin-btn"
                      type="submit"
                    >
                      Signup
                    </button>
                  </div>
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
