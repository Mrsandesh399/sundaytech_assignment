import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const UserList = React.lazy(() => import("../Component/UserList"));
const Login = React.lazy(() => import("../Component/Login"));
const Register = React.lazy(() => import("../Component/Register"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/userlist",
    element: <UserList />,
  },
]);
