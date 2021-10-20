// import { confirmPasswordReset } from "@firebase/auth";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import useFirebase from "../../../Hooks/useFirebase";
import "./HookForm.css";
const HookForm = () => {
  // const [name, setName] = useState("");
  const location = useLocation();
  const history = useHistory();
  const { setUser, setUserName, handleUserRegister } = useFirebase();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    handleUserRegister(data.email, data.password)
      .then((result) => {
        history.push(location.state?.from || "/home");
        window.location.reload(); //for stopping reload
        setUserName(data.displayName);
        console.log(result);
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
    console.log(data);
    setUser(data);
    console.log(data.email);
  };

  return (
    <Container className="d-flex justify-content-center hook-form ">
      <Row>
        <Col sm={12} md={12}>
          {" "}
          <form
            className="signin-form border p-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* <label htmlFor="name">Name</label> */}
            <input
              id="displayName"
              placeholder="Enter your Name"
              {...register("displayName", { required: true, maxLength: 30 })}
            />
            {errors.displayName && errors.displayName.type === "required" && (
              <span className="error">Name is required</span>
            )}
            {errors.displayName && errors.displayName.type === "maxLength" && (
              <span className="error">Max length exceeded</span>
            )}

            <input
              placeholder="Enter your Email"
              {...register("email", { required: true })}
            />
            {errors.email && <span className="error">Email is required</span>}

            <input
              placeholder="Enter password "
              defaultValue=""
              type="password"
              //   onClick={handleRegister}
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="error">Password is required</span>
            )}

            <input type="submit" value="Signup" className="signin-btn mb-3" />
            {/* <span>
          Already Have acoount? <Link to="/signup">Signin here</Link>
        </span> */}
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default HookForm;
