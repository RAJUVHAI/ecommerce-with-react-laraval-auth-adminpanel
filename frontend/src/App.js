import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// import AdminLogin from "./components/admin/Auth/Login";
// import AdminMasterLayout from "./layouts/admin/MasterLayout";
import Login from "./components/frontend/Auth/Login";
import Register from "./components/frontend/Auth/Register";
import Home from "./components/frontend/Home";
import AdminPrivateRoute from "./AdminPrivateRoute";

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post["Content-Type"] = "appication/json";
axios.defaults.headers.post["Accept"] = "appication/json";
axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("auth_token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} /> */}
          <Route path="/login">
            {localStorage.getItem("auth_token") ? (
              <Redirect to="/" />
            ) : (
              <Login />
            )}
          </Route>
          <Route path="/register">
            {localStorage.getItem("auth_token") ? (
              <Redirect to="/" />
            ) : (
              <Register  />
            )}
          </Route>
          {/* <Route exact path="/admin" component={AdminLogin} />
          <Route render={(props) => <AdminMasterLayout {...props} />} /> */}
          <AdminPrivateRoute  path='/admin' name='Admin' />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
