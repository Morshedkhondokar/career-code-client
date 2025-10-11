import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRouter from "../routes/PrivateRouter";
import JobApply from "../pages/jobApply/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:[
      {
        index:true,
        Component: Home
      },
      {
        path: '/jobs/:id',
        Component: JobDetails,
        loader: ({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)
      },
      {
        path:"/jobApply/:id",
        element:<PrivateRouter><JobApply/></PrivateRouter>
      },
      {
        path:'/myApplications',
        element: <PrivateRouter><MyApplications/></PrivateRouter>
      },
      {
        path: '/register',
        Component: Register
      },
      {
        path: '/signIn',
        Component: SignIn
      }
    ]
  },
]);

export default router;