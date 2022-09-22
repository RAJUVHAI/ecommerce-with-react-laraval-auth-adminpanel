import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import Footer from "../../../layouts/frontend/Footer";
import Navbar from "../../../layouts/frontend/Navbar";
import "./Register.css";
const Register = () => {
  const history = useHistory();
  const [registerInput, setRegister] = useState({
    name: "",
    email: "",
    password: "",
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setRegister({ ...registerInput, [e.target.name]: e.target.value });
  };

  const registerSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: registerInput.name,
      email: registerInput.email,
      password: registerInput.password,
    };
    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post(`/api/register `, data).then((res) => {
        if (res.data.status === 200) {
          localStorage.setItem("auth_token", res.data.token);
          localStorage.setItem("auth_name", res.data.username);

        swal("Success", "Registration success !", "success");   

          history.push("/");
        } else {
          setRegister({
            ...registerInput,
            error_list: res.data.validation_errors,
          });
        }
      });
    });
  };
  return (
    <>
      <Navbar />
      <div className=" register-form  bg-dark ">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col col-md-6">
              <div className="card mt-2 ">
                <div className="card-body  p-5 ">
                  <form className="row g-3 " onSubmit={registerSubmit}>
                    <div className="form-text ">
                      <h3>Register Now! </h3>
                    </div>

                    <div className="col-md-12 position-relative">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        onChange={handleInput}
                        value={registerInput.name}
                      />
                      <span className="errorname text-danger">
                        {registerInput.error_list.name}
                      </span>
                    </div>

                    <div className="col-md-12 ">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="validationTooltip02"
                        onChange={handleInput}
                        value={registerInput.email}
                      />
                      <span className="erroremail text-danger">
                        {registerInput.error_list.email}
                      </span>
                    </div>
                    <div className="col-md-12">
                      <label className="form-label">Password</label>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        onChange={handleInput}
                        value={registerInput.password}
                      />

                      <span className="errorpassword  text-danger">
                        {registerInput.error_list.password}
                      </span>
                    </div>

                    <div className="">
                      <div className="d-flex justify-content-between  ">
                        <button className="btn btn-primary mr-2" type="submit">
                          Submit
                        </button>
                        <Link to="/login">
                          {" "}
                          <span>Already have an account ?</span>{" "}
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Register;
