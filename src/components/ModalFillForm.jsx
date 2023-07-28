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
        <div className='bg-white mt-12'>
            {/* <div className="flex justify-center items-center mb-12">
                <h1>Kliento informacija</h1>
            </div> */}
            {/* <p>Hello</p> */}
            {/* <input type="text" placeholder="Vardas Pavardė" onChange={handleName} value={name} className={`border-2 p-2  rounded-md w-[70%]`} /> */}
            <form className='bg-white'>

                <div className="grid md:grid-cols-2 md:gap-6 ">
                    <div className="relative z-0 w-full mb-2 flex justify-end">
                        <div className='flex form-control w-[80%] items-end'>
                            <label className="label w-[60%]">
                                <span className="label-text">Vardas Pavardė</span>
                            </label>
                            <input type="text" placeholder='Vardas Pavardė' className=" py-2.5 px-2 w-[60%] text-sm text-gray-900  border border-gray-300  rounded-md  focus:ring-0 " />
                        </div>
                    </div>
                    <div className="relative z-0 w-full mb-2 mx-3">
                        <div className='flex form-control w-[80%] '>
                            <label className="label w-[60%]">
                                <span className="label-text">El. Paštas</span>
                            </label>
                            <input type="text" placeholder='El. Paštas' className=" py-2.5 px-2 w-[60%] text-sm text-gray-900  border border-gray-300  rounded-md  focus:ring-0 " />
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-2 flex justify-end">
                        <div className='flex form-control w-[80%] items-end'>
                            <label className="label w-[60%]">
                                <span className="label-text">Tel. Nr</span>
                            </label>
                            <input type="text" placeholder='+123 456 789 12' className=" py-2.5 px-2 w-[60%] text-sm text-gray-900  border border-gray-300  rounded-md  focus:ring-0 " />
                        </div>
                    </div>
                    <div className="relative z-0 w-full mb-2 mx-3">
                        <div className='flex form-control w-[80%] '>
                            <label className="label w-[60%]">
                                <span className="label-text">Adresas</span>
                            </label>
                            <input type="text" placeholder='Adresas' className=" py-2.5 px-2 w-[60%] text-sm text-gray-900  border border-gray-300  rounded-md  focus:ring-0 " />
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className=" w-full z-auto mb-2 flex justify-end">
                        <div className='flex form-control w-[80%] items-end'>
                            <label className="label w-[60%]">
                                <span className="label-text">Data</span>
                            </label>
                            <div className="w-[60%]">
                            <DatePicker
                                dateFormat="yyyy-MM-d"
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                className="border border-gray-300 py-2.5 px-2 rounded-md text-sm"
                            />
                            </div>
                        </div>
                    </div>
                    <div className="relative z-0 w-full mb-2 mx-3">
                        {/* <input type="text" placeholder='El.Pastas' className=" py-2.5 px-2 w-[60%] text-sm text-gray-900  border border-gray-300  rounded-md  focus:ring-0 " /> */}
                    </div>
                </div>
            </form>



        </div>
    )






}

export default ModalFillForm

