import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { FaPhoneAlt } from "react-icons/fa";



const ReportTable = () => {

const [users, setUsers] = useState([]);
useEffect(() => {
    fetch("https://electricity-server.vercel.app/v1/reportDatas")
        .then((res) => res.json())
        .then((data) => {
            setUsers(data);
        })
}, []);
// console.log(users);

const handleDelete = async (accountId) => {
    Swal.fire({
        title: "Are you sure?",
        text: "Report Delete",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Delete Report!"
    }).then(async (result) => {
        if (result.isConfirmed) {
            try {
                const response = await fetch(`https://electricity-server.vercel.app/v1/reportDatas/${accountId}`, {
                    method: 'DELETE',
                });

                if (response.ok) {
                    setUsers((prevUsers) => prevUsers.filter((user) => user._id !== accountId));
                    Swal.fire({
                        title: "Deleted!",
                        text: "Report has been deleted.",
                        icon: "success"
                    });
                } else {
                    console.error(`Error deleting account with ID: ${accountId}`);
                }
            } catch (error) {
                console.error('Error deleting account:', error);
            }
        }
    });


};

    
    

    return (
        <div className="max-w-5xl mx-auto bg-[#2A3A99]  min-h-screen px-4 pt-10 pb-20">
           
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 pt-5 px-2">
                {
                    users?.map(item => (
                        <div className="card1" key={item.id}>
                            <button className="dismiss" type="button"  onClick={() => handleDelete(item._id)}>×</button>
                            <div className="header">
                                <div className="image">
                                    {/* Display word here */}
                                    {item.word}
                                </div>
                                <div className="content">
                                    <span className="title">বাতির ধরণ: {item.typeOfLight}</span>
                                    <p className="message">বাতির সংখ্যা: {item.numberOfLights}</p>
                                    <p className="message">রাস্তার নাম: {item.roadName}</p>
                                </div>
                                <div className="actions">
                                    <a href={`tel:${item.phone}`} className="history flex justify-center items-center"><FaPhoneAlt /></a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ReportTable;
