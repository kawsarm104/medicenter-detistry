import React from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
// import useAuth from './../../../hooks/useAuth';
import useAuth from "../../../Hooks/useAuth";
import HookForm from "../HookForm/HookForm";
import "./Signin.css";
// import useAuth from './../../../Hooks/useAuth'

const Signin = () => {
  const { signInUsingGoogle, setUser, setIsLoading } = useAuth();
  const location = useLocation();
  const history = useHistory();

  const handleGoogleSignin = () => {
    signInUsingGoogle()
      .then((result) => {
        history.push(location.state?.from || "/home");
        // console.log(location.state?.from,"google er te");
        setUser(result.user);
      })
      .finally(() => setIsLoading(false));
  };

  // const { signInUsingGoogle } = useAuth();
  return (
    <>
      <HookForm></HookForm>

      <div className="text-center Signin-container ">
        {/* <h2 className=" text-info  ">Please Signin</h2> */}

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
                        Need an account ? <Link to="/signup">Signup here</Link>
                      </label>
                    </div>
                    <div className="d-grid">
                      <button
                        className="btn btn-Signin text-uppercase fw-bold signin-btn"
                        type="submit"
                      >
                        Sign in
                      </button>
                    </div>
                    <hr className="my-4" />
                    <div className="d-grid mb-2">
                      <button
                        onClick={handleGoogleSignin}
                        className="btn btn-google btn-Signin text-uppercase fw-bold"
                        type="submit"
                      >
                        <i className="fab fa-google me-2"></i> Sign in with
                        Google
                      </button>
                    </div>
                    {/* <div className="d-grid">
                    <button
                      onClick={handleFacebookSignin}
                      className="btn btn-facebook btn-Signin text-uppercase fw-bold"
                      type="submit"
                    >
                      <i className="fab fa-facebook-f me-2"></i> Sign in with
                      Facebook
                    </button>
                  </div> */}
                  </>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
