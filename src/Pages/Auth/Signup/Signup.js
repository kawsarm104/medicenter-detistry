import React, { useState } from "react";
import useFirebase from "../../../Hooks/useFirebase";
import { useHistory, useLocation } from "react-router";
// import useFirebase from "../../Hook/useFirebase";

const Login = () => {
      const location = useLocation();
      const history = useHistory();
  const {
    user,
      setUser,
    setIsLoading,
    handleUserRegister,
    handleUserLogin,
  } = useFirebase();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const hanldeEmail = (e) => {
    setEmail(e.target.value);
  };
  const hanldePassword = (e) => {
    setPassword(e.target.value);
  };

  // console.log(email, password);

  const handleRegister = () => {
    handleUserRegister(email, password);
  };

  const handleLogin = () => {
      handleUserLogin(email, password)
        .then((result) => {
          history.push(location.state?.from || "/home");
          // console.log(location.state?.from,"google er te");
          setUser(result.user);
        })
        .finally(() => setIsLoading(false));
  };

  return (
    <div className="div d-flex justify-content-center align-items-center">
      <div className="row ">
        <div className="col-md-6">
          <div>
            <div className="form-input mt-5">
              <input
                onChange={hanldeEmail}
                className="mt-2 p-2"
                type="email"
                placeholder="Email"
              />
              <input
                onChange={hanldeEmail}
                className="mt-2 p-2"
                type="email"
                placeholder="Email"
              />
              <br />
              <input
                onChange={hanldePassword}
                className="mt-2 p-2"
                type="password"
                placeholder="Password"
              />
              <br />
              <div className="login-regiater-btn mt-4">
                <button
                  onClick={handleRegister}
                  className="btn btn-primary me-1"
                >
                  Register
                </button>
                <button onClick={handleLogin} className="btn btn-success ms-1">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Login;
