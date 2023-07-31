import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ModalFillForm = ({ childToParent }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [name, setName] = useState('')
    const handleName = event => {
        setName(event.target.value);
        childToParent(event.target.value)
    };
    return (
        <div className='bg-white mt-10 flex items-center flex-col'>
            <form className='bg-white1-50 w-[70%] rounded-xl shadow-xl mb-5'>
                <div className="flex w-full ml-10 mt-3">
                    <div className="mb-2 w-full flex-1/2 mx-3">
                        <div className='flex form-control'>
                            <label className="label w-[100%]">
                                <span className="label-text">Vardas Pavardė</span>
                            </label>
                            <input type="text" placeholder='Vardas Pavardė' className="w-[80%] py-2.5 px-2 text-sm text-gray-900  border border-gray-300  rounded-md  focus:ring-0 " />
                        </div>
                    </div>
                    <div className="w-full mb-2 mx-3 flex-1/2">
                        <div className='flex form-control'>
                            <label className="label w-[100%]">
                                <span className="label-text">El. Paštas</span>
                            </label>
                            <input type="text" placeholder='El. Paštas' className="w-[80%] py-2.5 px-2 text-sm text-gray-900  border border-gray-300  rounded-md  focus:ring-0 " />
                        </div>
                    </div>
                </div>
                <div className="flex w-full ml-10">
                    <div className="w-full mb-2 mx-3 flex-1/2 ">
                        <div className='flex form-control'>
                            <label className="label w-[100%]">
                                <span className="label-text">Tel. Nr</span>
                            </label>
                            <input type="text" placeholder='+123 456 789 12' className="w-[80%] py-2.5 px-2 text-sm text-gray-900  border border-gray-300  rounded-md  focus:ring-0 " />
                        </div>
                    </div>
                    <div className="w-full mb-2 mx-3 flex-1/2">
                        <div className='flex form-control'>
                            <label className="label w-[100%]">
                                <span className="label-text">Adresas</span>
                            </label>
                            <input type="text" placeholder='Adresas' className="w-[80%] py-2.5 px-2 text-sm text-gray-900  border border-gray-300  rounded-md  focus:ring-0 " />
                        </div>
                    </div>
                </div>
                <div className="flex w-full ml-10 mb-3">
                    <div className="w-full mb-2 mx-3 flex-1/2">
                        <div className='flex form-control'>
                            <label className="label w-[100%]">
                                <span className="label-text">Data</span>
                            </label>
                            <DatePicker
                                dateFormat="yyyy-MM-d"
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                className="border border-gray-300 py-2.5 px-2 rounded-md text-sm w-[80%]"
                            />
                        </div>
                    </div>
                    <div className="w-full mb-2 mx-3 flex-1/2">
                        <div className='flex form-control'>
                        </div>
                    </div>
                </div>
            </form>



        </div>
    )






}

export default ModalFillForm

