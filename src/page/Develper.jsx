import { FaGithub } from "react-icons/fa";
import { HiMiniGlobeAlt } from "react-icons/hi2";
import img from "../assets/Untitled design.png"

const Develper = () => {
    return (
        <div className="max-w-5xl mx-auto bg-[#2A3A99] p-4 min-h-screen flex justify-center items-center">
             <div className='w-full glass h-[40px] fixed top-0'></div>
            <div className=" border rounded-md p-4 shadow-md mb-20">
                <div className=" ">
                    <div className="flex justify-center items-center gap-4 pt-6 ">
                        <img className="w-[100px] md:w-[100px]  rounded-full" src={img} alt="" />
                    </div>
                    <div className="space-y-1 p-3">
                        <h1 className="text-center text-2xl font-bold text-white uppercase">Rony Ahmed</h1>
                        <p className="text-center text-md font-semibold text-white">Font-End Developer</p>
                        <p className="text-center text-sm text-white px-4">Diploma in Computer science and Technology</p>
                        <p className="text-center text-sm text-white px-4">Barisal Polytechnic Institute, Barisal</p>
                    </div>
                    <div className="flex justify-center items-center gap-4 pb-5">


                        <a target='_blank' href="https://github.com/Rony-Ahmed6245" ><FaGithub className=" text-2xl rounded-full text-white" /></a>
                        <a target="_blank" href="https://personal-portfolio45.netlify.app/"><HiMiniGlobeAlt className=" text-3xl text-white " /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Develper;