import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div>
            <li className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl my-4 mx-auto px-2">
                <NavLink className="p-2 hover:bg-gradient-to-r hover:from-[#FFB534] hover:text-black hover:to-[#65B741] border text-center rounded-sm text-white bg-gradient-to-r from-[#65B741]  to-[#FFB534]" to="/">হোম</NavLink>
                <NavLink className="p-2 hover:bg-gradient-to-r hover:from-[#FFB534] hover:text-black hover:to-[#65B741] border text-center rounded-sm text-white bg-gradient-to-r from-[#65B741]  to-[#FFB534]" to="/dashboard">কার্যবলি যুক্ত</NavLink>
                <NavLink className="p-2 hover:bg-gradient-to-r hover:from-[#FFB534] hover:text-black hover:to-[#65B741] border text-center rounded-sm text-white bg-gradient-to-r from-[#65B741]  to-[#FFB534]" to="/dashboard/viewMaintain">কার্যবলি টেবিল</NavLink>
                <NavLink className="p-2 hover:bg-gradient-to-r hover:from-[#FFB534] hover:text-black hover:to-[#65B741] border text-center rounded-sm text-white bg-gradient-to-r from-[#65B741]  to-[#FFB534]" to="/dashboard/viewMaintain">অভিযোগ টেবিল</NavLink>
            </li>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;