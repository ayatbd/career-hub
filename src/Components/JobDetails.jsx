import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const { jobId } = useParams();
    const jobData = useLoaderData;
    const job = jobData.find((j) => j.id === jobId);
    // console.log(job);
    // console.log(jobId)
    return (
        <div>
            <h3>here are job details</h3>
        </div>
    );
};

export default JobDetails;