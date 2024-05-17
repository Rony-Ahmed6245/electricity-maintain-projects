import Swal from "sweetalert2";


const ReportBox = () => {


    const handleSubmitted = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const word = formData.get('word');
        const typeOfLight = formData.get('typeOfLight');
        const phone = formData.get('phone');
        const numberOfLights = formData.get('numberOfLights');
        const roadName = formData.get('roadName');

        // Get current date and format it
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString();

        const reportData = { word, phone, typeOfLight, numberOfLights, roadName, formattedDate };
        // console.log(reportData);

        fetch("https://electricity-server.vercel.app/v1/reportData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(reportData),
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                Swal.fire("আপনার অভিযোগটি গ্রহন করা হলো, প্রয়োজনে আপনাকে ফোন করা হবে ! ধন্যবাদ");
            });

        e.target.reset();
    };

    return (
        <>
         <div className='w-full text-black bg-white  h-[40px] fixed top-0 z-10 text-center p-2 text-xl'>
            <marquee  direction="">আপনার এলাকার কোথাও কোন বিদ্যুৎ বাতি, নরমাল বাতি বা সোলার বাতি নষ্ট হলে দ্রুত অভিযোগ করুন ।</marquee>
         </div>
         <div className="bg-[#2A3A99] min-h-screen">
            
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div
                    className="relative px-2 py-10   mx-4 mb-12 md:mx-0  rounded-3xl "
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
                                    <option value="0১">০১</option>
                                    <option value="0২">০২</option>
                                    <option value="0৩">০৩</option>
                                    <option value="0৪">০৪</option>
                                    <option value="0৫">০৫</option>
                                    <option value="0৬">০৬</option>
                                    <option value="0৭">০৭</option>
                                    <option value="0৮">০৮</option>
                                    <option value="0৯">০৯</option>
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
                                    <option value="সোলার বাতি">সোলার বাতি</option>
                                    <option value="নরমাল বাতি">নরমাল বাতি</option>
                                    <option value="ডিজিটাল বিদ্যুৎ বাতি">ডিজিটাল বিদ্যুৎ বাতি</option>
                                    {/* Add more options */}
                                </select>
                            </div>
                        </div>
                        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label
                                    className="font-semibold text-sm text-white pb-1 block">বাতির সংখ্যা</label>
                                <select
                                    className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                    name="numberOfLights"
                                >
                                    <option value="০১">০১</option>
                                    <option value="০২">০২</option>
                                    <option value="০৩">০৩</option>
                                    <option value="০৪">০৪</option>
                                    <option value="০৫">০৫</option>
                                    <option value="০৬">০৬</option>
                                    <option value="০৭">০৭</option>
                                    <option value="০৮">০৮</option>
                                    <option value="০৯">০৯</option>
                                    <option value="১০">১০</option>
                                    {/* Add more options */}
                                </select>
                            </div>
                            <div>
                                <label
                                    className="font-semibold text-sm text-white pb-1 block">ফোন নম্বর</label>
                                <input required placeholder="+880 1700 000 000" name="phone" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500" type="number" />
                            </div>

                        </div>
                        <label className="font-semibold text-sm text-white pb-1 block">রাস্তার নাম </label>
                        <textarea
                            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                            type="text"
                            name="roadName"
                            required
                        />
                        <button type="submit" className="w-full text-center border rounded bg-blue-200 py-2 my-2 text-black">অভিযোগ করুন</button>
                    </form>
                </div>
            </div>
        </div>
        </>
       
    );
};

export default ReportBox;