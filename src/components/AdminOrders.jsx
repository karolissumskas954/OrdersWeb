import React, { useEffect, useState, Fragment, useRef } from 'react';
import { getOrderData } from '../../firebase';
import { Dialog, Transition, Tab } from '@headlessui/react'
import { ModalTable } from '../components'
const AdminOrders = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    getOrderData()
      .then((responseData) => {
        setData(responseData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [isOpen, setIsOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  function closeModal() {
    setIsOpen(false)
    setSelectedItem(null)
  }
  function openModal(item) {
    setIsOpen(true)
    setSelectedItem(item)
  }

  const ItemModal = ({ item }) => {
    if (selectedItem == null) {
      return
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
              <div className="relative mx-5 my-5 overflow-hidden scroll-smooth">
                    <div className='text-center w-full text-black font-poppins text-[18px]'>
                      Užsakymas Nr.: Dei-{item.orderNumber}
                    </div>
                    <div className=''>
                      <table className="text-left font-light mt-3 rounded-xl">
                        <tbody className=" text-black text-[18px]">
                          <tr
                            className="">
                            <td className="whitespace-nowrap font-poppins font-medium px-2 py-1">Vardas, Pavardė:</td>
                            <td className="whitespace-nowrap font-poppins px-2 py-1">{item.name}</td>
                          </tr>
                          <tr
                            className="">
                            <td className="whitespace-nowrap font-poppins font-medium px-2 py-1">Adresas:</td>
                            <td className="whitespace-nowrap font-poppins px-2 py-1">{item.address}</td>
                          </tr>
                          <tr
                            className="">
                            <td className="whitespace-nowrap font-poppins font-medium px-2 py-1">Telefono numeris:</td>
                            <td className="whitespace-nowrap font-poppins px-2 py-1">{item.telephone}</td>
                          </tr>
                          <tr
                            className="">
                            <td className="whitespace-nowrap font-poppins font-medium px-2 py-1">Elektroninis paštas:</td>
                            <td className="whitespace-nowrap font-poppins px-2 py-1">{item.email}</td>
                          </tr>
                          <tr
                            className="">
                            <td className="whitespace-nowrap font-poppins font-medium px-2 py-1"></td>
                            <td className="whitespace-nowrap font-poppins px-2 py-1"></td>
                          </tr>
                          <tr
                            className="">
                            <td className="whitespace-nowrap font-poppins font-medium px-2 py-1"></td>
                            <td className="whitespace-nowrap font-poppins px-2 py-1"></td>
                          </tr>
                          <tr
                            className="">
                            <td className="whitespace-nowrap font-poppins font-medium px-2 py-1"></td>
                            <td className='whitespace-nowrap font-poppins px-2 py-1'></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <ModalTable data={item.data} />
                    <div className='w-[140px] text-center'>
                      <button className="mx-5 text-white bg-greyDarker hover:bg-gradient-to-r from-blue1-800 to-blue1-600 font-poppins rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center w-full" type="button">
                        Generuoti PDF
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
    const handleCheckboxChange = () => {
      if (isChecked == 1) {
        setIsChecked(2)
      }
      if (isChecked == 2) {
        setIsChecked(1)
      }
    }
    return (
      <>
        <tr className={`border  border-gray-300 text-center ${isChecked == 1 ? '' : 'bg-shark-50'}`}>
          <th className='w-1/12'>
            <label>
              <input type="checkbox" onChange={handleCheckboxChange} checked={isChecked == 2} disabled={isChecked == 0} className="checkbox border-2 border-white1-400" />
            </label>
          </th>
          <td className={`w-1/12 ${isChecked == 1 ? '' : 'opacity-50'} `}>
            <div className="flex items-center space-x-3">
              <div className='items-center w-full'>
                <div className="font-bold text-black my-1">{item.name}</div>
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
      <div className="h-full w-full mt-10 rounded  ">
        <div className="overflow-x-auto border-2 border-black rounded-xl shadow-2xl">
          <table className="table w-full border-collapse border">
            {/* head */}
            <thead>
              <tr className="bg-blue1-700 text-white text-[16px] border border-black text-center">
                <th className='w-1/12'></th>
                <th className='w-2/12'>Informacija</th>
                <th className='w-2/12'>Kontaktai</th>
                <th className='w-2/12'>Data</th>
                <th className='w-2/12'>Statusas</th>
                <th className='w-1/12'></th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <OrderRow key={index} item={item} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ItemModal item={selectedItem} />
    </div>
  )
}

export default AdminOrders
