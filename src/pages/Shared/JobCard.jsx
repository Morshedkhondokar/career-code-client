import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router";

const JobCard = ({job}) => {
    const {_id,title,location,requirements,salaryRange,jonType,category,description, company, company_logo} = job

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="flex items-center">
        <figure>
        <img
          src={company_logo}
          className="w-16"
          alt="Shoes"
        />
      </figure>
        <div>
            <h1 className="text-4xl">{company}</h1>
            <p className="flex gap-1.5 items-center"><IoLocationOutline /> {location}</p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
         {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>salaryRange: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
        <p>
          {description}
        </p>
        <div className="card-actions">
            {
                requirements.map((skill,index) =>  <div key={index} className="badge badge-outline">{skill}</div>)
            }
         
         
        </div>
        <div className="card-actions justify-end">
      <Link to={`/jobs/${_id}`}><button className="btn btn-primary">Apply Now</button></Link>
    </div>
      </div>
    </div>
  );
};

export default JobCard;
