import styles from "../style"
import { heroImage, smallHero, smallHero2} from "../assets"
import { navLinksLT, headlineLT, headlineBottomLT } from '../constants';
import { Link } from "react-router-dom";

const Hero = () => (
  <section id="home" className={`flex  md:flex-row flex-col ${styles.paddingY} justify-center items-center`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:-16 px-6`}>
      <div className="flex flex-row justify-between items-center w-full">
        <div className="">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[92px] text-[42px] text-black ss:leading-[100px] leading-[65px] max-md:hidden">
            {headlineLT.title}
          </h1>
          <img src={smallHero2} className=" w-[100%] h-[100%] min-[1060px]:hidden"></img>
          <h1 className="flex-1 font-poppins font-regular max-md:text-[16px] text-[20px] text-greyDarker max-md:mt-4  mt-10 max-w-[470px]">
            {headlineBottomLT.title}
          </h1>
          <div className="flex-1 flex-col grid grid-cols-2 mt-5 ">
            <div className="flex max-md:justify-center">
              <button className="bg-green-gradient hover:bg-green text-white font-bold  py-3 px-6 rounded-[10px] max-md:text-[15px]  text-[22px] ">
                <Link to='/prices'>{navLinksLT[1].title}</Link>
              </button>
            </div>
            <div className="flex max-md:justify-center">
              <button className="bg-green-gradient hover:bg-green text-white font-bold max-md:px-4 py-3 px-6 rounded-[10px] max-md:text-[15px] text-[22px]">
              +370 61585683
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