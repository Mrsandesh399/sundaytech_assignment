import React, { useState } from "react";
import "./loginStyles.css";
import { validateEmail, validatePassword } from "../../Services/inputFunctions";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    emailID: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errorUserData, setErrorUserData] = useState({
    emailID: "",
    password: "",
  });

  const handleInputs = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleEmail = (event) => {
    const { value } = event.target;
    setErrorUserData({ ...errorUserData, emailID: validateEmail(value) });
  };

  const handlePassword = (event) => {
    const { value } = event.target;
    setErrorUserData({ ...errorUserData, password: validatePassword(value) });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const errorEmail = validateEmail(userData.emailID);
    const errorPassword = validatePassword(userData.password);
    setErrorUserData({
      emailID: errorEmail,
      password: errorPassword,
    });
    if (errorEmail === "" && errorPassword === "") {
      const getUserData = JSON.parse(localStorage.getItem("registered_user"));
      let isExist = false;
      getUserData.map((user) => {
        if (
          user.emailID === userData.emailID &&
          user.password === userData.password
        ) {
          isExist = true;
        }
      });
      if (isExist) {
        navigate("/userlist");
      } else {
        alert("User not found");
      }
      //localstorageCheck
    }
  };
  return (
    <div className="login-main-div row ">
      <div className={` col-md-6  col-xs-12 firstDiv`}>
        <img src="picture/login_screen.png" className="loginImage" />
      </div>
      <div className={` col-md-6  col-xs-12 secondDiv`}>
        <div>
          <img src="picture/ShipcomLogo.jpg" className="logoImage" />
          <div>
            <div className="welcome-heading">Welcome</div>
            <div className="login-heading">Login to Labs Monitoring System</div>
          </div>
          <div>
            <div class="form-group form-div">
              <label for="exampleInputEmail1" className="input-labels">
                Email ID
              </label>
              <input
                type="email"
                name="emailID"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={handleInputs}
                onBlur={handleEmail}
              />
              {errorUserData.emailID !== "" ? (
                <div className="errorMessage">{errorUserData.emailID}</div>
              ) : null}
            </div>
            <div class="form-group form-div">
              <label for="exampleInputPassword1" className="input-labels">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                class="form-control"
                onChange={handleInputs}
                onBlur={handlePassword}
                name="password"
                id="exampleInputPassword1"
              />
              <div
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </div>
              {errorUserData.password !== "" ? (
                <div className="errorMessage">{errorUserData.password}</div>
              ) : null}
            </div>

            <button
              type="submit"
              class="btn btn-primary button-login"
              onClick={handleSubmit}
            >
              Login
            </button>
            <div className="d-flex justify-content-end">
              <Link to="/register" className="forget-password-text">
                {" "}
                Forget Password ?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
