import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div>
            <li>
                <NavLink to="/">home</NavLink>
                <NavLink to="/dashboard">Add </NavLink>
                <NavLink to="/dashboard/viewMaintain">View </NavLink>
            </li>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;