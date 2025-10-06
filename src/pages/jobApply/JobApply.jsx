import { Link, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();
//   console.log(user);
    const handleApplyFormSubmit = e =>{
        e.preventDefault()
        const form = e.target;

        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;
        console.log(linkedIn, github,resume )
        
    }

  return (
    <div>
      <h3 className="text-4xl">Apply for this job:<Link to={`/jobs/${jobId}`}>details</Link></h3>
      <form onSubmit={handleApplyFormSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

          <label className="label">LinkedIn link</label>
          <input type="url" name="linkedIn" className="input" placeholder="Linkdin profile link" />

          <label className="label">Github link</label>
          <input type="url" name="github" className="input" placeholder="Github link" />

          <label className="label">Resume link</label>
          <input type="url" name="resume" className="input" placeholder="Resume link" />
          <input type="submit"  className="btn" />
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;
