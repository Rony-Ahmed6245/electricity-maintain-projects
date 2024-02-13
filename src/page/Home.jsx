import bg from '../assets/bg.jpg'
import bg2 from '../assets/bg2.jpg'
import bg3 from '../assets/bg3.jpg'
import bg4 from '../assets/bg4.jpg'
import bg5 from '../assets/bg-5.jpg'
import meor1 from '../assets/1.png'
import meor2 from '../assets/2.png'
import meor3 from '../assets/3.png'
import meor4 from '../assets/4.png'
import meor5 from '../assets/5.png'
import meor6 from '../assets/6.png'
import { NavLink } from 'react-router-dom'
import { FiPhoneOutgoing } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa6";
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaGithub } from "react-icons/fa";
import { HiMiniGlobeAlt } from "react-icons/hi2";

const Home = () => {
    return (
        <div className='bg1'>
            <div className='max-w-5xl mx-auto bg-white  shadow-2xl' >

                {/* ------------------banner ------------------ */}
                <Carousel
                    autoPlay
                    infiniteLoop
                >
                    <div>
                        <img src={bg} alt="" loading="lazy" />
                    </div>
                    <div>
                        <img src={bg2} alt="" loading="lazy" />
                    </div>
                    <div>
                        <img src={bg3} alt="" loading="lazy" />
                    </div>
                    <div>
                        <img src={bg4} alt="" loading="lazy" />
                    </div>
                    <div>
                        <img src={bg5} alt="" loading="lazy" />
                    </div>
                </Carousel>

                <marquee className="text-sm text-black">ভাঙ্গুড়া পৌরসভার মধ্যে যে কোন স্থানের সোলার বাতি, বৈদ্যূতিক বাতি নষ্ট থাকলে আপনি আমাদের  অভিযোগ করুন।</marquee>


                {/* -----------card  ----------------------*/}
                <h1 className='text-center text-xl mt-10 mb-10'>----ভাঙ্গুড়া পৌরসভার কার্যরত ব্যাক্তিবর্গ --- </h1>
                <div className='grid grid-cols-1 md:grid-cols-2  px-4 lg:grid-cols-3 gap-4 mb-20'>
                   
 
                    {/* card  */}
                    <div className="">
                        <div className=" border h-[350px] rounded-md p-10 shadow-md">
                            <div className=" ">
                                <div className="flex justify-center items-center gap-4 pt-6 ">
                                    <img className="w-[100px] md:w-[100px]  rounded-full" src={meor1} alt="" />
                                </div>
                                <div className="space-y-1 p-3">
                                    <h1 className="text-center text-[15px] font-bold text-gray-600 uppercase">আলহাজ্ব মোঃ গোলাম হাসনাইন রাসেল</h1>
                                    <p className="text-center text-[12px] font-semibold text-[#65B741]">মেয়র, ভাঙ্গুড়া পৌরসভা।</p>
                                   
                                </div>
                                <div className="flex justify-center items-center mt-2 gap-4 pb-5">


                                    <a target='_blank' href="#" ><FiPhoneOutgoing  className=" text-2xl rounded-full text-[#65B741]" /></a>
                                    <a target="_blank" href="#">< FaFacebook  className=" text-2xl text-[#65B741] " /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className=" border h-[350px] rounded-md p-10 shadow-md">
                            <div className=" ">
                                <div className="flex justify-center items-center gap-4 pt-6 ">
                                    <img className="w-[100px] md:w-[100px]  rounded-full" src={meor4} alt="" />
                                </div>
                                <div className="space-y-1 p-3">
                                    <h1 className="text-center text-[15px] font-bold text-gray-600 uppercase">মোঃ আমিনুল ইসলাম</h1>
                                    <p className="text-center text-[12px] font-semibold text-[#65B741]">নির্বাহী প্রকৌশলী, ভাঙ্গুড়া পৌরসভা।</p>
                                   
                                </div>
                                <div className="flex justify-center items-center mt-2 gap-4 pb-5">


                                    <a target='_blank' href="#" ><FiPhoneOutgoing  className=" text-2xl rounded-full text-[#65B741]" /></a>
                                    <a target="_blank" href="#">< FaFacebook  className=" text-2xl text-[#65B741] " /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <div className="">
                        <div className=" border h-[350px] rounded-md p-10 shadow-md">
                            <div className=" ">
                                <div className="flex justify-center items-center gap-4 pt-6 ">
                                    <img className="w-[100px] md:w-[100px]  rounded-full" src={meor6} alt="" />
                                </div>
                                <div className="space-y-1 p-3">
                                    <h1 className="text-center text-[15px] font-bold text-gray-600 uppercase">জনাব উত্তম কুমার সাহা</h1>
                                    <p className="text-center text-[12px] font-semibold text-[#65B741]">পৌরনির্বাহী কর্মকর্তা, ভাঙ্গুড়া পৌরসভা।</p>
                                   
                                </div>
                                <div className="flex justify-center items-center mt-2 gap-4 pb-5">


                                    <a target='_blank' href="#" ><FiPhoneOutgoing  className=" text-2xl rounded-full text-[#65B741]" /></a>
                                    <a target="_blank" href="#">< FaFacebook  className=" text-2xl text-[#65B741] " /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className=" border h-[350px] rounded-md p-10 shadow-md">
                            <div className=" ">
                                <div className="flex justify-center items-center gap-4 pt-6 ">
                                    <img className="w-[100px] md:w-[100px]  rounded-full" src={meor5} alt="" />
                                </div>
                                <div className="space-y-1 p-3">
                                    <h1 className="text-center text-[15px] font-bold text-gray-600 uppercase">জনাব নাজমুল হুদা</h1>
                                    <p className="text-center text-[12px] font-semibold text-[#65B741]"> হিসাবরক্ষণ কর্মকর্তা, ভাঙ্গুড়া পৌরসভা।</p>
                                   
                                </div>
                                <div className="flex justify-center items-center mt-2 gap-4 pb-5">


                                    <a target='_blank' href="#" ><FiPhoneOutgoing  className=" text-2xl rounded-full text-[#65B741]" /></a>
                                    <a target="_blank" href="#">< FaFacebook  className=" text-2xl text-[#65B741] " /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className=" border h-[350px] rounded-md p-10 shadow-md">
                            <div className=" ">
                                <div className="flex justify-center items-center gap-4 pt-6 ">
                                    <img className="w-[100px] md:w-[100px]  rounded-full" src={meor3} alt="" />
                                </div>
                                <div className="space-y-1 p-3">
                                    <h1 className="text-center text-[15px] font-bold text-gray-600 uppercase"> মোঃ নয়ন মাহমুদ</h1>
                                    <p className="text-center text-[12px] font-semibold text-[#65B741]">     বিদ্যুৎ মিস্ত্রি, ভাঙ্গুড়া পৌরসভা।</p>
                                   
                                </div>
                                <div className="flex justify-center items-center mt-2 gap-4 pb-5">


                                    <a target='_blank' href="#" ><FiPhoneOutgoing  className=" text-2xl rounded-full text-[#65B741]" /></a>
                                    <a target="_blank" href="#">< FaFacebook  className=" text-2xl text-[#65B741] " /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className=" border h-[350px] rounded-md p-10 shadow-md">
                            <div className=" ">
                                <div className="flex justify-center items-center gap-4 pt-6 ">
                                    <img className="w-[100px] md:w-[100px]  rounded-full" src={meor2} alt="" />
                                </div>
                                <div className="space-y-1 p-3">
                                    <h1 className="text-center text-[15px] font-bold text-gray-600 uppercase"> মোঃ এনামুল হক</h1>
                                    <p className="text-center text-[12px] font-semibold text-[#65B741]">লাইনম্যান, ভাঙ্গুড়া পৌরসভা। </p>
                                   
                                </div>
                                <div className="flex justify-center items-center mt-2 gap-4 pb-5">


                                    <a target='_blank' href="#" ><FiPhoneOutgoing  className=" text-2xl rounded-full text-[#65B741]" /></a>
                                    <a target="_blank" href="#">< FaFacebook  className=" text-2xl text-[#65B741] " /></a>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>

                {/* -------------------footer  ------------------*/}
                <hr />
                <div className='bg-base-200 pb-5'>
                    <footer className="footer footer-content py-10 flex justify-center  text-base-content rounded">
                        <nav className="grid grid-flow-col gap-4">
                            <NavLink className="hover:text-[#65B741] font-bold hover:underline" to="/">হোম</NavLink>
                            <NavLink className="hover:text-[#65B741] font-bold hover:underline" to="/reportBox">অভিযোগ</NavLink>
                            <NavLink className="hover:text-[#65B741] font-bold hover:underline" to="/viewWork"> কার্যবলি   </NavLink>
                            <NavLink className="hover:text-[#65B741] font-bold hover:underline" to="/login">লগইন</NavLink>
                            <NavLink className="hover:text-[#65B741] font-bold hover:underline" to="/dev">ডেভেলপার</NavLink>
                        </nav>


                    </footer>
                    <h1 className='text-center mb-5'>
                        Copyright © 2024 - All right reserved
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Home;