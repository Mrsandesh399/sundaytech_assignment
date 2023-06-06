let emailRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
let passwordRegex = new RegExp(
  "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
);
let userNameRegex = new RegExp(
  "^[a-zA-Z0-9]([._](?![._])|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$"
);
export const validateEmail = (data) => {
  if (data === "") {
    return "Please enter Email";
  } else {
    return emailRegex.test(data) ? "" : "Please enter valid Email";
  }
};
export const validatePassword = (data) => {
  if (data === "") {
    return "Please enter Password";
  } else {
    return passwordRegex.test(data) ? "" : "Please enter valid Password";
  }
};
export const validateUserName = (data) => {
  if (data === "") {
    return "Please enter Username";
  } else {
    return userNameRegex.test(data) ? "" : "Please enter valid Username";
  }
};
