import React, { useState } from "react";
import "./Login.css";
//import { useHistory } from "react-router-dom";
// import axios from "axios";

const Login = () => {
  // let history = useHistory();

  const [loginInput, setLogin] = useState({
    email: "",
    password: "",
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
localStorage.setItem(data)
     console.log(data);
    // axios.post("http://localhost:8000/api/admin", data).then((res) => {
    //   console.log(res.data);
    //   history("/");
    // });
  };

  return (
    <div>
      <div className="login-form  bg-dark ">
        <div className="container ">
          <div className="row justify-content-center">
            <div className="col col-md-6">
              <div className="card ">
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
                        onChange={handleInput}
                        value={loginInput.email}
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        required
                      />
                    </div>
                    <div className="form-group my-3">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input
                        type="password"
                        name="password"
                        onChange={handleInput}
                        value={loginInput.password}
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        required
                      />
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
    </div>
  );
};

export default Login;
