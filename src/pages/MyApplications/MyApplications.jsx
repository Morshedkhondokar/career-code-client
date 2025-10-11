import React, { Suspense } from 'react';
import Applications from './Applications';
import ApplicationList from './ApplicationList';
import useAuth from '../../hooks/useAuth';
import { myApplicationsPromise } from '../../api/applicationAPi';


const MyApplications = () => {
    const {user} = useAuth()

    return (
        <div>
            <Applications/>
           <Suspense fallback={'loading your applications'}>
                 <ApplicationList myApplicationsPromise={myApplicationsPromise(user.email)}/>
           </Suspense>
        </div>
    );
};

export default MyApplications;