import { getQuestionData, deleteQuestionItem } from "../../firebase";
import React, { useEffect, useState } from 'react';
import { adminMessagesDropdown } from "../constants";

const AdminMessages = () => {
    const [toggle, setToggle] = useState(false)
    const [type, setType] = useState(adminMessagesDropdown[0].title)
    function setDropdown(type) {
        setToggle((prev) => !prev);
        setType(type);
    }

    const [data, setData] = useState([]);
    useEffect(() => {
        getQuestionData()
            .then((responseData) => {
                setData(responseData);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [toggle]);

    const MessageRow = ({ item }) => {
        const [isChecked, setIsChecked] = useState(item.status)
        const handleCheckboxChange = () => {
            deleteQuestionItem(item.key,item.username,item.email,item.question, !isChecked, item.date)
            setIsChecked(!isChecked)
        }
        return (
            <tr className={`border border-gray-300 text-center  ${isChecked ? 'bg-shark-50' : ''}`}>

                <th className="w-1/12">
                    <label>
                        <input type="checkbox" onChange={handleCheckboxChange} checked={isChecked} className="checkbox border-2 border-white1-400" />
                    </label>
                </th>
                <th className="w-1/12 "></th>
                <td className="w-1/12">
                    <div className={`flex items-center space-x-3 ${isChecked ? 'opacity-50' : ''}`}>
                        <div className="items-center w-full">
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
                </th>
            </tr>
        )
    }
    return (
        <div className="h-[45px] m-4 rounded-xl mx-10">
            <h1 className="text-2xl font-semibold font-poppins text-center my-1 mt-10 text-black">Pranešimai</h1>
            <div className="w-[140px] flex flex-row">
                <div>
                    <button onClick={() => setToggle((prev) => !prev)} className="min-w-[140px] text-white bg-greyDarker hover:bg-gradient-to-r from-blue1-800 to-blue1-600 font-poppins rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center w-full" type="button">
                        {type}
                        <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div className={`${toggle ? 'flex' : 'hidden'} z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow `}>
                        <ul className="py-2 text-sm text-gray-700 " aria-labelledby="dropdownDefaultButton">
                            {adminMessagesDropdown.map((message, index) => (
                                <li key={index}>
                                    <a onClick={() => setDropdown(message.title)} className="block text-black px-4 py-2 font-poppins text-sm hover:bg-gray-300">
                                        {message.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="h-full w-full mt-5 rounded  ">
                <div className="overflow-x-auto border-2 border-black rounded-xl shadow-2xl">
                    <table className="table w-full border-collapse border">
                        <thead>
                            <tr className="bg-blue1-700 text-white text-[16px] border border-black text-center">
                                <th className="w-1/12 "></th>
                                <th className="w-1/12"></th>
                                <th className="w-1/12 ">Informacija</th>
                                <th className="w-6/12">Pranešimas</th>
                                <th className="w-2/12">Statusas</th>
                                <th className="w-2/12"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => {
                                if (type == adminMessagesDropdown[0].title) {
                                    return (
                                        <MessageRow key={index} item={item} />
                                    )
                                }
                                if (type == adminMessagesDropdown[1].title) {
                                    if (item.status == true) {
                                        return (
                                            <MessageRow key={index} item={item} />
                                        )
                                    }
                                }
                                if (type == adminMessagesDropdown[2].title) {
                                    if (item.status == false) {
                                        return (
                                            <MessageRow key={index} item={item} />
                                        )
                                    }
                                }
                            }
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AdminMessages
