import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./RoutesFile/router";
import DotLoader from "./Component/DotLoader/DotLoader";
import { Suspense } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Suspense fallback={<DotLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
