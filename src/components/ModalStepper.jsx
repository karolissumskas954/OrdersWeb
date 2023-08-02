const Steps = { INFO: 1, DATA: 2, CONFIRM: 3 };

const CheckSVG = ({ width, height, color }) => {
    return (
        <svg className={`w-${width} h-${height} text-${color} lg:w-4 lg:h-4`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
        </svg>
    )
}
const InfoSVG = ({ width, height, color }) => {
    return (
        <svg className={`w-${width} h-${height} text-${color}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
            <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
        </svg>
    )
}
const DataSVG = ({ width, height, color }) => {
    return (
        <svg className={`w-${width} h-${height} text-${color} lg:w-5 lg:h-5`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
            <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
        </svg>
    )
}
const ConfirmSVG = ({ width, height, color }) => {
    return (
        <svg className={`w-${width} h-${height} text-${color} lg:w-5 lg:h-5`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
            <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
        </svg>
    )
}

const ModalStepper = ({ selectedIndex }) => {
    const step = Object.values(Steps).find(step => step === selectedIndex);
    return (
        <div className='w-full flex justify-center items-center ml-[15%]'>
            <div className='w-[33%]'>
                <li className={`flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:mx-1  ${step === Steps.INFO ? 'after:border-gray-300' : 'after:border-salem-700'} after:border-4 after:inline-block`}>
                    <span className="flex items-center text-shark-100 justify-center w-10 h-10 bg-salem-700 rounded-full lg:h-12 lg:w-12  shrink-0">
                        {step === Steps.DATA || step === Steps.CONFIRM ? (
                            <CheckSVG width='5' height='5' color='shark-100' />
                        ) : (
                            <InfoSVG width='5' height='5' color='shark-100' />
                        )}
                    </span>
                </li>
                <p className={`font-poppins text-sm ml-[-8%] md:ml-[-3%] mt-1 text-black`}>Informacija</p>
            </div>
            <div className='w-[33%]'>
                <li className={`flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b  ${step === Steps.DATA || step === Steps.INFO ? 'after:border-gray-300' : 'after:border-salem-700'} after:border-4 after:inline-block  after:mx-1 `}>
                    <span className={`flex items-center justify-center w-10 h-10  ${step === Steps.DATA || step === Steps.CONFIRM ? 'bg-salem-700' : 'bg-gray-300'} rounded-full lg:h-12 lg:w-12  shrink-0`}>
                        {step === Steps.CONFIRM ? (
                            <CheckSVG width='5' height='5' color='shark-100' />
                        ) : (
                            <DataSVG width='4' height='4' color={`${step === Steps.INFO ? 'gray-600' : 'shark-100'}`} />
                        )}
                    </span>
                </li>
                <p className={`font-poppins  text-sm ml-[-8%] md:ml-[-3%] mt-1 ${step === Steps.DATA || step === Steps.CONFIRM ? 'text-black' : 'text-gray-400'}`}>Duomenys</p>
            </div>
            <div className='w-[33%]'>
                <li className="flex items-center w-full">
                    <span className={`flex items-center justify-center w-10 h-10  ${step === Steps.CONFIRM ? 'bg-salem-700' : 'bg-gray-300'} rounded-full lg:h-12 lg:w-12  shrink-0`}>
                        <ConfirmSVG width='4' height='4' color={`${step === Steps.CONFIRM ? 'shark-100' : 'gray-600'}`}/>
                    </span>
                </li>
                <p className={`font-poppins  text-sm ml-[-8%] md:ml-[-3%] mt-1 ${step === Steps.CONFIRM ? 'text-black' : 'text-gray-400'}`}>Patvirtinimas</p>
            </div>
        </div>
    )
}

export default ModalStepper;