import {
    FiEdit,
    FiChevronDown,
    FiTrash,
    FiShare,
    FiPlusSquare,
} from "react-icons/fi";
import { motion } from "framer-motion";
import React, { Dispatch, SetStateAction, useState } from "react";
// import { IconType } from "react-icons";

const ModalFillForm = ({ childToParent }) => {

    const [open, setOpen] = useState(false);

    const [name, setName] = useState('')
    const handleName = event => {
        setName(event.target.value);
        childToParent(event.target.value)
    };


    const Option = ({ text, Icon, setOpen }) => {
        return (
            <motion.li
                variants={itemVariants}
                onClick={() => setOpen(false)}
                className="flex items-center gap-1 w-full p-1 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
            >
                <motion.span variants={actionIconVariants}>
                    <Icon />
                </motion.span>
                <span>{text}</span>
            </motion.li>
        );
    };

    return (
        <div className='bg-white mt-8'>
            {/* <p>Hello</p> */}
            {/* <input type="text" placeholder="Vardas Pavardė" onChange={handleName} value={name} className={`border-2 p-2  rounded-md w-[70%]`} /> */}
            <form className='bg-white'>

                <div className="grid md:grid-cols-2 md:gap-6 ">
                    <div className="relative z-0 w-full mb-6 flex justify-end">
                        <div className='flex form-control w-[80%] items-end'>
                            <label className="label w-[60%]">
                                <span className="label-text">Vardas Pavarde</span>
                            </label>
                            <input type="text" placeholder='Vardas' className=" py-2.5 px-2 w-[60%] text-sm text-gray-900  border border-gray-300  rounded-md  focus:ring-0 " />
                        </div>
                    </div>
                    <div className="relative z-0 w-full mb-6 mx-3">
                        <div className='flex form-control w-[80%] '>
                            <label className="label w-[60%]">
                                <span className="label-text">Vardas Pavarde</span>
                            </label>
                            <input type="text" placeholder='Vardas' className=" py-2.5 px-2 w-[60%] text-sm text-gray-900  border border-gray-300  rounded-md  focus:ring-0 " />
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 flex justify-end">
                    <div className="flex items-center justify-center bg-white">
                        {/* <motion.div animate={open ? "open" : "closed"} className="relative">
                            <button
                                onClick={() => setOpen((pv) => !pv)}
                                className="flex items-center gap-2 px-3 py-2 rounded-md text-indigo-50 bg-indigo-500 hover:bg-indigo-500 transition-colors"
                            >
                                <span className="font-medium text-sm">Post actions</span>
                                <motion.span variants={iconVariants}>
                                    <FiChevronDown />
                                </motion.span>
                            </button>

                            <motion.ul
                                initial={wrapperVariants.closed}
                                variants={wrapperVariants}
                                style={{ originY: "top", translateX: "-50%" }}
                                className="flex flex-col gap-1 p-1 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden"
                            >
                                <Option setOpen={setOpen} Icon={FiEdit} text="Edit" />
                                <Option setOpen={setOpen} Icon={FiPlusSquare} text="Duplicate" />
                                <Option setOpen={setOpen} Icon={FiShare} text="Share" />
                                <Option setOpen={setOpen} Icon={FiTrash} text="Remove" />
                            </motion.ul>
                        </motion.div> */}
                    </div>
                    </div>
                    <div className="relative z-0 w-full mb-6 mx-3">
                        <input type="text" placeholder='El.Pastas' className=" py-2.5 px-2 w-[60%] text-sm text-gray-900  border border-gray-300  rounded-md  focus:ring-0 " />
                    </div>
                </div>
            </form>

            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 flex justify-end">
                <motion.div animate={open ? "open" : "closed"} className="relative">
                            <button
                                onClick={() => setOpen((pv) => !pv)}
                                className="flex items-center gap-2 px-3 py-2 rounded-md text-indigo-50 bg-indigo-500 hover:bg-indigo-500 transition-colors"
                            >
                                <span className="font-medium text-sm">Post actions</span>
                                <motion.span variants={iconVariants}>
                                    <FiChevronDown />
                                </motion.span>
                            </button>

                            {/* <motion.ul
                                initial={wrapperVariants.closed}
                                variants={wrapperVariants}
                                style={{ originY: "top", translateX: "-50%" }}
                                className="flex flex-col gap-1 p-1 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden"
                            >
                                <Option setOpen={setOpen} Icon={FiEdit} text="Edit" />
                                <Option setOpen={setOpen} Icon={FiPlusSquare} text="Duplicate" />
                                <Option setOpen={setOpen} Icon={FiShare} text="Share" />
                                <Option setOpen={setOpen} Icon={FiTrash} text="Remove" />
                            </motion.ul> */}
                        </motion.div>
                </div>
                <div className="relative z-0 w-full mb-6 mx-3">
                    <input type="text" placeholder='El.Pastas' className=" py-2.5 px-2 w-[60%] text-sm text-gray-900  border border-gray-300  rounded-md  focus:ring-0 " />
                </div>
            </div>

        </div>
    )






}

export default ModalFillForm







const wrapperVariants = {
    open: {
        scaleY: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.1,
        },
    },
    closed: {
        scaleY: 0,
        transition: {
            when: "afterChildren",
            staggerChildren: 0.1,
        },
    },
};

const iconVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
};

const itemVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: {
            when: "beforeChildren",
        },
    },
    closed: {
        opacity: 0,
        y: -15,
        transition: {
            when: "afterChildren",
        },
    },
};

const actionIconVariants = {
    open: { scale: 1, y: 0 },
    closed: { scale: 0, y: -7 },
};