import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";


import Footer from "../../../layouts/frontend/Footer";
import Navbar from "../../../layouts/frontend/Navbar";


const Login = () => {
  const history = useHistory();

  const [loginInput, setLogin] = useState({
    email: "",
    password: "",
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setLogin({ ...loginInput, [e.target.name]: e.target.value });
  };

  const loginSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: loginInput.email,
      password: loginInput.password,
    };

    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post(`/api/login`, data).then((res) => {
        if (res.data.status === 200) {
          localStorage.setItem("auth_token", res.data.token);
          localStorage.setItem("auth_name", res.data.username);
          swal("Success","successfully logged In!", "succss");
          
          history.push("/");
        } else if (res.data.status === 401) {
          // alert("invalid credentials ");
          swal("Warning", "Invalid credentials", "warning ");
          
        } else {
          setLogin({
            ...loginInput,
            error_list: res.data.validation_errors,
          });
        }
      });
    });
  };

  return (
    <div>
      <Navbar />
      <div className=" register-form  bg-dark ">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col col-md-6">
              <div className="card mt-2 ">
                <div className="card-body  p-5 ">
                  <form onSubmit={loginSubmit}>
                    <div className="form-text py-4  ">
                      <h3> Login Now!</h3>
                    </div>
                    <div className="form-group ">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        onChange={handleInput}
                        value={loginInput.email}
                      />
                      <span className="erroremail text-danger">
                        {loginInput.error_list.email}
                      </span>
                    </div>
                    <div className="form-group my-3">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        onChange={handleInput}
                        value={loginInput.password}
                      />
                      <span className="errorpassword  text-danger">
                        {loginInput.error_list.password}
                      </span>
                    </div>
                    <div className="form-check d-flex justify-content-between">
                      <div>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          Check it.
                        </label>
                      </div>
                      <Link to="/register">
                        {" "}
                        <span>Create an account !</span>{" "}
                      </Link>
                    </div>
                    <button type="submit" className="btn btn-primary my-2">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
