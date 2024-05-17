import { useEffect, useState } from "react";
import { FiDelete } from "react-icons/fi";
import Swal from "sweetalert2";
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const AllLLamp = () => {
    const [works, setWorks] = useState([]);
    const [filterWord, setFilterWord] = useState("");
    const [filterNumber, setFilterNumber] = useState("");

    useEffect(() => {
        fetch("https://electricity-server.vercel.app/v1/maintainData")
            .then((res) => res.json())
            .then((data) => {
                setWorks(data);
            });
    }, []);

    const handleDelete = async (accountId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Cell Delete",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete Cell!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await fetch(`https://electricity-server.vercel.app/v1/maintainData/${accountId}`, {
                        method: 'DELETE',
                    });

                    if (response.ok) {
                        setWorks(prevWorks => prevWorks.filter(work => work._id !== accountId));
                        Swal.fire({
                            title: "Deleted!",
                            text: "Cell has been deleted.",
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

    const filteredWorks = works.filter(item => {
        const wordCondition = filterWord === "" || item.word.toLowerCase().includes(filterWord.toLowerCase());
        const numberCondition = filterNumber === "" || item.numberOfLights.toString().includes(filterNumber);
        return wordCondition && numberCondition;
    });

    const totalLights = filteredWorks.reduce((total, item) => {
        const lights = parseInt(item.numberOfLights);
        if (!isNaN(lights)) {
            return total + lights;
        }
        return total;
    }, 0);


    const styles = StyleSheet.create({
        page: {
            padding: 10
        },
        table: {
            display: "table",
            width: "auto",
            borderStyle: "solid",
            borderWidth: 1,
            borderRightWidth: 0,
            borderBottomWidth: 0
        },
        tableRow: {
            flexDirection: "row"
        },
        tableHeader: {
            width: "16.66%",
            borderStyle: "solid",
            borderBottomWidth: 1,
            borderRightWidth: 1,
            padding: 3,
            textAlign: "center",
            fontWeight: "bold",
            backgroundColor: 'blue',
            color: 'white'
        },
        tableCol: {
            width: "16.66%",
            borderStyle: "solid",
            borderBottomWidth: 1,
            borderRightWidth: 1,
            padding: 5,
            textAlign: "center",

        },
        totalLights: {
            marginTop: 10,

        }
    });

    const generatePDF = () => (
        <Document>
            <Page size="A4">
                <View style={styles.page}>
                <Text>All Light List</Text>
                    <View style={styles.table}>
                   
                        <View style={styles.tableRow}>
                            <Text style={styles.tableHeader}>No</Text>
                            <Text style={styles.tableHeader}>Word </Text>
                            <Text style={styles.tableHeader}>Date</Text>
                            <Text style={styles.tableHeader}>Type</Text>
                            <Text style={styles.tableHeader}>Piece</Text>
                            <Text style={styles.tableHeader}>Road </Text>
                        </View>
                        {filteredWorks.map((item, idx) => (
                            <View style={styles.tableRow} key={item._id}>
                                <Text style={styles.tableCol}>{idx + 1}</Text>
                                <Text style={styles.tableCol}>{item.word}</Text>
                                <Text style={styles.tableCol}>{item.formattedDate}</Text>
                                <Text style={styles.tableCol}>{item.typeOfLight}</Text>
                                <Text style={styles.tableCol}>{item.numberOfLights}</Text>
                                <Text style={styles.tableCol}>{item.roadName}</Text>
                            </View>
                        ))}
                        <View style={styles.tableRow}>
                            <Text style={styles.tableCol}></Text>
                            <Text style={styles.tableCol}></Text>
                            <Text style={styles.tableCol}></Text>
                            <Text style={styles.tableCol}></Text>
                            <Text style={styles.tableCol}>Total:{totalLights} </Text>
                            <Text style={styles.tableCol}></Text>
                        </View>
                    </View>

                </View>
            </Page>
        </Document>
    );

    return (
        <div className='max-w-5xl bg-[#2A3A99] min-h-screen mx-auto px-2 pt-14'>
            <div className="grid grid-cols-2 gap-4 justify-center items-center my-4">
                <div>

                    <select
                        className="border rounded-lg px-3 text-black py-2   text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                        name="word"
                        value={filterWord}
                        onChange={(e) => setFilterWord(e.target.value)}
                    >
                        <option value="">মোট</option>
                        <option value="1">০১</option>
                        <option value="2">০২</option>
                        <option value="3">০৩</option>
                        <option value="4">০৪</option>
                        <option value="5">০৫</option>
                        <option value="6">০৬</option>
                        <option value="7">০৭</option>
                        <option value="8">০৮</option>
                        <option value="9">০৯</option>
                        {/* Add more options */}
                    </select>
                </div>
                <div className="text-center  rounded py-2 bg-white  ">
                    <PDFDownloadLink document={generatePDF()} fileName="table_data.pdf">PDF
                        {({  loading }) => (loading ? 'Loading document...' : 'Download PDF')}
                    </PDFDownloadLink>
                </div>
            </div>



            <div className="overflow-x-auto text-white">

                <table className="table mb-20">
                    <thead>
                        <tr className="text-white border text-center font-extrabold">
                            <th>নং</th>
                            <th>ওয়ার্ড নং</th>
                            <th>তারিখ</th>
                            <th>বাতির ধরন</th>
                            <th>বাতির সংখ্যা</th>
                            <th>রাস্তার নাম</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredWorks.map((item, idx) => (
                            <tr className='text-center font-mono border' key={item._id}>
                                <td className={'border '}>
                                    {idx + 1}
                                </td>
                                <td className={'border '}>
                                    {item.word}
                                </td>
                                <td className={'border min-w-[170px] '}>
                                    {item.formattedDate}
                                </td>
                                <td className={'border min-w-[170px] '}>
                                    {item.typeOfLight}
                                </td>
                                <td className={'border '}>
                                    {item.numberOfLights}
                                </td>
                                <td className={'border min-w-[170px] '}>
                                    {item.roadName}
                                </td>
                                <td className="border bg-red-600 text-black">
                                    <div
                                        onClick={() => handleDelete(item._id)}
                                        className='flex justify-center items-center'>
                                        <FiDelete />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr className="text-white border text-center font-extrabold">
                            <th className=""></th>
                            <th className=""></th>
                            <th className=""></th>
                            <th className=""></th>
                            <th className="">মোট:-{totalLights} টি</th>
                            <th className=""></th>
                            <th className=""></th>
                        </tr>
                    </tfoot>
                </table>
            </div>

            {/* PDF Download Link */}

        </div>
    );
};

export default AllLLamp;
