import React from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import "./Navbar.css";

const Navbar = () => {
  const history = useHistory();

  const logoutSubmit = (e) => {
    e.preventDefault();
    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post(`/api/logout`).then((res) => {
        if (res.data.status === 200) {
          localStorage.removeItem("auth_token");
          localStorage.removeItem("auth_name");

          swal("Success", "successfully log Out!", "success ");

          history.push("/");
        }
      });
    });
  };

  var authProfile = "";
  if (!localStorage.getItem("auth_token")) {
    authProfile = (
      <Link to="/register">
        {" "}
        <button type="button " className="btn position-relative ">
          <i className="fa fa-user-plus text-primary" aria-hidden="true"></i>
        </button>
      </Link>
    );
  } else {
    authProfile = (
      // <Link to="/profile">
      //   {" "}
      //   <button type="button " className="btn position-relative ">
      //     <i className="fa fa-user" aria-hidden="true">Profile</i>
      //   </button>
      // </Link>
      <button type="button " className="btn position-relative ">
        <li className=" dropdown">
          <span
            className="dropdown-toggle text-primary"
            id="navbarDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fas fa-user fa-fw text-primary"></i>
          </span>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdown"
          >
            <li>
              {" "}
              <Link className="dropdown-item" to="/ddddj">
                Settings
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/logou">
                Activity Log
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="dropdown-item">
              <span onClick={logoutSubmit}>Logout</span>
            </li>
          </ul>
        </li>
      </button>
    );
  }
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm ">
          <div className="container-fluid">
            <Link className="navbar-brand py-2 order-lg-0" to="/">
              Raj<span className="text-primary  ">tech</span>
            </Link>
            <div className="order-lg-2">
              <button type="button " className="btn position-relative ">
                <i className="fa fa-shopping-cart text-primary" />
                <span className="position-absolute top-0 start-100 translate-middle badge bg-primary ">
                  {" "}
                  5
                </span>
              </button>
              <button type="button " className="btn position-relative mx-2">
                <i className="fa fa-heart text-primary" aria-hidden="true"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge bg-primary ">
                  {" "}
                  2
                </span>
              </button>
              {authProfile}
            </div>
            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse order-lg-1" id="navbarNav">
              <ul className="navbar-nav mx-auto text-align-center">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/#">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/#">
                    Features
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/#">
                    Pricing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/ggg" className="nav-link disabled">
                    Disabled
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
