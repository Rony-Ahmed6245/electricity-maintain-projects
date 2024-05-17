import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ViewMaintain = () => {
    const [works, setWork] = useState([]);

    useEffect(() => {
        fetch("https://electricity-server.vercel.app/v1/workData")
            .then((res) => res.json())
            .then((data) => {
                setWork(data);
            });
    }, []);

    const handleDelete = async (accountId) => {
        try {
            const response = await fetch(`https://electricity-server.vercel.app/v1/workData/${accountId}`, {
                method: 'DELETE',
            });
    
            if (response.ok) {
                setWork((prevWorks) => prevWorks.filter((work) => work._id !== accountId));
                console.log("Deleted!");
            } else {
                console.error(`Error deleting account with ID: ${accountId}`);
            }
        } catch (error) {
            console.error('Error deleting account:', error);
        }
    };

    const handelRequestMealUser = (word, formattedDate, typeOfLight, numberOfLights, roadName, accountId) => {
        const formData = {
            word,
            formattedDate,
            typeOfLight,
            numberOfLights,
            roadName,
        };

        fetch("https://electricity-server.vercel.app/v1/allMaintainData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error('Network response was not ok.');
            }
        })
        .then((data) => {
            console.log(data);
            Swal.fire({
                title: "Success",
                text: "successfully transfer",
                icon: "success"
            });
            // After posting data, trigger the delete operation
            handleDelete(accountId);
        })
        .catch((error) => {
            console.error('Error requesting meal:', error);
            Swal.fire({
                title: "Error",
                text: "Error requesting meal.",
                icon: "error"
            });
        });
    };

    return (
        <div>
            <div className='max-w-5xl bg-[#2A3A99] min-h-screen   mx-auto px-2 pt-14'>
                <div className="overflow-x-auto  text-white">
                    <table className="table mb-20">
                        <thead>
                            <tr className="text-white border  text-center font-extrabold">
                                <th>নং</th>
                                <th>ওয়ার্ড নং</th>
                                <th>তারিখ</th>
                                <th>বাতির ধরন</th>
                                <th>বাতির সংখ্যা</th>
                                <th>রাস্তার নাম</th>
                                <th>কাজ</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            {works?.map((item, idx) => (
                                <tr className='text-center font-mono border' key={item._id}>
                                    <th className={'border ' }>
                                        {idx + 1}
                                    </th>
                                    <td className={'border  ' }>
                                        {item.word}
                                    </td>
                                    <td className={'border min-w-[170px] ' }>
                                        {item.formattedDate}
                                    </td>
                                    <td className={'border min-w-[170px] ' }>
                                        {item.typeOfLight}
                                    </td>
                                    <td className={'border  ' }>
                                        {item.numberOfLights}
                                    </td>
                                    <td className={'border min-w-[170px] ' }>
                                        {item.roadName}
                                    </td>
                                    <td className="border min-w-[170px] bg-green-700 text-white">
                                        <div
                                            onClick={() => {
                                                handelRequestMealUser(item.word, item.formattedDate, item.typeOfLight, item.numberOfLights, item.roadName, item._id);
                                            }}
                                            className='flex justify-center items-center'>
                                            মেরামত করা শেষ
                                        </div>
                                    </td>
                                 
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ViewMaintain;
