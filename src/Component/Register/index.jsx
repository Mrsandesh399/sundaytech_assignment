import React, { useState } from "react";
import {
  validateEmail,
  validatePassword,
  validateUserName,
} from "../../Services/inputFunctions";
import "./register.css";
import { useNavigate } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    userName: "",
    emailID: "",
    password: "",
  });
  const [errorUserData, setErrorUserData] = useState({
    emailID: "",
    userName: "",
    password: "",
  });

  const handleUserName = (event) => {
    const { name, value } = event.target;
    setErrorUserData({ ...errorUserData, userName: validateUserName(value) });
  };
  const handleInputs = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleEmail = (event) => {
    const { name, value } = event.target;
    setErrorUserData({ ...errorUserData, emailID: validateEmail(value) });
  };

  const handlePassword = (event) => {
    const { name, value } = event.target;
    setErrorUserData({ ...errorUserData, password: validatePassword(value) });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const errorEmail = validateEmail(userData.emailID);
    const errorPassword = validatePassword(userData.password);
    const errorUSerName = validateUserName(userData.userName);
    setErrorUserData({
      emailID: errorEmail,
      password: errorPassword,
      userName: errorUSerName,
    });
    if (errorEmail === "" && errorPassword === "" && errorUSerName === "") {
      const alreadyResgistered = JSON.parse(
        localStorage.getItem("registered_user")
      );
      if (alreadyResgistered) {
        const newData = [...alreadyResgistered, userData];
        localStorage.setItem("registered_user", JSON.stringify(newData));
      } else {
        const newData = [userData];
        localStorage.setItem("registered_user", JSON.stringify(newData));
      }
      navigate("/");
      //localstorageCheck
    }
  };
  return (
    <div>
      <div className="login-main-div row ">
        <div className={`col-lg-6 col-md-6 col-sm-12 col-xs-12 firstDiv`}>
          <img src="picture/login_screen.png" className="loginImage" />
        </div>
        <div className={`col-lg-6 col-md-6 col-sm-12 col-xs-12 secondDiv`}>
          <div>
            <img src="picture/ShipcomLogo.jpg" className="logoImage" />
            <div>
              <div className="welcome-heading">Welcome</div>
              <div className="login-heading">
                Register to Labs Monitoring System
              </div>
            </div>
            <div>
              <div class="form-group form-div">
                <label for="exampleInputuserName1" className="input-labels">
                  UserName
                </label>
                <input
                  type="text"
                  name="userName"
                  class="form-control"
                  id="exampleInputuserName1"
                  aria-describedby="userNameHelp"
                  onChange={handleInputs}
                  onBlur={handleUserName}
                />
                {errorUserData.userName !== "" ? (
                  <div className="errorMessage">{errorUserData.userName}</div>
                ) : null}
              </div>
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
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
