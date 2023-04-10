import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import ErrorPage from "./Components/ErrorPage";
import Blog from "./Components/Blog";
import Statistics from './Components/Statistics';
import AppliedJobs from "./Components/AppliedJobs";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
    {path: "/",
     element: <Home></Home>
    },
    {
      path: "/blog",
      element: <Blog></Blog>
    },
    {
      path: "/statistics",
      element: <Statistics></Statistics>
    },
    {
      path: "/jobs",
      element: <AppliedJobs></AppliedJobs>
    },
    {
      path: "*",
      element: <ErrorPage></ErrorPage>
    }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
