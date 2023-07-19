import React, { useState } from 'react'
import { questionLT } from '../constants'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Questions = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [text, setText] = useState('');

  const [isValidName, setIsValidName] = useState(false)
  const [isValidEmail, setIsValidEmail] = useState(false)
  const [isValidText, setIsValidText] = useState(false)

  function emailCheck(str) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi.test(str);
  }
  const handleName = event => {
    setName(event.target.value);
    setIsValidName(false);
  };
  const handleEmail = event => {
    setEmail(event.target.value);
    setIsValidEmail(false);
  };
  const handleText = event => {
    setText(event.target.value);
    setIsValidText(false);
  };

  async function sendEmail(){
    await fetch(import.meta.env.VITE_API_REQUEST, {
      method: 'POST',
      body: JSON.stringify({
        name : name
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
     },
    }).catch((error)=> {
      console.log(error.message);
    })
  }
  const handleOpen = () => {
    if (name == '' || email == '' || text == '' || !emailCheck(email)) {
      setIsValidName(true);
      setIsValidEmail(true);
      setIsValidText(true);
      if (name != '') {
        setIsValidName(false);
      }
      if (text != '') {
        setIsValidText(false);
      }
      if (email != '') {
        if (emailCheck(email)){
          setIsValidEmail(false);
        }else {
          toast.warn('Neteisingas el. pašto formatas', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          return;
        }
      }
      toast.warn('Užpildykite visus laukus', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      sendEmail();
      setIsValidName(false);
      setIsValidEmail(false);
      setIsValidText(false);
      setName("");
      setEmail("");
      setText("");
      toast.success('Jūsų žinutė sėkmingai išsiųsta!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark", //colored
      });
    }
  }
  return (
    <>
      <div className="flex justify-center items-center bg-green-gradient rounded-[20px] h-[200%] max-md:hidden">
        <div className="w-1/2 text-left">
          <h1 className='p-4 font-poppins font-bold max-w-[80%] text-white text-[70px] ml-16 mt-10'>{questionLT[0].title}</h1>
          <p className='p-4 font-poppins font-regular text-white text-[40px] ml-16 mt-[-40px] mb-16'>{questionLT[1].title}</p>
        </div>
        <div className="w-1/2 text-center">
          <div className="flex justify-center items-center">
            <div className="w-1/2 text-right mx-1">
              <input type="text" placeholder="Vardas Pavardė" onChange={handleName} value={name} className={`border-2 p-2  rounded-md w-[70%] ${isValidName ? ' border-red' : 'border-gray-300'} ${isValidName ? ' placeholder-red' : 'placeholder-gray-400'}`} />
            </div>
            <div className="w-1/2 text-left mx-1">
              <input type="text" placeholder="El. Paštas" onChange={handleEmail} value={email} className={`border-2 p-2 rounded-md w-[70%] ${isValidEmail ? ' border-red' : 'border-gray-300'} ${isValidEmail ? ' placeholder-red' : 'placeholder-gray-400'}`} />
            </div>
          </div>
          <textarea onChange={handleText} value={text} className={`my-5 mx-[15%] block w-[70%] px-4 py-2 leading-tight border-2 rounded appearance-none focus:outline-blue focus:bg-white ${isValidText ? ' border-red' : 'border-gray-300'} ${isValidText ? ' placeholder-red' : 'placeholder-gray-400'}`} rows="3" placeholder="Tekstas"></textarea>
          <div className='flex'>
          <a onClick={handleOpen} className='p-4 font-poppins cursor-pointer underline text-white text-[20px] text-left mx-[13%] mt-[-25px]'>Siųsti</a>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-green-gradient rounded-[20px] h-[200%] max-sm:hidden min-[1060px]:hidden ">
        <div className="w-1/2 text-left">
          <h1 className='p-4 font-poppins font-bold max-w-[80%] text-white text-[50px] ml-12 mt-10'>{questionLT[0].title}</h1>
          <p className='p-4 font-poppins font-regular text-white text-[28px] ml-12 mt-[-40px] mb-16'>{questionLT[1].title}</p>
        </div>
        <div className="w-1/2 text-center">
          <div className="flex justify-center items-center">
            <div className="w-1/2 text-right mx-1">

              <input type="text" placeholder="Vardas Pavardė" onChange={handleName} value={name} className={`border-2 p-2 rounded-md w-[70%] ${isValidName ? ' border-red' : 'border-gray-300'} ${isValidName ? ' placeholder-red' : 'placeholder-gray-400'}`} />
            </div>
            <div className="w-1/2 text-left mx-1">
              <input type="text" placeholder="El. Paštas" onChange={handleEmail} value={email} className={`border-2 p-2 rounded-md w-[70%] ${isValidEmail ? ' border-red' : 'border-gray-300'} ${isValidEmail ? ' placeholder-red' : 'placeholder-gray-400'}`} />
            </div>
          </div>
          <textarea onChange={handleText} value={text} className={`my-5 mx-[15%] block w-[70%] px-4 py-2 leading-tight border-2 rounded appearance-none focus:outline-blue focus:bg-white ${isValidText ? ' border-red' : 'border-gray-300'} ${isValidText ? ' placeholder-red' : 'placeholder-gray-400'}`} rows="3" placeholder="Tekstas"></textarea>
          <div className='flex'>
          <a onClick={handleOpen} className='p-4 font-poppins cursor-pointer underline text-white text-[16px] text-left mx-[12%] mt-[-25px]'>Siųsti</a>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-green-gradient rounded-[28px] h-[200%] sm:hidden ">
        <h1 className='p-4 font-poppins font-bold text-white text-[30px]'>{questionLT[0].title}</h1>
        <p className='p-4 font-poppins font-regular text-white text-[18px] mt-[-30px]'>{questionLT[1].title}</p>
        <div className='flex flex-col items-center mx-3 w-[85%]'>
          <input type="text" placeholder="Vardas Pavardė" onChange={handleName} value={name} className={`my-2 border-2 p-2 rounded-md w-[95%] ${isValidName ? ' border-red' : 'border-gray-300'} ${isValidName ? ' placeholder-red' : 'placeholder-gray-400'}`} />
          <input type="text" placeholder="El. Paštas" onChange={handleEmail} value={email} className={`border-2 p-2 rounded-md w-[95%] ${isValidEmail ? ' border-red' : 'border-gray-300'} ${isValidEmail ? ' placeholder-red' : 'placeholder-gray-400'}`} />
          <textarea onChange={handleText} value={text} className={`my-2 block w-[95%]  px-2 py-2 leading-tight border-2 rounded appearance-none focus:outline-blue focus:bg-white ${isValidText ? ' border-red' : 'border-gray-300'} ${isValidText ? ' placeholder-red' : 'placeholder-gray-400'}`} rows="3" placeholder="Tekstas"></textarea>
          <p onClick={handleOpen} className=' p-4 font-poppins cursor-pointer underline text-white text-[16px] mx-[12%] mt-[-16px] mb-8'>Siųsti</p>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default Questions