import { getQuestionData } from "../../firebase";
import React, { useEffect, useState } from 'react';

const AdminMessages = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        getQuestionData()
            .then((responseData) => {
                setData(responseData);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const MessageRow = ({ item }) => {
        const [isChecked, setIsChecked] = useState(item.status)
        const handleCheckboxChange = () => {
            setIsChecked(!isChecked)
        }
        return (
            <tr className={`border border-gray-300 text-center ${isChecked ? 'bg-shark-50' : ''}`}>
                <th className="w-1/12 ">
                </th>
                <td className="w-1/12">
                    <div className={`flex items-center space-x-3 ${isChecked ? 'opacity-50' : ''}`}>
                        <div>
                            <div className="font-bold text-black">{item.username}</div>
                            <div className="text-sm font-medium  text-gray-600">{item.email}</div>
                        </div>
                    </div>
                </td>
                <td className={`w-4/12 text-black ${isChecked ? 'opacity-50' : ''}`}>
                    {item.question}
                    <br />
                </td>
                <td className="w-1/12 text-black">
                    {isChecked == false ?
                        <span className="bg-valencia-100 text-red text-sm font-medium px-2.5 py-0.5 rounded ">Neatsakytas</span>
                        :
                        <span className="bg-salem-100 text-salem-800 text-sm font-medium px-2.5 py-0.5 rounded ">Atsakytas</span>
                    }
                </td>
                <th className="w-1/12">
                    <label>
                        <input type="checkbox" onClick={handleCheckboxChange} checked={isChecked} className="checkbox border-2 border-white1-400" />
                    </label>
                </th>
                <th className="w-1/12">
                </th>
            </tr>
        )
    }
    return (
        <div className="h-[45px] m-4 rounded-xl mx-10">
            <h1 className="text-2xl font-semibold font-poppins text-center my-1 mt-10 text-black">Pranešimai</h1>
            <div className="h-full w-full mt-10 rounded  ">
                <div className="overflow-x-auto border-2 border-black rounded-xl shadow-2xl">
                    <table className="table w-full border-collapse border">
                        <thead>
                            <tr className="bg-blue1-700 text-white text-sm border border-black text-center">
                                <th className="w-1/12 "></th>
                                <th className="w-1/12 ">Informacija</th>
                                <th className="w-6/12">Pranešimas</th>
                                <th className="w-2/12">Statusas</th>
                                <th className="w-1/12"></th>
                                <th className="w-2/12"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <MessageRow key={index} item={item} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AdminMessages
