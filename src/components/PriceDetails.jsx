import React from 'react'
import { priceDetailsLT } from '../constants'

const PriceDetails = () => {
    return (
        <>
            <div className='mb-10 flex flex-col justify-center items-center'>
                <p className='p-2 max-w-[75%] font-poppins font-bold text-black text-[18px] my-4'>Nurodymai:</p>
                <div className='w-[100%] h-[90%] bg-white rounded-[10px] shadow-xl flex my-2 mx-1 justify-center items-center'>
                    <p className='p-2 max-w-[95%] font-poppins font-regular text-black text-[18px]'>{priceDetailsLT[0].title}</p>
                </div>
                <div className='w-[100%] h-[90%] bg-white rounded-[10px] shadow-xl flex my-2 mx-1 justify-center items-center'>
                    <p className='p-2 max-w-[95%] font-poppins font-regular text-black text-[18px]'>{priceDetailsLT[1].title}</p>
                </div>
                <div className='w-[100%] h-[90%] bg-white rounded-[10px] shadow-xl  flex my-2 mx-1 justify-center items-center'>
                    <p className='p-2 max-w-[95%] font-poppins font-regular text-black text-[18px]'>{priceDetailsLT[2].title}</p>
                </div>
                <p className='p-2 max-w-[75%] font-poppins font-bold text-black text-[18px] my-4'>Papildomi darbai:</p>

                <div className='w-full flex flex-row'>
                    <div className='w-[70%] h-[90%] bg-white rounded-[10px] shadow-xl  flex my-2 justify-center items-center'>
                        <p className='p-2 max-w-[95%] font-poppins font-regular text-black text-[18px]'>{priceDetailsLT[3].title}</p>
                    </div>
                    <div className='w-[30%] h-[90%] bg-green rounded-[10px] shadow-xl  flex my-2 justify-center items-center'>
                        <p className='p-2 max-w-[95%] font-poppins font-regular text-white text-[18px]'>+10% sumos.</p>
                    </div>
                </div>
                <div className='w-full flex flex-row'>
                    <div className='w-[70%] h-[90%] bg-white rounded-[10px] shadow-xl  flex my-2 justify-center items-center'>
                        <p className='p-2 max-w-[95%] font-poppins font-regular text-black text-[18px]'>{priceDetailsLT[4].title}</p>
                    </div>
                    <div className='w-[30%] h-[90%] bg-green rounded-[10px] shadow-xl  flex my-2 justify-center items-center'>
                        <p className='p-2 max-w-[95%] font-poppins font-regular text-white text-[18px]'>+30% sumos.</p>
                    </div>
                </div>
                <div className='w-full flex flex-row'>
                    <div className='w-[70%] h-[90%] bg-white rounded-[10px] shadow-xl  flex my-2 justify-center items-center'>
                        <p className='p-2 max-w-[95%] font-poppins font-regular text-black text-[18px]'>{priceDetailsLT[5].title}</p>
                    </div>
                    <div className='w-[30%] h-[90%] bg-green rounded-[10px] shadow-xl  flex my-2 justify-center items-center'>
                        <p className='p-2 max-w-[95%] font-poppins font-regular text-white text-[18px]'>+40% sumos.</p>
                    </div>
                </div>
                <div className='w-full flex flex-row'>
                    <div className='w-[70%] h-[90%] bg-white rounded-[10px] shadow-xl  flex my-2 justify-center items-center'>
                        <p className='p-2 max-w-[95%] font-poppins font-regular text-black text-[18px]'>{priceDetailsLT[6].title}</p>
                    </div>
                    <div className='w-[30%] h-[90%] bg-green rounded-[10px] shadow-xl  flex my-2 justify-center items-center'>
                        <p className='p-2 max-w-[95%] font-poppins font-regular text-white text-[18px]'>+100% sumos.</p>
                    </div>
                </div>

                <div className='w-full flex flex-col mt-10 sm:mt-40'>
                    <div className='w-[100%] h-[90%] bg-white rounded-[10px] shadow-xl  flex my-2 mx-1 justify-center items-center'>
                        <p className='p-2 max-w-[95%] font-poppins font-bold text-black text-[18px]'>{priceDetailsLT[7].title}</p>
                    </div>
                    <div className='w-[100%] h-[90%] bg-white rounded-[10px] shadow-xl  flex my-2 mx-1 justify-center items-center'>
                        <p className='p-2 max-w-[95%] font-poppins font-regular text-red text-[18px]'>{priceDetailsLT[8].title}</p>
                    </div>
                </div>

                <div className='w-full flex flex-col justify-start items-start mt-5 max-sm:hidden'>
                    <p className='max-w-[95%] font-poppins font-regular underline text-greyDarker text-[16px]'>Siųstis</p>
                    <p className='max-w-[95%] font-poppins font-regular underline text-greyDarker text-[16px]'>Žiūrėti internete</p>
                </div>
            </div>




        </>




    )
}

export default PriceDetails