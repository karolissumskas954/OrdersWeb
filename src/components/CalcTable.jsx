import React, { useEffect, useState, useRef, Fragment } from 'react'
import { prices } from "../constants"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Dialog, Transition } from '@headlessui/react'

const CalcTable = () => {

    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        totalSum()
        setIsOpen(true)
    }

    const handleOpen = () => {
        toast.success('Užsakymas pateiktas!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark", //colored
        });
    }
    function containsOnlyNumbers(str) {
        return /^([0-9]+)*([0-9]+)$/.test(str);
    }
    var rowPrice = [
        {
            id: 0,
            totalPrice: 0,
            diameter: 0,
            depth: 0,
            amount: 0,
            service1: 0,
            service2: 0,
            type: 0
        },
        {
            id: 1,
            totalPrice: 0,
            diameter: 0,
            depth: 0,
            amount: 0,
            service1: 0,
            service2: 0,
            type: 0
        },
        {
            id: 2,
            totalPrice: 0,
            diameter: 0,
            depth: 0,
            amount: 0,
            service1: 0,
            service2: 0,
            type: 0
        },
        {
            id: 3,
            totalPrice: 0,
            diameter: 0,
            depth: 0,
            amount: 0,
            service1: 0,
            service2: 0,
            type: 0
        },
        {
            id: 4,
            totalPrice: 0,
            diameter: 0,
            depth: 0,
            amount: 0,
            service1: 0,
            service2: 0,
            type: 0
        },
        {
            id: 5,
            totalPrice: 0,
            diameter: 0,
            depth: 0,
            amount: 0,
            service1: 0,
            service2: 0,
            type: 0
        },
    ];

    function modalTableRow(numberIndex) {
        var totalPrice = 0;
        var diameter = "";
        var depth = "";
        var amount = "";
        var service1 = '-';
        var service2 = '';
        var type = "";
        data.map(array => {
            if (array.id == numberIndex) {
                totalPrice = array.totalPrice;
                diameter = array.diameter;
                depth = array.depth;
                amount = array.amount;

                if (array.type == 0) {
                    type = 'Plytos, Mūras, Tinkas'
                } else if (array.type == 1) {
                    type = 'Abrazyvinis betonas, Gelžbetonis'
                } else if (array.type == 2) {
                    type = 'Stipriai armuotas betonas, Akmuo'
                }

                if (array.service1 != 0) {
                    if (array.service1 == 10) {
                        service1 = 'Gręžimas virš 2 metrų horizontaliai'
                    }
                    else if (array.service1 == 30) {
                        service1 = 'Gręžimas su purvo nusiurbimu'
                    }
                    else if (array.service1 == 40) {
                        service1 = 'Plytų, mūro, tinko gręžimas sausai'
                    }
                    else if (array.service1 == 100) {
                        service1 = 'Monolito gręžimas sausai'
                    }
                }
                if (array.service2 != 0) {
                    if (array.service2 == 10) {
                        service2 = 'Gręžimas virš 2 metrų horizontaliai'
                    }
                    else if (array.service2 == 30) {
                        service2 = 'Gręžimas su purvo nusiurbimu'
                    }
                    else if (array.service2 == 40) {
                        service2 = 'Plytų, mūro, tinko gręžimas sausai'
                    }
                    else if (array.service2 == 100) {
                        service1 = 'Monolito gręžimas sausai'
                    }
                }
            }
        })

        if (totalPrice == 0) {
            return
        } else {
            return (
                <tr >
                    <td className='border-y-2'>{type}</td>
                    <td className='border-y-2'>{service1} <br /> {service2}</td>
                    <td className='border-y-2'>{diameter}</td>
                    <td className='border-y-2'>{depth}</td>
                    <td className='border-y-2'>{amount}</td>
                    <td className='border-y-2'>{totalPrice.toFixed(2)} €</td>
                </tr>
            )
        }
    }

    function sets(numberIndex, total, diam, depth, amount, service1, service2, type) {
        const newPrices = data.map(price => {
            if (price.id == numberIndex) {
                if (price.totalPrice == total) {
                    return price;
                } else {
                    return {
                        id: numberIndex,
                        totalPrice: total,
                        diameter: diam,
                        depth: depth,
                        amount: amount,
                        service1: service1,
                        service2: service2,
                        type: type
                    };
                }
            } else {
                return price;
            }
        })
        // console.log(newPrices)
        setData(newPrices);
    }
    const [data, setData] = useState(rowPrice);
    const [priceWithoutPVM, setPriceWithoutPVM] = useState(0)

    function totalSum() {
        var result = data.reduce((total, currentValue) => total = total + currentValue.totalPrice, 0)
        setPriceWithoutPVM(result)

    }

    function tableRow(numberIndex) {

        function setDropdown(type) {
            setToggle((prev) => !prev);
            setType(type);
        }

        function calculateRowPrice() { // Sumos skaičiavimas
            setTotal(0) // Nustatome sumos kainą į 0, nes jei įvyksta klaida gautume sumą 0

            var num = 0 // Atributas kuris parodo kurį tipą naudojame skaičiavimui
            if (type === prices[0].title) { // Jei tipas yra "Plytos, Mūras, Tinkas"
                var num = 0;
            }
            else if (type === prices[1].title) {// Jei tipas yra "Abrazyvinis betonas, Gelžbetonis"
                var num = 1;
            }
            else if (type === prices[2].title) {// Jei tipas yra "Stipriai armuotas betonas, Akmuo"
                var num = 2;
            }
            var percent = 0; // Procentai papildomoms paslaugoms
            var percent1 = 0; // Procentai jei papildomos paslaugos yra kelios
            if (box1) { // Jei pažymėta pirma paslauga "Gręžimas virš 2 metrų horizontaliai"
                percent = 10; // Procentai patampa 10 ty.: 10%
                if (box2) { // Jei pažymėta antra paslauga "Gręžimas su purvo nusiurbimu"
                    percent1 = 30; // Procentai antram skaičiavimui patampa 30 ty.: 30%
                } else if (box3) { // Jei pažymėta antra paslauga "Plytų, mūro, tinko gręžimas sausai"
                    percent1 = 40;// Procentai antram skaičiavimui patampa 40 ty.: 40%
                } else if (box4) {// Jei pažymėta antra paslauga "Monolito gręžimas sausai"
                    percent1 = 100;// Procentai antram skaičiavimui patampa 100 ty.: 100%
                }
            } else if (box2) {// Jei pažymėta pirma paslauga "Gręžimas su purvo nusiurbimu"
                percent = 30;// Procentai patampa 30 ty.: 30%
            } else if (box3) {// Jei pažymėta pirma paslauga "Plytų, mūro, tinko gręžimas sausai"
                percent = 40;// Procentai patampa 40 ty.: 40%
            } else if (box4) {// Jei pažymėta pirma paslauga "Monolito gręžimas sausai"
                percent = 100;// Procentai patampa 100 ty.: 100%
            }

            Object.entries(prices[num].prices).map(([key, value]) => { // Peržiūrimas kainoraštis su sumomis ir diametrais
                if (percent > 0 && percent1 > 0) { // Jei abi paslaugos yra pažymėtos
                    if (diameter == key && diameter > 11 && depth > 0) { // Jei diametras ir gylis yra tinkamas
                        let temp = (value * Number(depth)) * amount; // Suskaičiuojama suma
                        let tempTotal = (temp + ((temp) / 100) * percent); // Sumai pridedami pirmos paslaugos procentai
                        let tempPercent = (tempTotal + ((tempTotal) / 100) * percent1) // Sumai pridedami antros paslaugos procentai
                        setTotal(tempPercent); // Sumos atributas atnaujinamas
                        sets(numberIndex, tempPercent, diameter, depth, amount, percent, percent1, num); // Masyvas rowPrice atnaujinamas.
                    }
                } else if (percent > 0) { // Jei pažymeta tik viena paslauga
                    if (diameter == key && diameter > 11 && depth > 0) {// Jei diametras ir gylis yra tinkamas
                        let temp1 = (value * Number(depth)) * amount;// Suskaičiuojama suma
                        let tempTotal1 = (temp1 + ((temp1) / 100) * percent);// Sumai pridedami pirmos paslaugos procentai
                        setTotal(tempTotal1);// Sumos atributas atnaujinamas
                        sets(numberIndex, tempTotal1, diameter, depth, amount, percent, percent1, num);// Masyvas rowPrice atnaujinamas.
                    }
                } else if (percent == 0) { // Jei paslaugų nėra
                    if (diameter == key && diameter > 11 && depth > 0) {// Jei diametras ir gylis yra tinkamas
                        let temp2 = (value * Number(depth)) * amount;// Suskaičiuojama suma
                        setTotal((value * Number(depth)) * amount)// Sumos atributas atnaujinamas
                        sets(numberIndex, temp2, diameter, depth, amount, percent, percent1, num);// Masyvas rowPrice atnaujinamas.
                    }
                }
            })
            if (!isValidDiameter || isNaN(total) || !isValidDepth || !isValidAmount) {
                sets(numberIndex, 0);
            }
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
        // Auto closing
        const menu = useRef(null)
        const closeOpenMenus = (e) => {
            if (menu.current && toggle && !menu.current.contains(e.target)) {
                setToggle(false)
            }
            else if (menu.current && toggleBox && !menu.current.contains(e.target)) {
                setToggleBox(false)
            }
        }
        document.addEventListener('mousedown', closeOpenMenus)

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
            diameterCheck(diameter);
            calculateRowPrice();
        }, [depth, diameter, amount, type, box1, box2, box3, box4])

        return (
            <tr ref={menu} className="border-b ">
                <td className="min-w-[20px]">
                    <input
                        type="text"
                        placeholder=""
                        onChange={handleAmount}
                        value={amount}
                        className={`whitespace-nowrap border-r font-poppins text-sm sm:text-[18px] px-2 py-1 sm:px-4 sm:py-2 w-full ${isValidAmount ? 'text-black' : 'text-red'}`}
                    />
                </td>
                <td className="min-w-[160px]">
                    <input
                        type="text"
                        placeholder=""
                        onChange={handleDiameter}
                        value={diameter}
                        className={`whitespace-nowrap border-r font-poppins text-sm sm:text-[18px] px-2 py-1 sm:px-4 sm:py-2 w-full ${isValidDiameter ? 'text-black' : 'text-red'}`}
                    />
                </td>
                <td className="min-w-[300px]">
                    <button onClick={() => setToggle((prev) => !prev)} className="text-white bg-greyDarker hover:bg-gradient-to-r from-darkGreen to-mediumGreen font-poppins rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center w-full" type="button">
                        {type}
                        <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div className={`${toggle ? 'flex' : 'hidden'} z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow min-w-[250px]`}>
                        <ul className="py-2 text-sm text-gray-700 " aria-labelledby="dropdownDefaultButton">
                            {prices.map((price, index) => (
                                <li key={index}>
                                    <a href="#" onClick={() => setDropdown(price.title)} className="block px-4 py-2 font-poppins text-sm hover:bg-gray-200">
                                        {price.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </td>
                <td className="min-w-[100px]">
                    <input
                        type="text"
                        placeholder=""
                        onChange={handleDepth}
                        value={depth}
                        className={`whitespace-nowrap border-r font-poppins text-sm sm:text-[18px] px-2 py-1 sm:px-4 sm:py-2 w-full ${isValidDepth ? 'text-black' : 'text-red'}`}
                    />
                </td>
                <td className="min-w-[220px]">
                    <button
                        onClick={() => setToggleBox((prev) => !prev)}
                        className={`text-white hover:bg-gradient-to-r from-darkGreen to-mediumGreen font-poppins rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center w-full ${box1 || box2 || box3 || box4 ? 'bg-black ' : 'bg-greyDarker'}`}
                        type="button"
                    >
                        <p className="mr-2">Paslaugos</p>
                        <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div className={`${toggleBox ? 'flex' : 'hidden'} z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow min-w-[90px] `}>
                        <ul className="p-3 space-y-3 text-sm text-gray-700" aria-labelledby="dropdownCheckboxButton">
                            <li>
                                <div className="flex items-center w-full">
                                    <input
                                        onClick={() => setBox1((prev) => !prev)}
                                        type="checkbox"
                                        value=""
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                    />
                                    <label className="px-2 py-1 font-poppins text-sm ">Gręžimas virš 2 metrų horizontaliai</label>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center w-full">
                                    <input
                                        onClick={() => setBox2((prev) => !prev)}
                                        disabled={box3 || box4}
                                        type="checkbox"
                                        value=""
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                    />
                                    <label className="px-2 py-1 font-poppins text-sm">Gręžimas su purvo nusiurbimu</label>
                                </div>
                            </li>
                            <li>
                                <div className={`flex items-center w-full ${type !== prices[0].title ? 'hidden' : 'flex'}`}>
                                    <input
                                        onClick={() => setBox3((prev) => !prev)}
                                        disabled={box2}
                                        type="checkbox"
                                        value=""
                                        className={`w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2`}
                                    />
                                    <label className="px-2 py-1 font-poppins text-sm ">Plytų, mūro, tinko gręžimas sausai</label>
                                </div>
                            </li>
                            <li>
                                <div className={`flex items-center w-full ${type !== prices[2].title ? 'hidden' : 'flex'}`}>
                                    <input
                                        onClick={() => setBox4((prev) => !prev)}
                                        disabled={box2}
                                        type="checkbox"
                                        value=""
                                        className={`w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2`}
                                    />
                                    <label className="px-2 py-1 font-poppins text-sm ">Monolito gręžimas sausai</label>
                                </div>
                            </li>
                        </ul>
                    </div>
                </td>
                <td className="min-w-[150px]">
                    <p className="whitespace-nowrap border-l font-poppins text-sm sm:text-[18px] px-2 py-1 sm:px-8 sm:py-2 w-full text-black">
                        {total.toFixed(2)} €
                    </p>
                </td>
            </tr>
        )
    }

    return (
        <>
            <div className=" sm:-mx-6 mx-8 lg:-mx-8 items-center ">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="shadow-md sm:rounded-lg ">
                        <div className='overflow-x-auto'>
                            <table className="w-full text-sm text-left text-blue-100 min-w-full">
                                <thead className="text-sm text-white  bg-black border-b">
                                    <tr>
                                        <th scope="col" className="px-2 py-3 font-poppins">
                                            Kiekis
                                        </th>
                                        <th scope="col" className="px-2 py-3 font-poppins">
                                            Diametras(ø mm)
                                        </th>
                                        <th scope="col" className="px-2 py-3 font-poppins">
                                            Tipas
                                        </th>
                                        <th scope="col" className="px-2 py-3 font-poppins">
                                            Gylis(cm)
                                        </th>
                                        <th scope="col" className="px-2 py-3 font-poppins">
                                            Papildomos paslaugos
                                        </th>
                                        <th scope="col" className="px-2 py-3 font-poppins">
                                            Suma
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='whitespace-no-wrap'>
                                    {tableRow(0)}
                                    {tableRow(1)}
                                    {tableRow(2)}
                                    {tableRow(3)}
                                    {tableRow(4)}
                                    {tableRow(5)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='my-8  flex justify-end w-full '>
                        <div className=' justify-start w-full'>
                            <h3 className="mb-4 font-poppins text-black text-[20px]">Papildomos paslaugos:</h3>
                            <ul className="w-[70%] font-poppins text-black bg-white border border-gray-200 rounded-lg ">
                                <li className="w-full border-b border-gray-200 rounded-t-lg ">
                                    <div className="flex items-center pl-3 w-full text-[18px] font-poppins">
                                        <label className="w-[70%] py-3 ml-2 text-black">Gręžimas virš 2 metrų horizontaliai</label>
                                        <label className="w-[30%] py-3 ml-2 text-white bg-dark-gradient rounded-lg text-center">+10% Sumos</label>
                                    </div>
                                </li>
                                <li className="w-full border-b border-gray-200 rounded-t-lg ">
                                    <div className="flex items-center pl-3 w-full text-[18px] font-poppins">
                                        <label className="w-[70%] py-3 ml-2 text-black">Gręžimas su purvo nusiurbimu</label>
                                        <label className="w-[30%] py-3 ml-2 text-white bg-dark-gradient rounded-lg text-center">+30% Sumos</label>
                                    </div>
                                </li>
                                <li className="w-full border-b border-gray-200 rounded-t-lg ">
                                    <div className="flex items-center pl-3 w-full text-[18px] font-poppins">
                                        <label className="w-[70%] py-3 ml-2 text-black">Plytų, mūro, tinko gręžimas sausai</label>
                                        <label className="w-[30%] py-3 ml-2 text-white bg-dark-gradient rounded-lg text-center">+40% Sumos</label>
                                    </div>
                                </li>
                                <li className="w-full border-b border-gray-200 rounded-t-lg ">
                                    <div className="flex items-center pl-3 w-full text-[18px] font-poppins">
                                        <label className="w-[70%] py-3 ml-2 text-black">Monolito gręžimas sausai</label>
                                        <label className="w-[30%] py-3 ml-2 text-white bg-dark-gradient rounded-lg text-center">+100% Sumos</label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='justify-end w-[45%]'>
                            <p className='text-black font-poppins text-[20px] mt-32'>Suma be PVM: {priceWithoutPVM.toFixed(2)} €</p>
                            <p className='text-black font-poppins text-[20px]'>Suma su PVM: {(priceWithoutPVM + ((priceWithoutPVM) / 100) * 21).toFixed(2)} €</p>
                            <div className='flex flex-row'>
                                <button onClick={() => totalSum()} className="text-white bg-black hover:bg-gradient-to-r from-black to-greyDarker font-poppins rounded-lg px-4 py-2.5 text-center inline-flex items-center text-[18px] mt-5 mr-4" type='button'>Skaičiuoti</button>
                                <button onClick={() => openModal()} className="text-white bg-mediumGreen hover:bg-gradient-to-r from-mediumGreen to-black font-poppins rounded-lg px-4 py-2.5 text-center inline-flex items-center text-[18px] mt-5" type='button'>Užsisakyti</button>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />

                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={closeModal}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-50" />
                        </Transition.Child>

                        <div className="fixed inset-0 overflow-y-auto">
                            <div className='flex items-center justify-center text-center mt-[10%]'>
                                <ol className="flex items-center w-[60%]">
                                    <li className="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
                                        <span className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
                                            <svg className="w-3.5 h-3.5 text-blue-600 lg:w-4 lg:h-4 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                            </svg>
                                        </span>
                                    </li>
                                    <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
                                        <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                                            <svg className="w-4 h-4 text-gray-500 lg:w-5 lg:h-5 dark:text-gray-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                                <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
                                            </svg>
                                        </span>
                                    </li>
                                    <li className="flex items-center w-full">
                                        <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                                            <svg className="w-4 h-4 text-gray-500 lg:w-5 lg:h-5 dark:text-gray-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
                                            </svg>
                                        </span>
                                    </li>
                                </ol>
                            </div>
                            <div className="flex items-center justify-center p-4 text-center">

                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >

                                    <Dialog.Panel className="w-full max-w-[70%] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                        <div className="mt-2">

                                            <div className="overflow-x-auto mb-10">
                                                <table className="table table-xl">
                                                    <thead>
                                                        <tr className='font-bold  text-sm'>
                                                            <th>Medžiaga</th>
                                                            <th>Paslaugos</th>
                                                            <th>Diametras (mm)</th>
                                                            <th>Gręžimo gylis (cm)</th>
                                                            <th>Kiaurymių skaičius (kiekis)</th>
                                                            <th>Suma</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className=''>
                                                        {modalTableRow(0)}
                                                        {modalTableRow(1)}
                                                        {modalTableRow(2)}
                                                        {modalTableRow(3)}
                                                        {modalTableRow(4)}
                                                        {modalTableRow(5)}
                                                    </tbody>
                                                </table>
                                            </div>
                                            <p className="text-sm text-gray-500">
                                                * Į šią sumą nėra iskaičiuotas transportavimas ir darbo vietos paruošimas.
                                            </p>
                                        </div>
                                        <div className='flex justify-end'>
                                            <p className=''>Suma be PVM {priceWithoutPVM.toFixed(2)} €</p>

                                        </div>
                                        <div className='flex justify-end'>
                                            <p>Suma su PVM: {(priceWithoutPVM + ((priceWithoutPVM) / 100) * 21).toFixed(2)} €</p>
                                        </div>

                                        <div className="mt-4">
                                            <button
                                                type="button"
                                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                onClick={closeModal}
                                            >
                                                Got it, thanks!
                                            </button>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>



            </div>
        </>
    )
}

export default CalcTable