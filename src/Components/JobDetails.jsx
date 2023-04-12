import React, { useEffect, useState } from 'react';
import "../Components/Custom.css"
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const { jobId } = useParams();
    // const jobData = useLoaderData();

    const [job, setJob] = useState({})
    // const [cart, setCart] = useState([])

    useEffect(() => {
        fetch("/jobInfo.json")
        .then(response => response.json())
        .then((data) => {
            const jobData = data.find((job) => job.id == jobId);
            setJob(jobData);
            // console.log(job)
        })
      },[jobId])

    console.log(job.job_description);

    return (
        <div className='mt-14 mb-12'>
            <h3 className='font-bold'>Job Details</h3>
            <div className='mt-52 flex justify-between items-center'>
                <div className='flex justify-center items-start flex-col space-y-4 w-3/5'>
                    <p className='text-start'><span className='font-bold'>Job Description:</span> {job.job_description}</p>
                    <p className='text-start'><span className='font-bold'>Job Responsibility:</span> {job.job_responsibility}</p>
                    <p className='font-bold'>Educational Requirements:</p>
                    <p>{job.educational_requirement ? job.educational_requirement : "no required"}</p>
                    <p className='font-bold'>Experiences:</p>
                    <p>{job.experiences}</p>
                </div>
                <div className='flex flex-col justify-center items-start bg-sky-300 rounded p-4'>
                    <p className='font-bold mb-2'>Job Details</p>
                    <div className='border-t pt-3 flex justify-center items-start flex-col space-y-2'>
                        <p>Salary: {job.salary}</p>
                        <p>Job Tittle: {job.title}</p>
                    </div>
                    <p className='font-bold pt-3'>Contact Information</p>
                    <div className='border-t pt-3 flex flex-col justify-center items-start space-y-2 mt-2 mb-5'>
                        <p>Phone: {job.Phone}</p>
                        <p>Email: {job.email}</p>
                        <p>Address: {job.address}</p>
                    </div>
                    <button className='text-blue w-full bg-violet-500 py-2 px-4 rounded hover:bg-violet-300 mt-3'>Apply</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;