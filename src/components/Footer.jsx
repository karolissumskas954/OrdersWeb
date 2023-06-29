import React from 'react'
import { facebook, instagram, twitter, messenger } from '../assets'
import { Link } from 'react-router-dom'
import { footerLT } from '../constants'

const Footer = () => {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };


  return (
    <>
      <div className='bg-black h-[100%] rounded-[20px] max-sm:hidden mt-[-35px] flex flex-row justify-center'>
        <div className='flex flex-row justify-start items-center w-1/4 ml-4'>
        <Link to='/contacts' className='p-4 md:flex hidden font-poppins text-greyLighter text-[18px]'>{footerLT[0].title}</Link>
        <Link to='/prices' className='p-4 md:flex hidden font-poppins text-greyLighter text-[18px]'>{footerLT[1].title}</Link>
        <Link to='/contacts' className='p-2 md:hidden font-poppins text-greyLighter text-[16px]'>{footerLT[0].title}</Link>
        <Link to='/prices' className='p-2 md:hidden font-poppins text-greyLighter text-[16px]'>{footerLT[1].title}</Link>
        </div>
        <div className='flex flex-row justify-center items-center w-1/2 '>
          <h1 className='p-4 md:flex hidden font-poppins text-white text-[30px]'>{footerLT[2].title}</h1>
          <h1 className='p-4 md:hidden font-poppins text-white text-[20px]'>{footerLT[2].title}</h1>
        </div>
        <div className='flex flex-row justify-end w-1/4 mr-4'>
          <img src={facebook} onClick={()=> openInNewTab('https://www.facebook.com/')} className='md:flex hidden w-full max-w-[40px] mx-2 cursor-pointer' />
          <img src={twitter} onClick={()=> openInNewTab('https://twitter.com/')} className='md:flex hidden w-full max-w-[40px] mx-2 cursor-pointer' />
          <img src={instagram} onClick={()=> openInNewTab('https://www.instagram.com/')} className='md:flex hidden w-full max-w-[40px] mx-2 cursor-pointer' />
          <img src={messenger} onClick={()=> openInNewTab('https://www.messenger.com/')} className='md:flex hidden w-full max-w-[40px] mx-2 cursor-pointer' />
          <img src={facebook} onClick={()=> openInNewTab('https://www.facebook.com/')} className='md:hidden w-full max-w-[30px] mx-1 cursor-pointer' />
          <img src={twitter} onClick={()=> openInNewTab('https://twitter.com/')} className='md:hidden w-full max-w-[30px] mx-1 cursor-pointer' />
          <img src={instagram} onClick={()=> openInNewTab('https://www.instagram.com/')} className='md:hidden w-full max-w-[30px] mx-1 cursor-pointer' />
          <img src={messenger} onClick={()=> openInNewTab('https://www.messenger.com/')} className='md:hidden w-full max-w-[30px] mx-1 cursor-pointer' />
        </div>
      </div>
      <div className='bg-black h-[100%] rounded-[20px] sm:hidden mt-[-35px] flex justify-center items-center'>
        <div className="flex justify-center items-center mb-1 w-full">
          <div className='flex flex-row justify-center mt-1'>
          <h1 className='p-2 font-poppins text-white text-[16px] '>{footerLT[2].title}</h1>
          <img src={facebook} onClick={()=> openInNewTab('https://www.facebook.com/')} className='w-full max-w-[28px] min-w-[15px] mx-2' />
          <img src={twitter} onClick={()=> openInNewTab('https://twitter.com/')} className='w-full max-w-[28px] min-w-[15px] mx-2' />
          <img src={instagram} onClick={()=> openInNewTab('https://www.instagram.com/')} className='w-full max-w-[28px] min-w-[15px] mx-2' />
          <img src={messenger} onClick={()=> openInNewTab('https://www.messenger.com/')} className='w-full max-w-[28px] min-w-[15px] mx-2' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer