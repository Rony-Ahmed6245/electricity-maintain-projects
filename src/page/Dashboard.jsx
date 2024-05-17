import { Link,  Outlet } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";
import { CiViewTable } from "react-icons/ci";
import { MdOutlineSms } from "react-icons/md";
import { useEffect, useState } from "react";
import { FcManager } from "react-icons/fc";
import { FcHome } from "react-icons/fc";
import { FcDocument } from "react-icons/fc";

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://electricity-server.vercel.app/v1/reportDatas")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
            })
    }, []);
    // console.log(users);

    return (
        <div className="bg-[#2A3A99]">
            <div className="flex justify-center ">
                <div className="button-container glass max-w-5xl mx-auto   fixed  top-0 z-20">
                    <Link to="/dashboard" className="flex justify-center items-center text-white">
                        <IoAddCircleOutline className="text-white" />যুক্ত                  </Link>
                    <Link to="/dashboard/viewMaintain" className="flex justify-center items-center text-white  ">
                        <CiViewTable  className="text-white" />অপেক্ষমান 
                    </Link>
                    <Link to="/dashboard/AllLamp" className="flex justify-center items-center  text-white ">
                        <CiViewTable  className="text-white" />মেরামত 
                    </Link>

                    <Link to="/dashboard/reportTable" className="button text-white ">
                        <MdOutlineSms className="text-white" /><sup className="text-md text-white bg-red-400 p-2 rounded-full">{users.length}</sup>
                    </Link>
                </div>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
            <div className="flex justify-center fixed w-full bottom-0">
        <div className="button-container max-w-5xl mx-auto mt-2 py-7">
          
          <Link to="/reportBox" className="button text-2xl ">
            <FcDocument />
          </Link>
          <Link to="/" className="button text-2xl">
            <FcHome />
          </Link>
          <Link to="/login" className="button text-2xl">
            <FcManager />
          </Link>
        </div>
      </div>
        </div>
    );
};

export default Dashboard;