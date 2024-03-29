import React, { useState } from "react";
import PropTypes from "prop-types";
import "./login.scss";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { actionFetchLogin, actionLogout } from "../../actions/login";

const Login: React.FC<any> = ({ user }) => {
  const dispatch = useDispatch();

  const [credentials, setCredentials] = useState();

  const handleInputChange = (event: any) => {
    setCredentials((state) => {
      return { ...(state as any), [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch(actionFetchLogin(credentials));
  };

  const handleLogOut = (event: any) => {
    event.preventDefault();
    dispatch(actionLogout());
  };

  return (
    <>
      {user.logged ? (
        <form className="login-form">
          <div className="login-login">{user.login}</div>
          <Button
            variant="contained"
            color="info"
            className="login-btn"
            onClick={handleLogOut}
          >
            {" "}
            Log out{" "}
          </Button>
        </form>
      ) : (
        <form className="login-form">
          <input
            className="login-input"
            name="login"
            placeholder="Login"
            onChange={handleInputChange}
          />
          <input
            className="login-input"
            name="password"
            placeholder="Password"
            type="password"
            onChange={handleInputChange}
          />
          <Button
            variant="contained"
            color="warning"
            className="login-btn"
            onClick={handleSubmit}
          >
            {" "}
            Log in{" "}
          </Button>
        </form>
      )}
    </>
  );
};

Login.propTypes = {};

export default Login;
