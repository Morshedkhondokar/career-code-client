import React, { useEffect, useState } from 'react';
import JobCard from '../Shared/jobCard';

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1 className='text-4xl text-center'>Hot Jobs of the day</h1>
           <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                jobs.map((job) => <JobCard key={job._id} job={job}/>)
            }
           </div>
        </div>
    );
};

export default HotJobs;
