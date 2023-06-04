import React, { useState } from 'react'
import { close, menu} from '../assets';
import { navLinksLT, nameLT } from '../constants';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <nav className='w-full flex py-6 justify-between items-center navbar'>
            <Link to='/home' className='sm:flex hidden font-poppins font-bold text-[22px] text-black'>{nameLT.title}</Link>
            <Link to='/home' className='sm:hidden font-poppins font-bold text-[18px] text-black'>{nameLT.title}</Link>
            <ul className='list-none md:flex hidden justify-end items-center flex-1'>
                {navLinksLT.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-poppins font-normal cursor-pointer text-[16px] 
            ${index === navLinksLT.length - 1 ? 'mr-0' : 'mr-6'} text-black`}>
                        <a href={`#${nav.id}`}></a>
                        <Link to={nav.path}>{nav.title}</Link>
                    </li>
                ))}
            </ul>
            <div className='md:hidden flex flex-1 justify-end items-center'>
                <img src={toggle ? close : menu}
                    alt='menu'
                    className='w-[26px] h-[20px] object-contain'
                    onClick={() => setToggle((prev) => !prev)} />
                <div
                    className={`${toggle ? 'flex' : 'hidden'} p-6 absolute top-16 right-0 mx-4 my-2
                    min-w-[140px] rounded-xl sidebar bg-green-gradient`}>
                    <ul className='list-none flex flex-col justify-end items-center flex-1'>
                        {navLinksLT.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`font-poppins font-normal cursor-pointer text-[16px] 
                                ${index === navLinksLT.length - 1 ? 'mr-0' : 'mb-4'} text-white`}>
                                <a href={`#${nav.id}`}></a>
                                <Link to={nav.path}>{nav.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar