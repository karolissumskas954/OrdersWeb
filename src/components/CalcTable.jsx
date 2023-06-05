import React, { useEffect, useState } from 'react'
import { prices } from "../constants"

const CalcTable = () => {

    function containsOnlyNumbers(str) {
        return /^([0-9]+)*([0-9]+)$/.test(str);
    }

    var rowPrice = [
        {
            id: 0,
            prix: 0
        },
        {
            id: 1,
            prix: 0
        },
        {
            id: 2,
            prix: 0
        },
        {
            id: 3,
            prix: 0
        },
        {
            id: 4,
            prix: 0
        },
        {
            id: 5,
            prix: 0
        },
    ];

    function sets(numberIndex, total) {
        const newPrices = data.map(price => {
            if (price.id == numberIndex) {
                if (price.prix == total) {
                    return price;
                } else {
                    return {
                        id: numberIndex,
                        prix: total
                    };
                }
            } else {
                return price;
            }
        })
        setData(newPrices);
    }
    const [data, setData] = useState(rowPrice);
    const [priceWithoutPVM, setPriceWithoutPVM] = useState(0)

    function totalSum() {
        var result = data.reduce((total, currentValue) => total = total + currentValue.prix, 0)
        setPriceWithoutPVM(result)
    }

    function tableRow(numberIndex) {

        function setDropdown(type) {
            setToggle((prev) => !prev);
            setType(type);
        }

        function calculateRowPrice() {
            setTotal(0)
            var num = 0
            if (type === prices[0].title) {
                var num = 0;
            }
            else if (type === prices[1].title) {
                var num = 1;
            }
            else if (type === prices[2].title) {
                var num = 2;
            }

            var percent = 0;
            var percent1 = 0;
            if (box1) {
                percent = 10;
                if (box2) {
                    percent1 = 30;
                } else if (box3) {
                    percent1 = 40;
                } else if (box4) {
                    percent1 = 100;
                }
            } else if (box2) {
                percent = 30;
            } else if (box3) {
                percent = 40;
            } else if (box4) {
                percent = 100;
            }

            Object.entries(prices[num].prices).map(([key, value]) => {
                if (percent > 0 && percent1 > 0) {
                    if (diameter == key && diameter > 11 && depth > 0) {
                        let temp = (value * Number(depth)) * amount;
                        let tempTotal = (temp + ((temp) / 100) * percent);
                        let tempPercent = (tempTotal + ((tempTotal) / 100) * percent1)
                        setTotal(tempPercent);
                        sets(numberIndex, tempPercent);
                    }
                } else if (percent > 0) {
                    if (diameter == key && diameter > 11 && depth > 0) {
                        let temp1 = (value * Number(depth)) * amount;
                        let tempTotal1 = (temp1 + ((temp1) / 100) * percent);
                        setTotal(tempTotal1);
                        sets(numberIndex, tempTotal1);
                    }
                } else if (percent == 0) {
                    if (diameter == key && diameter > 11 && depth > 0) {
                        let temp2 = (value * Number(depth)) * amount;
                        setTotal((value * Number(depth)) * amount)
                        sets(numberIndex, temp2);
                    }
                }
            })
        }

        function diameterCheck(diam) {
            setIsValidDiameter(false);
            var num = 1;
            if (type == prices[0].title) {
                num = 0;
            }
            Object.entries(prices[num].prices).map(([key, value]) => {
                if (diam == key) {
                    setIsValidDiameter(true);
                }
            })
        }
        function amountCheck(amou) {
            setIsValidAmount(false);
            if (containsOnlyNumbers(amou)) {
                setIsValidAmount(true);
            }
        }
        function depthCheck(dep) {
            setIsValidDepth(false);
            if (containsOnlyNumbers(dep)) {
                setIsValidDepth(true);
            }
        }
        const [amount, setAmount] = useState(1);
        const handleAmount = event => {
            setAmount(event.target.value);
            amountCheck(event.target.value);

        };
        const [diameter, setDiameter] = useState('');
        const handleDiameter = event => {
            diameterCheck(event.target.value)
            setDiameter(event.target.value);
        };
        const [depth, setDepth] = useState('');
        const handleDepth = event => {
            depthCheck(event.target.value);
            setDepth(event.target.value);

        };
        const [toggle, setToggle] = useState(false)
        const [toggleBox, setToggleBox] = useState(false)
        const [type, setType] = useState(prices[0].title)
        const [total, setTotal] = useState(0);
        const [isValidDiameter, setIsValidDiameter] = useState(true);
        const [isValidAmount, setIsValidAmount] = useState(true);
        const [isValidDepth, setIsValidDepth] = useState(true);

        const [box1, setBox1] = useState(false)
        const [box2, setBox2] = useState(false)
        const [box3, setBox3] = useState(false)
        const [box4, setBox4] = useState(false)

        useEffect(() => {
            calculateRowPrice();
            diameterCheck(diameter);
        }, [depth, diameter, amount, type, box1, box2, box3, box4])

        return (
            <tr
                className="border-b">
                <td className="max-w-[60px] min-w-[60px]">
                    <input type="text" placeholder="" onChange={handleAmount} value={amount} className={`whitespace-nowrap border-r font-poppins text-[14px] sm:text-[18px] px-2 py-1 sm:px-6 sm:py-2 w-full ${isValidAmount ? 'text-black' : 'text-red'}`} />
                </td>
                <td className="max-w-[60px] min-w-[60px]">
                    <input type="text" placeholder="" onChange={handleDiameter} value={diameter} className={`whitespace-nowrap border-r font-poppins text-[14px] sm:text-[18px] px-2 py-1 sm:px-6 sm:py-2 w-full ${isValidDiameter ? 'text-black' : 'text-red'} `} />
                </td>
                <td className="max-w-[290px] min-w-[290px]">
                    <button onClick={() => setToggle((prev) => !prev)} className="text-white bg-blue-700 hover:bg-blue-800 font-poppins rounded-lg text-[16px] px-4 py-2.5 text-center inline-flex items-center  w-full" type="button">{type}<svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
                    <div className={`${toggle ? 'flex' : 'hidden'} z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow min-w-[250px] `}>
                        <ul className="py-2 text-sm text-gray-700 " aria-labelledby="dropdownDefaultButton">
                            <li>
                                <a href="#" onClick={() => setDropdown(prices[0].title)} className="block px-4 py-2 font-poppins text-[16px] hover:bg-gray-200">{prices[0].title}</a>
                            </li>
                            <li>
                                <a href="#" onClick={() => setDropdown(prices[1].title)} className="block px-4 py-2 font-poppins text-[16px] hover:bg-gray-200">{prices[1].title}</a>
                            </li>
                            <li>
                                <a href="#" onClick={() => setDropdown(prices[2].title)} className="block px-4 py-2 font-poppins text-[16px] hover:bg-gray-200">{prices[2].title}</a>
                            </li>
                        </ul>
                    </div>
                </td>
                <td className="max-w-[80px] min-w-[80px]">
                    <input type="text" placeholder="" onChange={handleDepth} value={depth} className={`whitespace-nowrap border-r font-poppins text-[14px] sm:text-[18px] px-2 py-1 sm:px-6 sm:py-2 w-full ${isValidDepth ? 'text-black' : 'text-red'}`} />
                </td>
                <td className="max-w-[80px] min-w-[80px]">
                    <button onClick={() => setToggleBox((prev) => !prev)} className="text-white bg-blue-700 hover:bg-blue-800 font-poppins rounded-lg text-[16px] px-4 py-2.5 text-center inline-flex items-center w-full" type="button">Paslaugos<svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
                    <div className={`${toggleBox ? 'flex' : 'hidden'} z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow min-w-[90px]`}>
                        <ul className="p-3 space-y-3 text-sm text-gray-700" aria-labelledby="dropdownCheckboxButton">
                            <li>
                                <div className="flex items-center w-full">
                                    <input onClick={() => setBox1((prev) => !prev)} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 " />
                                    <label className="px-2 py-1 font-poppins text-[16px] ">Gręžimas virš 2 metrų horizontaliai</label>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center w-full">
                                    <input onClick={() => setBox2((prev) => !prev)} disabled={box3 || box4} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 " />
                                    <label className="px-2 py-1 font-poppins text-[16px]">Gręžimas su purvo nusiurbimu</label>
                                </div>
                            </li>
                            <li>
                                <div className={`flex items-center w-full ${type != prices[0].title ? 'hidden' : 'flex'}`}>
                                    <input onClick={() => setBox3((prev) => !prev)} disabled={box2} type="checkbox" value="" className={`w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 `} />
                                    <label className="px-2 py-1 font-poppins text-[16px] ">Plytų, mūro, tinko gręžimas sausai</label>
                                </div>
                            </li>
                            <li>
                                <div className={`flex items-center w-full ${type != prices[2].title ? 'hidden' : 'flex'} `}>
                                    <input onClick={() => setBox4((prev) => !prev)} disabled={box2} type="checkbox" value="" className={` w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 `} />
                                    <label className="px-2 py-1 font-poppins text-[16px] ">Monolito gręžimas sausai</label>
                                </div>
                            </li>
                        </ul>
                    </div>
                </td>
                <td className="max-w-[150px] min-w-[150px]">
                    <p className='whitespace-nowrap border-r font-poppins text-[14px] sm:text-[18px] px-2 py-1 sm:px-6 sm:py-2 w-full '>{total.toFixed(2)} €</p>
                </td>
            </tr>
        )
    }

    return (
        <div className="overflow-x-auto sm:-mx-6 mx-8 lg:-mx-8 items-center">

            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="">
                    <table className="min-w-full border text-left text-sm font-light bg-white ">
                        <thead className="border-b">
                            <tr
                                className="border-b">
                                <td className="whitespace-nowrap border-r font-poppins text-[14px] sm:text-[18px] px-2 py-1 sm:px-6 sm:py-2">Kiekis</td>
                                <td className="whitespace-nowrap border-r font-poppins text-[14px] sm:text-[18px] px-2 py-1 sm:px-6 sm:py-2">Diametras(ø)</td>
                                <td className="whitespace-nowrap border-r font-poppins text-[14px] sm:text-[18px] px-2 py-1 sm:px-6 sm:py-2">Tipas</td>
                                <td className="whitespace-nowrap border-r font-poppins text-[14px] sm:text-[18px] px-2 py-1 sm:px-6 sm:py-2">Gylis(cm)</td>
                                <td className="whitespace-nowrap border-r font-poppins text-[14px] sm:text-[18px] px-2 py-1 sm:px-6 sm:py-2">Papildomos paslaugos</td>
                                <td className="whitespace-nowrap border-r font-poppins text-[14px] sm:text-[18px] px-2 py-1 sm:px-6 sm:py-2">Suma</td>
                            </tr>
                        </thead>
                        <tbody className="border-b">
                            {tableRow(0)}
                            {tableRow(1)}
                            {tableRow(2)}
                            {tableRow(3)}
                            {tableRow(4)}
                            {tableRow(5)}
                        </tbody>
                    </table>
                    <div className='my-8  flex justify-end w-full'>
                        <div className=' justify-start w-full'>
                            <h3 className="mb-4 font-poppins text-black text-[20px]">Papildomos paslaugos:</h3>
                            <ul className="w-[70%] font-poppins text-black bg-white border border-gray-200 rounded-lg ">
                                <li className="w-full border-b border-gray-200 rounded-t-lg ">
                                    <div className="flex items-center pl-3 w-full">
                                        <label className="w-[70%] py-3 ml-2 text-[18px] font-poppins text-black">Gręžimas virš 2 metrų horizontaliai</label>
                                        <label className="w-[30%] py-3 ml-2 text-[18px] font-poppins text-white bg-black rounded-lg text-center">+10% Sumos</label>
                                    </div>
                                </li>
                                <li className="w-full border-b border-gray-200 rounded-t-lg ">
                                    <div className="flex items-center pl-3 w-full">
                                        <label className="w-[70%] py-3 ml-2 text-[18px] font-poppins text-black">Gręžimas su purvo nusiurbimu</label>
                                        <label className="w-[30%] py-3 ml-2 text-[18px] font-poppins text-white bg-black rounded-lg text-center">+30% Sumos</label>
                                    </div>
                                </li>
                                <li className="w-full border-b border-gray-200 rounded-t-lg ">
                                    <div className="flex items-center pl-3 w-full">
                                        <label className="w-[70%] py-3 ml-2 text-[18px] font-poppins text-black">Plytų, mūro, tinko gręžimas sausai</label>
                                        <label className="w-[30%] py-3 ml-2 text-[18px] font-poppins text-white bg-black rounded-lg text-center">+40% Sumos</label>
                                    </div>
                                </li>
                                <li className="w-full border-b border-gray-200 rounded-t-lg ">
                                    <div className="flex items-center pl-3 w-full">
                                        <label className="w-[70%] py-3 ml-2 text-[18px] font-poppins text-black">Monolito gręžimas sausai</label>
                                        <label className="w-[30%] py-3 ml-2 text-[18px] font-poppins text-white bg-black rounded-lg text-center">+100% Sumos</label>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className='justify-end w-[45%]'>
                            <button onClick={() => totalSum()} className="text-white bg-blue-700 hover:bg-blue-800 font-poppins rounded-lg px-4 py-2.5 text-center inline-flex items-center text-[18px] mb-10 mt-1" type='button'>Skaičiuoti</button>
                            <p className='text-black font-poppins text-[20px]'>Suma be PVM: {priceWithoutPVM.toFixed(2)} €</p>
                            <p className='text-black font-poppins text-[20px]'>Suma su PVM: {(priceWithoutPVM + ((priceWithoutPVM) / 100) * 21).toFixed(2)} €</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default CalcTable