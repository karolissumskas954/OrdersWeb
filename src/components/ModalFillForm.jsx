import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { debounce } from 'lodash';

function emailCheck(str) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi.test(str);
}

function phoneChech(str) {
    return /^(\+\d+|\d+)$/.test(str)
}

const ModalFillForm = ({ childToParent }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('');

    const [isValidName, setIsValidName] = useState(true);
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidPhone, setIsValidPhone] = useState(true);
    const [isValidAddress, setIsValidAddress] = useState(true);


    const handleName = event => {
        setName(event.target.value);
        setIsValidName(false);
    };
    const handleEmail = event => {
        setEmail(event.target.value);
        setIsValidEmail(false);
    };
    const handlePhone = event => {
        setPhone(event.target.value);
        setIsValidPhone(false);
    };
    const handleAddress = event => {
        setAddress(event.target.value);
        setIsValidAddress(false);
    };

    const validateName = (name) => {
        setIsValidName(name === '');
    };

    const validateEmail = (email) => {
        setIsValidEmail(!emailCheck(email));
    };

    const validatePhone = (phone) => {
        setIsValidPhone(!phoneChech(phone));
    };

    const validateAddress = (address) => {
        setIsValidAddress(address === '');
    };

    const validateForm = () => {
        validateName(name);
        validateEmail(email);
        validatePhone(phone);
        validateAddress(address);
        handleSubmit()
    };


    const debouncedValidationHandler = debounce(validateForm, 500);

    const handleSubmit = () => {
        if (!isValidName && !isValidEmail && !isValidPhone && !isValidAddress) {
            childToParent(true);
        } else {
            childToParent(false);
        }
    }
    useEffect(() => {
        debouncedValidationHandler();
    }, [name, email, phone, address])

    return (
        <div className='bg-white mt-10 flex items-center flex-col'>
            <form className='bg-white1-50 w-[70%] rounded-xl shadow-xl mb-5'>
                <div className="flex w-full ml-10 mt-3">
                    <div className="mb-2 w-full flex-1/2 mx-3">
                        <div className='flex form-control'>
                            <label className="label w-[100%]">
                                <span className="label-text">Vardas Pavardė</span>
                            </label>
                            <input type="text" placeholder='Vardas Pavardė' onChange={handleName} value={name} className={`w-[80%] py-2.5 px-2 text-sm text-gray-900  border rounded-md  focus:ring-0 ${isValidName ? ' border-red' : 'border-gray-300'} ${isValidName ? ' placeholder-red' : 'placeholder-gray-400'}`} />
                        </div>
                    </div>
                    <div className="w-full mb-2 mx-3 flex-1/2">
                        <div className='flex form-control'>
                            <label className="label w-[100%]">
                                <span className="label-text">El. Paštas</span>
                            </label>
                            <input type="text" placeholder='El. Paštas' onChange={handleEmail} value={email} className={`w-[80%] py-2.5 px-2 text-sm text-gray-900  border rounded-md  focus:ring-0  ${isValidEmail ? ' border-red' : 'border-gray-300'} ${isValidEmail ? ' placeholder-red' : 'placeholder-gray-400'}`} />
                        </div>
                    </div>
                </div>
                <div className="flex w-full ml-10">
                    <div className="w-full mb-2 mx-3 flex-1/2 ">
                        <div className='flex form-control'>
                            <label className="label w-[100%]">
                                <span className="label-text">Tel. Nr</span>
                            </label>
                            <input type="text" placeholder='+123 456 789 12' onChange={handlePhone} value={phone} className={`w-[80%] py-2.5 px-2 text-sm text-gray-900  border   rounded-md  focus:ring-0  ${isValidPhone ? ' border-red' : 'border-gray-300'} ${isValidPhone ? ' placeholder-red' : 'placeholder-gray-400'}`} />
                        </div>
                    </div>
                    <div className="w-full mb-2 mx-3 flex-1/2">
                        <div className='flex form-control'>
                            <label className="label w-[100%]">
                                <span className="label-text">Adresas</span>
                            </label>
                            <input type="text" placeholder='Adresas' onChange={handleAddress} value={address} className={`w-[80%] py-2.5 px-2 text-sm text-gray-900  border   rounded-md  focus:ring-0  ${isValidAddress ? ' border-red' : 'border-gray-300'} ${isValidAddress ? ' placeholder-red' : 'placeholder-gray-400'}`} />
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

