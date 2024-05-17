import { PiCopyrightLight } from "react-icons/pi";

import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link, useLoaderData } from "react-router-dom";
import { PiUsers } from "react-icons/pi";
import { GrUserSettings } from "react-icons/gr";
import Swal from "sweetalert2";


const Home = () => {
    const data = useLoaderData([])
    // console.log(data);


    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://electricity-server.vercel.app/v1/reportDatas")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
            })
    }, []);

    // console.log(users);

const handelCopyRightText = () =>{
    Swal.fire({
        title: "এই ওয়েবসাইটে সকল তথ্য কপিরাইট আইন, ২০০০ এর আওতাধীন !",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
}



    return (
        <div className='bg-[#2A3A99]  min-h-screen pb-20 '>
            <div className="max-w-6xl mx-auto">

                <div>
                    <h1 className="text-sm text-center uppercase pt-20 font-mono text-white">আপনাকে </h1>
                    <h1 className="text-6xl text-center font-extrabold  font-mono text-white">স্বাগতম </h1>
                    <h1 className="text-3xl text-center uppercase  font-mono text-white">আলোকিত ভাঙ্গুড়া পৌরসভায়</h1>


                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-5 md:px-10 px-5 mt-5">
                    
                    <div className="  border rounded image2 p-2">
                        <h1 className="uppercase text-white font-mono text-4xl text-center  ">{data.length}</h1>
                        <h1 className="uppercase text-white font-mono text-center text-sm">অবশিষ্ট অপেক্ষমান বাতি</h1>
                    </div>

                    <div className={` rounded border image2 p-2`}>
                        <h1 className="uppercase text-white font-mono text-4xl text-center ">{users.length}</h1>
                        <h1 className="uppercase text-white font-mono text-center text-sm">গ্রাহক অভিযোগ</h1>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-5 p-4 mt-10">
                    <Link to={'/cv'} className="border p-2 rounded image2 text-white font-mono flex justify-center items-center gap-1">
                        <PiUsers className="text-xl" /> পরিচিতি
                    </Link>
                    <Link to={'/dev'} className="border p-2 rounded image2 text-white font-mono flex justify-center items-center gap-2">
                        <GrUserSettings className="text-xl" /> ডেভেলপার
                    </Link>
                </div>
            </div>
            <div onClick={handelCopyRightText} className="fixed top-4 text-xl text-white right-2"><PiCopyrightLight /></div>
        </div>
    );
};

export default Home;