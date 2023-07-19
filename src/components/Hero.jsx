import styles from "../style"
import { heroImage, smallHero2} from "../assets"
import { navLinksLT, headlineLT, headlineBottomLT, contactsLT } from '../constants';
import { Link } from "react-router-dom";

const Hero = () => (
  <section id="home" className={`flex  md:flex-row flex-col ${styles.paddingY} justify-center items-center`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:-16 px-6 w-full justify-center items-center`}>


    <div className="flex flex-col  w-[80%] max-sm:hidden">
        <img src={smallHero2} className=" w-[100%] h-[100%] md:hidden"></img>
        <h1 className="flex-1 font-poppins font-regular text-[18px] text-greyDarker mt-4  md:hidden">
            {headlineBottomLT.title}
          </h1>
          <div className="flex-1 flex-col grid grid-cols-2 mt-5 ">
            <div className="flex max-md:justify-center">
              <button className="bg-green-gradient hover:bg-green text-white font-bold  py-3 px-6 rounded-[10px] text-[20px] md:hidden">
                <Link to='/prices'>{navLinksLT[1].title}</Link>
              </button>
            </div>
            <div className="flex max-md:justify-center">
              <button className="bg-green-gradient hover:bg-green text-white font-bold max-md:px-4 py-3 px-6 rounded-[10px] text-[20px] md:hidden">
              {contactsLT[5].title}
              </button>
            </div>
          </div>
    </div>

      <div className="flex flex-row justify-between items-center w-full">
        <div className="w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[92px] text-[42px] text-black ss:leading-[100px] leading-[65px] max-md:hidden">
            {headlineLT.title}
          </h1>
          <img src={smallHero2} className=" w-[100%] h-[100%] sm:hidden"></img>
          <h1 className="flex-1 font-poppins font-regular text-[20px] text-greyDarker  mt-10 max-w-[470px] max-md:hidden">
            {headlineBottomLT.title}
          </h1>
          <h1 className="flex-1 font-poppins font-regular text-[16px] text-greyDarker mt-4  sm:hidden">
            {headlineBottomLT.title}
          </h1>
          <div className="flex-1 flex-col grid grid-cols-2 mt-5 ">
            <div className="flex max-md:justify-center">
              <button className="bg-green-gradient hover:bg-green text-white font-bold  py-3 px-6 rounded-[10px] text-[22px] max-md:hidden">
                <Link to='/prices'>{navLinksLT[1].title}</Link>
              </button>
              <button className="bg-green-gradient hover:bg-green text-white font-bold  py-3 px-6 rounded-[10px] text-[16px] sm:hidden">
                <Link to='/prices'>{navLinksLT[1].title}</Link>
              </button>
            </div>
            <div className="flex max-md:justify-center">
              <button className="bg-green-gradient hover:bg-green text-white font-bold max-md:px-4 py-3 px-6 rounded-[10px] text-[22px] max-md:hidden">
              {contactsLT[5].title}
              </button>
              <button className="bg-green-gradient hover:bg-green text-white font-bold max-md:px-4 py-3 px-6 rounded-[10px] text-[16px] sm:hidden">
              {contactsLT[5].title}
              </button>
            </div>
          </div>
        </div>
          <img src={heroImage} className="max-md:hidden"></img>
      </div>
    </div>
  </section>
)

export default Hero