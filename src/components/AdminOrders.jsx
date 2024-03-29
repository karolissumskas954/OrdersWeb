import React, { useEffect, useState, Fragment, useRef } from 'react';
import { getOrderData, deleteCompanyOrderItem, deleteOrderItem } from '../../firebase';
import { Dialog, Transition, Tab } from '@headlessui/react'
import { ModalTable } from '../components'
import { adminOrderDropdown, adminOrderStatusDropdown } from '../constants';
import { ToastContainer} from 'react-toastify';
import { ToastSuccessAdminOrderUpdate } from './Toasts';
const AdminOrders = () => {

  const [toggle, setToggle] = useState(false)
  const [type, setType] = useState(adminOrderDropdown[0].title)
  function setDropdown(type) {
    setToggle((prev) => !prev);
    setType(type);
  }

  const [data, setData] = useState([]);


  const [isOpen, setIsOpen] = useState('')
  const [selectedItem, setSelectedItem] = useState(null)
  function closeModal() {
    setIsOpen(false)
    setSelectedItem(null)
  }
  function openModal(item) {
    setIsOpen(true)
    setSelectedItem(item)
  }

  useEffect(() => {
    getOrderData()
      .then((responseData) => {
        setData(responseData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [isOpen, saveDataToDatabase()]);

  function saveDataToDatabase(key, address, company, data, date, email, name, orderNumber, status, telephone, transportcost, companyCode, companyName, registrationAddress, vatCode){
    if (company == true){
      deleteCompanyOrderItem(key,name,email,data,status,date,telephone,address,companyName,companyCode, vatCode, registrationAddress, orderNumber, transportcost)
      ToastSuccessAdminOrderUpdate()
    }
    if (company == false){
      deleteOrderItem(key,name,email,data,status,date,telephone, address, transportcost, orderNumber)
      ToastSuccessAdminOrderUpdate()
    }
    
  }

  const ItemModal = ({ item }) => {
    if (selectedItem == null) {
      return
    }
    const [transportcost, setTransportCost] = useState(item.transport)
    const handleTransportCost = event => {
      setTransportCost(event.target.value);
    };
    const [status, setStatus] = useState(item.status)
    const [toggleStatus, setToggleStatus] = useState(false)
    function setToggleDropdown(type) {
      setToggleStatus((prev) => !prev);
      if (type == adminOrderStatusDropdown[0].title){
        setStatus(0)
      }
      if (type == adminOrderStatusDropdown[1].title){
        setStatus(1)
      }
      if (type == adminOrderStatusDropdown[2].title){
        setStatus(2)
      }
    }

    const cancelButtonRef = useRef(null);
    return (
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto text-center w-full"
          initialFocus={cancelButtonRef}
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Backdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <Dialog.Panel className="inline-block mt-[5%] bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all w-[75%]">
              <div className="relative mx-5 mb-5 overflow-hidden scroll-smooth mt-[-15px]">
                <div className=' w-[20%]'>
                  <button type='button' onClick={closeModal} className='mt-10 text-white text-[22px] bg-greyDarker hover:bg-gradient-to-r from-blue1-800 to-blue1-600 font-poppins rounded-lg px-3 text-center inline-flex items-center '>
                    ←
                  </button>
                </div>
                <div className='text-center w-full text-black font-poppins text-[18px] '>
                  Užsakymas Nr.: Dei-{item.orderNumber}
                </div>
                <div className='flex flex-col lg:flex-row'>
                  <table className="text-left font-light mt-3 rounded-xl border-2 bg-white1-50 ">
                    <tbody className=" text-black text-[18px]">
                      <tr
                        className="border-2">
                        <td className="whitespace-nowrap font-poppins font-medium px-2 py-1">Vardas, Pavardė:</td>
                        <td className="whitespace-nowrap font-poppins px-2 py-1">{item.name}</td>
                      </tr>
                      <tr
                        className="border-2">
                        <td className="whitespace-nowrap font-poppins font-medium px-2 py-1">Adresas:</td>
                        <td className="whitespace-nowrap font-poppins px-2 py-1">{item.address}</td>
                      </tr>
                      <tr
                        className="border-2">
                        <td className="whitespace-nowrap font-poppins font-medium px-2 py-1">Telefono numeris:</td>
                        <td className="whitespace-nowrap font-poppins px-2 py-1">{item.telephone}</td>
                      </tr>
                      <tr
                        className="border-2">
                        <td className="whitespace-nowrap font-poppins font-medium px-2 py-1">Elektroninis paštas:</td>
                        <td className="whitespace-nowrap font-poppins px-2 py-1">{item.email}</td>
                      </tr>
                      <tr
                        className="border-2">
                        <td className="whitespace-nowrap font-poppins font-medium px-2 py-1">Darbų atlikimo data:</td>
                        <td className="whitespace-nowrap font-poppins px-2 py-1">{item.date}</td>
                      </tr>
                      <tr
                        className="">
                        <td className="whitespace-nowrap font-poppins font-medium px-2 py-1">Statusas:</td>
                        <td className="whitespace-nowrap font-poppins px-2 py-1">
                          <div>

                            <div>
                              <button onClick={() => setToggleStatus((prev) => !prev)} 
                              className={`
                              ${status == 1 ? 'bg-yellow-100 text-yellow-600 hover:bg-gradient-to-r from-yellow-100 to-tulip-400 border border-yellow-600' : ''} 
                              ${status == 0 ? 'bg-valencia-100 text-red hover:bg-gradient-to-r from-valencia-100 to-valencia-500 border border-red' : ''} 
                              ${status == 2 ? 'bg-salem-100 text-salem-800 hover:bg-gradient-to-r from-salem-100 to-salem-500 border border-salem-800' : ''} 
                              min-w-[100px]  font-poppins rounded-lg text-sm px-4 py-1.5 text-center inline-flex items-center w-full`} type="button">
                                {status == 0 ? adminOrderStatusDropdown[0].title : ''}
                                {status == 1 ? adminOrderStatusDropdown[1].title : ''}
                                {status == 2 ? adminOrderStatusDropdown[2].title : ''}
                                <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                              </button>
                              <div className={`${toggleStatus ? 'flex' : 'hidden'} z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow `}>
                                <ul className="py-2 text-sm text-gray-700 " aria-labelledby="dropdownDefaultButton">
                                  {adminOrderStatusDropdown.map((message, index) => (
                                    <li key={index}>
                                      <a onClick={() => setToggleDropdown(message.title)} className="block text-black px-4 py-2 font-poppins text-sm hover:bg-gray-300">
                                        {message.title}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {item.company == true ?
                    <table className="text-left font-light mt-3 rounded-xl lg:ml-10 border-2 bg-white1-50">
                      <tbody className=" text-black text-[18px] ">
                        <tr
                          className="border-2">
                          <td className="whitespace-nowrap font-poppins font-medium px-2 py-1">Įmonės pavadinimas:</td>
                          <td className="whitespace-nowrap font-poppins px-2 py-1">{item.companyName}</td>
                        </tr>
                        <tr
                          className="border-2">
                          <td className="whitespace-nowrap font-poppins font-medium px-2 py-1">Įmonės kodas:</td>
                          <td className="whitespace-nowrap font-poppins px-2 py-1">{item.companyCode}</td>
                        </tr>
                        <tr
                          className="border-2">
                          <td className="whitespace-nowrap font-poppins font-medium px-2 py-1">PVM mokėtojo kodas:</td>
                          <td className="whitespace-nowrap font-poppins px-2 py-1">{item.vatCode}</td>
                        </tr>
                        <tr
                          className="border-2">
                          <td className="whitespace-nowrap font-poppins font-medium px-2 py-1">Registracijos adresas:</td>
                          <td className="whitespace-nowrap font-poppins px-2 py-1">{item.registrationAddress}</td>
                        </tr>
                      </tbody>
                    </table>
                    : ''}
                </div>
                <div className='mt-[-3%]'>
                  <ModalTable data={item.data} />
                </div>
                <div className='w-[450px] text-center flex flex-row mb-8'>
                  <div className='text-black text-[16px] font-poppins'>Transportavimo išlaidos:
                  </div>
                  <input value={transportcost} onChange={handleTransportCost} className='mx-5 border w-[10%] text-[16px] border-black rounded-md text-center bg-white1-50 text-black'></input>
                </div>
                <div className='w-full text-center justify-center flex flex-row my-2'>
                  <button 
                  onClick={() => saveDataToDatabase(item.key, item.address, item.company, item.data, item.date, item.email, item.name, item.orderNumber, status, item.telephone, transportcost, item.companyCode, item.companyName, item.registrationAddress, item.vatCode)} 
                  className="mx-5 text-white bg-greyDarker hover:bg-gradient-to-r from-blue1-800 to-blue1-600 font-poppins rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center w-[95px]" type="button">
                    Išsaugoti
                  </button>
                  <button className="mx-5 text-white bg-greyDarker hover:bg-gradient-to-r from-blue1-800 to-blue1-600 font-poppins rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center w-[130px]" type="button">
                    Generuoti PDF
                  </button>
                  <button className="mx-5 text-white bg-greyDarker hover:bg-gradient-to-r from-blue1-800 to-blue1-600 font-poppins rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center w-[130px]" type="button">
                    Siųsti El.laišką
                  </button>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

    )
  }





  const OrderRow = ({ item }) => {
    const [isChecked, setIsChecked] = useState(item.status)
    return (
      <>
        <tr className={`border  border-gray-300 text-center ${isChecked == 1 ? '' : 'bg-shark-50'}`}>
          <td className={`w-1/12 ${isChecked == 1 ? '' : 'opacity-50'} `}>
            <div className="flex items-center space-x-3">
              <div className='items-center w-full'>
                <div className="font-bold text-black my-1">{item.company == true ? item.companyName : item.name}</div>
                <div className="text-[14px] text-gray-600">{item.address}</div>
              </div>
            </div>
          </td>
          <td className={`text-black w-1/12 ${isChecked == 1 ? '' : 'opacity-50'}`}>
            <div className="font-bold text-black my-1">{item.telephone}</div>
            <span className="bg-purple-200 px-2 py-0.5 rounded-xl text-[14px] text-black ">{item.email}</span>
          </td>
          <td className={`text-black  w-2/12 ${isChecked == 1 ? '' : 'opacity-50'}`}>{item.date}</td>
          <td className="w-1/12 text-black">
            {isChecked == 0 ?
              <span className="bg-valencia-100 text-red text-sm font-medium px-2.5 py-0.5 rounded ">Atmestas</span>
              :
              ''
            }
            {isChecked == 1 ?
              <span className="bg-yellow-100 text-yellow-600 text-sm font-medium px-2.5 py-0.5 rounded ">Vykdomas</span>
              :
              ''
            }
            {isChecked == 2 ?
              <span className="bg-salem-100 text-salem-800 text-sm font-medium px-2.5 py-0.5 rounded ">Atliktas</span>
              :
              ''
            }
          </td>
          <th className='w-1/12'>
            <button className=" ">
              <span onClick={() => openModal(item)} className="bg-shark-200 text-black px-2.5 py-1.5 rounded hover:bg-shark-300">
                Plačiau
              </span>
            </button>
          </th>
        </tr>

      </>
    )
  }
  return (
    <div className="h-[45px] m-4 rounded-xl mx-10">
      <h1 className="text-2xl font-semibold font-poppins text-center my-1 mt-10 text-black">Užsakymai</h1>
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
              {adminOrderDropdown.map((message, index) => (
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
            {/* head */}
            <thead>
              <tr className="bg-blue1-700 text-white text-[16px] border border-black text-center">
                {/* <th className='w-1/12'></th> */}
                <th className='w-2/12'>Informacija</th>
                <th className='w-2/12'>Kontaktai</th>
                <th className='w-2/12'>Data</th>
                <th className='w-2/12'>Statusas</th>
                <th className='w-1/12'></th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                if (type == adminOrderDropdown[0].title) {
                  return (
                    <OrderRow key={index} item={item} />
                  )
                }
                if (type == adminOrderDropdown[1].title) {
                  if (item.status == 0) {
                    return (
                      <OrderRow key={index} item={item} />
                    )
                  }
                }
                if (type == adminOrderDropdown[2].title) {
                  if (item.status == 1) {
                    return (
                      <OrderRow key={index} item={item} />
                    )
                  }
                }
                if (type == adminOrderDropdown[3].title) {
                  if (item.status == 2) {
                    return (
                      <OrderRow key={index} item={item} />
                    )
                  }
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
      <ItemModal item={selectedItem} />
      <ToastContainer />
    </div>
  )
}

export default AdminOrders
