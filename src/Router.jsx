
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './page/Home';
import ReportBox from './page/ReportBox';
import ViewWork from './page/ViewWork';
import Login from './page/Login';
import Dashboard from './page/Dashboard';
import AddMaintain from './page/AddMaintain';
import ViewMaintain from './page/ViewMaintain';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/reportBox',
                element: <ReportBox></ReportBox>,
            },
            {
                path: '/viewWork',
                element: <ViewWork></ViewWork>,
            },
            {
                path: '/login',
                element: <Login></Login>,
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
        ]
    }
])

export default router;