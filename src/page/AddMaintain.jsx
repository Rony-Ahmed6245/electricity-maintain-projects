import Swal from "sweetalert2";


const AddMaintain = () => {

    const handleSubmitted = (e) => {

        e.preventDefault();

        const formData = new FormData(e.target);
        const word = formData.get('word');
        const typeOfLight = formData.get('typeOfLight');
        const lightStatus = formData.get('lightStatus');
        const numberOfLights = formData.get('numberOfLights');
        const roadName = formData.get('roadName');
        const currentDate = new Date();
        // Format the date as needed (e.g., YYYY-MM-DD)
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

      
        
        const day = currentDate.getDate();
        const monthIndex = currentDate.getMonth();
        const year = currentDate.getFullYear() % 100; // Get last two digits of the year
        
        const monthName = months[monthIndex].slice(0, 3); // Take the first three letters of the month name
        
        const formattedDate = `${day < 10 ? '0' : ''}${day}-${monthName}-${year}`;

        const fromData = { word, typeOfLight, lightStatus, numberOfLights, roadName, formattedDate }
        //    console.log(fromData);
        fetch("https://electricity-server.vercel.app/v1/workingData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(fromData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                Swal.fire("Successfully Added");
            });
        e.target.reset();
    };

    return (
        <div className="bg-[#2A3A99]">

            <div className="relative  min-h-screen    sm:max-w-xl sm:mx-auto">

                <div
                    className="relative px-4 py-20 mx-2  md:mx-0 rounded-3xl sm:p"
                >
                    <form onSubmit={handleSubmitted} className="max-w-md mx-auto">
                        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">

                            <div>
                                <label
                                    className="font-semibold text-sm text-white pb-1 block">ওয়ার্ড নং</label>
                                <select
                                    className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                    name="word"

                                >
                                    <option value="01">০১</option>
                                    <option value="02">০২</option>
                                    <option value="03">০৩</option>
                                    <option value="04">০৪</option>
                                    <option value="05">০৫</option>
                                    <option value="06">০৬</option>
                                    <option value="07">০৭</option>
                                    <option value="08">০৮</option>
                                    <option value="09">০৯</option>
                                    {/* Add more options */}
                                </select>
                            </div>

                            <div>
                                <label
                                    className="font-semibold text-sm text-white pb-1 block"> বাতির ধরণ </label>
                                <select
                                    className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                    name="typeOfLight"
                                >
                                    <option value="Solar Lamp">সোলার বাতি</option>
                                    <option value="Normal Lamp">নরমাল বাতি</option>
                                    <option value="Digital Lamp">ডিজিটাল বিদ্যুৎ বাতি</option>
                                    {/* Add more options */}
                                </select>
                            </div>
                        </div>
                        <div>
                            <label
                                className="font-semibold text-sm text-white pb-1 block">বাতির সংখ্যা</label>
                            <select
                                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                name="numberOfLights"
                            >
                                <option value="1">০১</option>
                                <option value="2">০২</option>
                                <option value="3">০৩</option>
                                <option value="4">০৪</option>
                                <option value="5">০৫</option>
                                <option value="6">০৬</option>
                                <option value="7">০৭</option>
                                <option value="8">০৮</option>
                                <option value="9">০৯</option>
                                <option value="10">১০</option>
                                {/* Add more options */}
                            </select>
                        </div>
                        <div>
                            <label className="font-semibold text-sm text-white  pb-1 block">রাস্তার নাম </label>
                            <textarea
                                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                type="text"
                                name="roadName"
                                required
                            />
                        </div>
                        <button type="submit" className="w-full text-center border rounded bg-blue-200 py-2 text-black">যোগ করুন</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddMaintain;
