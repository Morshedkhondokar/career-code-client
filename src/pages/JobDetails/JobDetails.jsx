import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
    const {_id,title,company, company_logo} = useLoaderData();
    return (
        <div>
            <img src={company_logo} alt="" />
            <h1 className='text-2xl'>{title}</h1>
            <h3>{company}</h3>
           <Link to={`/jobApply/${_id}`}>
             <button className='btn'>Apply now</button>
           </Link>
        </div>
    );
};

export default JobDetails;