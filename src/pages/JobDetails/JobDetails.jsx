import React from 'react';
import { useLoaderData } from 'react-router';

const JobDetails = () => {
    const {title,company, company_logo} = useLoaderData();
    return (
        <div>
            <img src={company_logo} alt="" />
            <h1 className='text-2xl'>{title}</h1>
            <h3>{company}</h3>
            <button className='btn'>Apply now</button>
        </div>
    );
};

export default JobDetails;