import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import ErrorPage from "./Components/ErrorPage";
import Blog from "./Components/Blog";
import Statistics from "./Components/Statistics";
import AppliedJobs from "./Components/AppliedJobs";
import JobDetails from "./Components/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/jobInfo.json"),
      },
      {
        path: "/jobDetails/:jobId",
        element: <JobDetails></JobDetails>,
        loader: () => fetch(`/jobInfo.json}`)
        // loader: ({params}) => fetch(`https://api.npoint.io/3ea6bd959126711e1d96/${params.jobId}`)
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/jobs",
        element: <AppliedJobs></AppliedJobs>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
