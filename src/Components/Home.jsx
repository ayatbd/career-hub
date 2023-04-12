import React from "react";
import Header from "./Header";
import img1 from "../assets/All Images/P3OLGJ1 copy 1.png";
import pfImg1 from "../assets/Icons/accounts 1.png";
import "./Custom.css";
import Job from "./Jobs";
import { useLoaderData } from "react-router-dom";
import Jobs from "./Jobs";

const Home = () => {
  const handleJobsCard = id => {
    // console.log(id)
  }

  const jobsData = useLoaderData();
  return (
    <div className="">
      <div className="md:flex justify-between mt-10">
        <div className="md:w-1/2 flex flex-col md:items-start items-center justify-center space-y-7 ">
          <h1 className="text-5xl font-bold text-start tracking-normal leading-tight">
            One Step <br /> Closer To Your <br />{" "}
            <span className="text-blue-500">Dream Job</span>
          </h1>
          <p className="text-start md:pr-48">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="cornflower-blue p-3 rounded">Get Started</button>
        </div>
        <div className="md:w-1/2">
          <img className="w-full" src={img1} alt="" />
        </div>
      </div>
      <div className="mt-28">
        <h2 className="text-4xl font-bold mb-4">Job Category List</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="md:flex justify-between items-center mt-7">
          <div className="p-10 px-16 bg-red-100 space-y-3">
            <img className="mx-auto md:mx-unset" src={pfImg1} alt="" />
            <h5 className="font-bold">Account & Finance</h5>
            <p>300 job Available</p>
          </div>
          <div className="p-10 px-16 bg-red-100 space-y-3">
            <img className="mx-auto md:mx-unset" src={pfImg1} alt="" />
            <h5 className="font-bold">Account & Finance</h5>
            <p>300 job Available</p>
          </div>
          <div className="p-10 px-16 bg-red-100 space-y-3">
            <img className="mx-auto md:mx-unset" src={pfImg1} alt="" />
            <h5 className="font-bold">Account & Finance</h5>
            <p>300 job Available</p>
          </div>
          <div className="p-10 px-16 bg-red-100 space-y-3">
            <img className="mx-auto md:mx-unset" src={pfImg1} alt="" />
            <h5 className="font-bold">Account & Finance</h5>
            <p>300 job Available</p>
          </div>
        </div>
      </div>
      <div className="mt-28">
          <h2 className="text-4xl font-bold mb-4">Featured Jobs</h2>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
          <div className="md:grid grid-cols-2 gap-4 mt-6">
          {jobsData.map((job) => (
            <Jobs key={job.id} job={job} handleJobsCard={handleJobsCard}></Jobs>
          ))}
          </div>
          <button className="bg-violet-500 py-2 px-4 rounded hover:bg-violet-300 mt-3">See All Jobs</button>
          
      </div>
    </div>
  );
};

export default Home;
