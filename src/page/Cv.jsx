import { FiPhoneOutgoing } from 'react-icons/fi';
import img1 from '../assets/1.png'
import img2 from '../assets/4.png'
import img3 from '../assets/6.png'
import img4 from '../assets/5.png'
import img5 from '../assets/3.png'
import img6 from '../assets/2.png'
import { FaFacebook } from 'react-icons/fa';

const Cv = () => {
    return (
        <div>
            <div className='w-full glass h-[40px] fixed top-0'></div>
            <div className='max-w-5xl mx-auto bg-[#2A3A99]  shadow-2xl' >
                {/* -----------card  ----------------------*/}
                <h1 className='text-center text-white text-xl py-14'>---- পরিচিতি ---- </h1>
                <div className='grid grid-cols-1 md:grid-cols-2  px-4 lg:grid-cols-3 gap-4 pb-20'>


                    {/* card  */}
                    <div className="">
                        <div className=" border  rounded-md p-10 shadow-md">
                            <div className=" ">
                                <div className="flex justify-center items-center gap-4  ">
                                    <img className="w-[100px] md:w-[100px] rounded-full" src={img1} alt="" />
                                </div>
                                <div className="space-y-1 p-3">
                                    <h1 className="text-center text-[15px] font-bold text-white uppercase">আলহাজ্ব মোঃ গোলাম হাসনাইন রাসেল</h1>
                                    <p className="text-center text-[12px] font-semibold text-white">মেয়র, ভাঙ্গুড়া পৌরসভা।</p>

                                </div>
                                <div className="flex justify-center items-center  gap-4 ">


                                    <a target='_blank' href="#" ><FiPhoneOutgoing className=" text-2xl rounded-full text-white" /></a>
                                    <a target="_blank" href="#">< FaFacebook className=" text-2xl text-white " /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className=" border rounded-md p-10 shadow-md">
                            <div className=" ">
                                <div className="flex justify-center items-center gap-4 pt-6 ">
                                    <img className="w-[100px] md:w-[100px]  rounded-full" src={img2} alt="" />
                                </div>
                                <div className="space-y-1 p-3">
                                    <h1 className="text-center text-[15px] font-bold text-white uppercase">মোঃ আমিনুল ইসলাম</h1>
                                    <p className="text-center text-[12px] font-semibold text-white">নির্বাহী প্রকৌশলী, ভাঙ্গুড়া পৌরসভা।</p>

                                </div>
                                <div className="flex justify-center items-center mt-2 gap-4 pb-5">


                                    <a target='_blank' href="#" ><FiPhoneOutgoing className=" text-2xl rounded-full text-white" /></a>
                                    <a target="_blank" href="#">< FaFacebook className=" text-2xl text-white " /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className=" border rounded-md p-10 shadow-md">
                            <div className=" ">
                                <div className="flex justify-center items-center gap-4 pt-6 ">
                                    <img className="w-[100px] md:w-[100px]  rounded-full" src={img3} alt="" />
                                </div>
                                <div className="space-y-1 p-3">
                                    <h1 className="text-center text-[15px] font-bold text-white uppercase">জনাব উত্তম কুমার সাহা</h1>
                                    <p className="text-center text-[12px] font-semibold text-white">পৌরনির্বাহী কর্মকর্তা, ভাঙ্গুড়া পৌরসভা।</p>

                                </div>
                                <div className="flex justify-center items-center mt-2 gap-4 pb-5">


                                    <a target='_blank' href="#" ><FiPhoneOutgoing className=" text-2xl rounded-full text-white" /></a>
                                    <a target="_blank" href="#">< FaFacebook className=" text-2xl text-white " /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className=" border rounded-md p-10 shadow-md">
                            <div className=" ">
                                <div className="flex justify-center items-center gap-4 pt-6 ">
                                    <img className="w-[100px] md:w-[100px]  rounded-full" src={img4} alt="" />
                                </div>
                                <div className="space-y-1 p-3">
                                    <h1 className="text-center text-[15px] font-bold text-white uppercase">জনাব নাজমুল হুদা</h1>
                                    <p className="text-center text-[12px] font-semibold text-white"> হিসাবরক্ষণ কর্মকর্তা, ভাঙ্গুড়া পৌরসভা।</p>

                                </div>
                                <div className="flex justify-center items-center mt-2 gap-4 pb-5">


                                    <a target='_blank' href="#" ><FiPhoneOutgoing className=" text-2xl rounded-full text-white" /></a>
                                    <a target="_blank" href="#">< FaFacebook className=" text-2xl text-white " /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className=" border rounded-md p-10 shadow-md">
                            <div className=" ">
                                <div className="flex justify-center items-center gap-4 pt-6 ">
                                    <img className="w-[100px] md:w-[100px]  rounded-full" src={img5} alt="" />
                                </div>
                                <div className="space-y-1 p-3">
                                    <h1 className="text-center text-[15px] font-bold text-white uppercase"> মোঃ নয়ন মাহমুদ</h1>
                                    <p className="text-center text-[12px] font-semibold text-white">     বিদ্যুৎ মিস্ত্রি, ভাঙ্গুড়া পৌরসভা।</p>

                                </div>
                                <div className="flex justify-center items-center mt-2 gap-4 pb-5">


                                    <a target='_blank' href="#" ><FiPhoneOutgoing className=" text-2xl rounded-full text-white" /></a>
                                    <a target="_blank" href="#">< FaFacebook className=" text-2xl text-white " /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className=" border rounded-md p-10 shadow-md">
                            <div className=" ">
                                <div className="flex justify-center items-center gap-4 pt-6 ">
                                    <img className="w-[100px] md:w-[100px]  rounded-full" src={img6} alt="" />
                                </div>
                                <div className="space-y-1 p-3">
                                    <h1 className="text-center text-[15px] font-bold text-white uppercase"> মোঃ এনামুল হক</h1>
                                    <p className="text-center text-[12px] font-semibold text-white">লাইনম্যান, ভাঙ্গুড়া পৌরসভা। </p>

                                </div>
                                <div className="flex justify-center items-center mt-2 gap-4 pb-5">


                                    <a target='_blank' href="#" ><FiPhoneOutgoing className=" text-2xl rounded-full text-white" /></a>
                                    <a target="_blank" href="#">< FaFacebook className=" text-2xl text-white " /></a>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>


            </div>
        </div>
    );
};

export default Cv;