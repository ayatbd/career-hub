import React, { useEffect, useState } from 'react';
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

    console.log(job);

    return (
        <div>
            <h3>here are job det</h3>
        </div>
    );
};

export default JobDetails;