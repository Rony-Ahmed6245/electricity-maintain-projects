
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './page/Home';
import ReportBox from './page/ReportBox';

import Login from './page/Login';
import Dashboard from './page/Dashboard';
import AddMaintain from './page/AddMaintain';
import ViewMaintain from './page/ViewMaintain';
import Develper from './page/Develper';
import ReportTable from './page/ReportTable';
import AllLLamp from './page/AllLLamp';
import Cv from './page/Cv';


const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader:()=>fetch('https://electricity-server.vercel.app/v1/workData')
            },
            {
                path: '/reportBox',
                element: <ReportBox></ReportBox>,
            },
           
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/dev',
                element: <Develper></Develper>,
            },
            {
                path: '/cv',
                element: <Cv></Cv>,
            },

        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [

            {
                path: '/dashboard',  //add maintain route
                element: <AddMaintain></AddMaintain>,
            },
            {
                path: '/dashboard/viewmaintain', //view Maintain route
                element: <ViewMaintain></ViewMaintain>,
            },
            {
                path: '/dashboard/reportTable', //view Maintain route
                element: <ReportTable></ReportTable>,
                loader:()=>fetch('https://electricity-server.vercel.app/v1/reportDatas')
            }
            ,
            {
                path: '/dashboard/AllLamp', //view Maintain route
                element: <AllLLamp></AllLLamp>,
                loader:()=>fetch('https://electricity-server.vercel.app/v1/reportDatas')
            }
        ]
    }
])

export default router;