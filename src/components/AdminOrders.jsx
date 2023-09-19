import React, { useEffect, useState } from 'react';
import { getOrderData } from '../../firebase';
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
            <span className="bg-shark-200 text-black px-2.5 py-1.5 rounded hover:bg-shark-300">
              Plačiau
            </span>

          </button>
        </th>
      </tr>
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
    </div>
  )
}

export default AdminOrders
