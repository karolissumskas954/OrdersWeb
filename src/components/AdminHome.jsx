import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  SiFramer,
  SiTailwindcss,
  SiReact,
  SiJavascript,
  SiCss3,
} from "react-icons/si";

import { BiLogOut } from "react-icons/bi";
import { RiFilePaper2Line } from "react-icons/ri";
import { LuMail } from "react-icons/lu";
import { FaRegFilePdf } from "react-icons/fa";
import { BsCalculator } from "react-icons/bs";


const AdminHome = () => {
  const [selected, setSelected] = useState(0);

  const handleClick = (num) => {
    setSelected(num);
  };


  return (
    <div className="text-white flex bg-white1-50">
      <SideNav handleClick={handleClick} />
      <div className="w-full">
        {
          selected == 0 ?
            <div className="h-[45px] m-4 rounded-xl">
              <h1 className="text-2xl font-semibold font-poppins text-center my-1 mt-10 text-black">Užsakymai</h1>
              <div className="h-full w-full mt-10 rounded  ">
                <div className="overflow-x-auto border-2 border-black rounded-xl shadow-2xl">
                  <table className="table border-2 border-black">
                    {/* head */}
                    <thead>
                      <tr className="text-sm text-white border bg-blue1-600 border-black font-poppins">
                        <th >
                          {/* <label>
                            <input type="checkbox" className="checkbox border-2 border-black" />
                          </label> */}
                        </th>
                        <th>Informacija</th>
                        <th>Job</th>
                        <th>Telefono numeris</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* row 1 */}
                      <tr className="border border-white1-300 hover:bg-white1-200">
                        <th >
                          <label>
                            <input type="checkbox" className="checkbox border-2 border-white1-400" />
                          </label>
                        </th>
                        <td>
                          <div className="flex items-center space-x-3">
                            {/* <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                              </div>
                            </div> */}
                            <div>
                              <div className="font-bold text-black">Hart Hagerty</div>
                              <div className="text-sm opacity-50 text-black">Vilnius, zaibo g. 52 A</div>
                            </div>
                          </div>
                        </td>
                        <td className="text-black">
                          Zemlak, Daniel and Leannon
                          <br />
                          <span className="badge badge-ghost badge-sm text-black">Desktop Support Technician</span>
                        </td>
                        <td className="text-black">+96585123123</td>
                        <th>
                          <button className="btn btn-ghost btn-xs text-black">details</button>
                        </th>
                      </tr>
                      {/* row 2 */}
                      <tr>
                        <th>
                          <label>
                            <input type="checkbox" className="checkbox" />
                          </label>
                        </th>
                        <td>
                          <div className="flex items-center space-x-3">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img src="/tailwind-css-component-profile-3@56w.png" alt="Avatar Tailwind CSS Component" />
                              </div>
                            </div>
                            <div>
                              <div className="font-bold">Brice Swyre</div>
                              <div className="text-sm opacity-50">China</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          Carroll Group
                          <br />
                          <span className="badge badge-ghost badge-sm">Tax Accountant</span>
                        </td>
                        <td>Red</td>
                        <th>
                          <button className="btn btn-ghost btn-xs">details</button>
                        </th>
                      </tr>
                      {/* row 3 */}
                      <tr>
                        <th>
                          <label>
                            <input type="checkbox" className="checkbox" />
                          </label>
                        </th>
                        <td>
                          <div className="flex items-center space-x-3">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img src="/tailwind-css-component-profile-4@56w.png" alt="Avatar Tailwind CSS Component" />
                              </div>
                            </div>
                            <div>
                              <div className="font-bold">Marjy Ferencz</div>
                              <div className="text-sm opacity-50">Russia</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          Rowe-Schoen
                          <br />
                          <span className="badge badge-ghost badge-sm">Office Assistant I</span>
                        </td>
                        <td>Crimson</td>
                        <th>
                          <button className="btn btn-ghost btn-xs">details</button>
                        </th>
                      </tr>
                      {/* row 4 */}
                      <tr>
                        <th>
                          <label>
                            <input type="checkbox" className="checkbox" />
                          </label>
                        </th>
                        <td>
                          <div className="flex items-center space-x-3">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img src="/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" />
                              </div>
                            </div>
                            <div>
                              <div className="font-bold">Yancy Tear</div>
                              <div className="text-sm opacity-50">Brazil</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          Wyman-Ledner
                          <br />
                          <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
                        </td>
                        <td>Indigo</td>
                        <th>
                          <button className="btn btn-ghost btn-xs">details</button>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>




            </div>
            : ''

          // <div className="h-[400px] m-4 rounded border-2 border-dashed border-slate-600 bg-slate-800"></div>
        }

      </div>
    </div>
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
        {/* Temp logo from https://logoipsum.com/ */}
        {/* <svg
        width="40"
        height="28"
        viewBox="0 0 40 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mb-4"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.98578 4.11462L0 14C1.99734 15.9773 4.27899 17.6437 6.76664 18.9474C7.45424 20.753 8.53203 22.4463 10 23.8995C15.5229 29.3668 24.4772 29.3668 30 23.8995C31.468 22.4463 32.5458 20.753 33.2334 18.9473C35.721 17.6437 38.0027 15.9773 40 14L30.0223 4.12266C30.0149 4.11527 30.0075 4.10788 30 4.1005C24.4772 -1.36683 15.5229 -1.36683 10 4.1005C9.99527 4.10521 9.99052 4.10991 9.98578 4.11462ZM29.0445 20.7309C26.1345 21.7031 23.0797 22.201 20 22.201C16.9203 22.201 13.8656 21.7031 10.9556 20.7309C11.2709 21.145 11.619 21.5424 12 21.9196C16.4183 26.2935 23.5817 26.2935 28 21.9196C28.381 21.5424 28.7292 21.145 29.0445 20.7309ZM12.2051 5.8824C12.9554 6.37311 13.7532 6.79302 14.588 7.13536C16.3038 7.83892 18.1428 8.20104 20 8.20104C21.8572 8.20104 23.6962 7.83892 25.412 7.13536C26.2468 6.79302 27.0446 6.3731 27.795 5.88238C23.4318 1.77253 16.5682 1.77254 12.2051 5.8824Z"
          fill="#FFFFFF"
        ></path>
      </svg> */}
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
            <p className="mx-2 text-sm">extra</p>
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