import React from "react";
import Header from "./Header";
import img1 from "../assets/All Images/P3OLGJ1 copy 1.png";
import pfImg1 from "../assets/Icons/accounts 1.png"
import "./Custom.css";
import Jobs from "./Jobs";

const Home = () => {
  return (
    <div className="">
      <div className="flex justify-between mt-10">
        <div className="w-1/2 flex flex-col items-start justify-center space-y-7 ">
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
        <div className="w-1/2">
          <img className="w-full" src={img1} alt="" />
        </div>
      </div>
      <div className="mt-28">
            <h2 className="text-4xl font-bold mb-4">Job Category List</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="flex justify-between items-center mt-7">
                <div className="p-10 px-16 bg-red-100 space-y-3">
                    <img src={pfImg1} alt="" />
                    <h5 className="font-bold">Account & Finance</h5>
                    <p>300 job Available</p>
                </div>
                <div className="p-10 px-16 bg-red-100 space-y-3">
                    <img src={pfImg1} alt="" />
                    <h5 className="font-bold">Account & Finance</h5>
                    <p>300 job Available</p>
                </div>
                <div className="p-10 px-16 bg-red-100 space-y-3">
                    <img src={pfImg1} alt="" />
                    <h5 className="font-bold">Account & Finance</h5>
                    <p>300 job Available</p>
                </div>
                <div className="p-10 px-16 bg-red-100 space-y-3">
                    <img src={pfImg1} alt="" />
                    <h5 className="font-bold">Account & Finance</h5>
                    <p>300 job Available</p>
                </div>
            </div>
      </div>
      
      <Jobs></Jobs>
    </div>
  );
};

export default Home;
