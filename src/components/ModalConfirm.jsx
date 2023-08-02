import React, { useState } from "react";
import { cong } from "../assets";

const ModalConfirm = () => {
    return (
        <div className="flex flex-col items-center mt-10">
            <img src={cong} className=" w-[110px] h-[100%]"></img>
            <h1 className="text-black font-poppins font-bold text-[33px] mt-5">Užsakymas pateiktas!</h1>
            <p className="text-gray-500 font-poppins mb-8">Netrukus su Jumis susisieksime</p>
        </div>
    )
}

export default ModalConfirm