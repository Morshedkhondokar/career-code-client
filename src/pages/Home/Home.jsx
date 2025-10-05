import React, { Suspense } from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';

const Home = () => {
    return (
        <div>
           <Banner/>
          <Suspense fallback={"Loading Hot jobs ..."}>
             <HotJobs />
          </Suspense>
        </div>
    );
};

export default Home;