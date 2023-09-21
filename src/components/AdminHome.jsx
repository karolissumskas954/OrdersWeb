import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import {SiCss3} from "react-icons/si";

import { BiLogOut } from "react-icons/bi";
import { RiFilePaper2Line } from "react-icons/ri";
import { LuMail } from "react-icons/lu";
import { FaRegFilePdf } from "react-icons/fa";
import { BsCalculator } from "react-icons/bs";
import { AdminOrders, AdminMessages } from "../components";



const AdminHome = () => {
  const [selected, setSelected] = useState(0);

  const handleClick = (num) => {
    setSelected(num);
  };


  return (
    <section>
    <div className="text-white flex bg-white1-50">
      <SideNav handleClick={handleClick} />
      <div className="w-full">
        {
          selected == 0 ?
              <AdminOrders/>
            : ''
        }
        {selected == 1 ?
        <AdminMessages/>
        : ''
        }


      </div>
    </div>
    </section>
  );
};

const SideNav = ({ handleClick }) => {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    handleClick(selected);
  }, [selected])


  return (
    // NOTE: In prod, you'd likely set height to h-screen and fix to the viewport
    <>
      <nav className="h-screen w-fit bg-black p-4 flex flex-col items-center gap-4">
        <NavItem selected={selected === 0} id={0} setSelected={setSelected}>
          <div className="flex flex-row">
            <RiFilePaper2Line />
            <p className="mx-2 text-sm">Užsakymai</p>
          </div>

        </NavItem>
        <NavItem selected={selected === 1} id={1} setSelected={setSelected}>
          <div className="flex flex-row">
            <LuMail />
            <p className="mx-2 text-sm">Pranešimai</p>
          </div>
        </NavItem>
        <NavItem selected={selected === 2} id={2} setSelected={setSelected}>
          <div className="flex flex-row">
            <BsCalculator />
            <p className="mx-2 text-sm">Skaičiuoklė</p>
          </div>

        </NavItem>
        <NavItem selected={selected === 3} id={3} setSelected={setSelected}>
          <div className="flex flex-row">
            <FaRegFilePdf />
            <p className="mx-2 text-sm">PDF </p>
          </div>
        </NavItem>
        <NavItem selected={selected === 4} id={4} setSelected={setSelected}>
          <div className="flex flex-row">
            <SiCss3 />
            <p className="mx-2 text-sm">Kalendorius</p>
          </div>
        </NavItem>
        <NavItem selected={selected === 5} id={5} setSelected={setSelected}>
          <div className="flex flex-row">
            <BiLogOut />
            <a href='/home' className="mx-2 text-sm underline">Atsijungti</a>
          </div>
        </NavItem>
      </nav>
    </>
  );
};

const NavItem = ({ children, selected, id, setSelected }) => {
  return (
    <motion.button
      className="p-3 text-xl w-[100%] bg-zinc-800 hover:bg-shark-900 rounded-md transition-colors relative"
      onClick={() => setSelected(id)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="block relative z-10">{children}</span>
      <AnimatePresence>
        {selected && (
          <motion.span
            className="absolute inset-0 rounded-md bg-blue1-800  z-0 "
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          ></motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default AdminHome;