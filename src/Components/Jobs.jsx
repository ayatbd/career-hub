import React from "react";
import { Link } from "react-router-dom";

const Jobs = ({job, handleJobsCard}) => {
  const {id, picture, title, title_info, location, salary} = job
    // console.log(handleJobsCard)

  return (
    <div className="border flex flex-col justify-center items-start rounded-md p-10 space-y-3">
      <img className="mb-6" width='100' height='140' src={picture} alt="" />
      <h4 className="font-bold">{title}</h4>
      <h6>{title_info}</h6>
      <div className="flex gap-2">
        <button className="rounded border-violet-500 hover:bg-violet-700 border py-1 px-2">Remote</button> <button className="rounded border-violet-500 hover:bg-violet-700 border py-1 px-2">Full Time</button>
      </div>
      <div className="flex gap-4">
          <h6>{location}</h6> <h6>{salary}</h6>
      </div>
      <button className="bg-violet-500 py-2 px-4 rounded hover:bg-violet-300"><Link to={`/jobDetails/${id}`}>View Details</Link></button>
      
    </div>
  );
};

export default Jobs;
