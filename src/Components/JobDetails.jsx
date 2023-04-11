import React from 'react';
import { useLoaderData } from 'react-router-dom';
// import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const jobId = useLoaderData();
    // const jobId = useLoaderData()
    console.log(jobId);
    return (
        <div>
            <h3>here are job details</h3>
        </div>
    );
};

export default JobDetails;