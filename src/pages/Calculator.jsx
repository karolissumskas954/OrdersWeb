import styles from "../style";
import { Navbar,Footer, CalcTable } from "../components";

const Calculator = () => (
  <div className="bg-background w-full ">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`${styles.paddingY}`}>
      <div>
        <h1 className="text-center font-poppins text-[20px] sm:text-[30px]">Skaičiuoklė</h1>
      </div>
    </div>

      <div className={`bg-background ${styles.flexStart} max-sm:hidden`}>
        <div className={`${styles.boxWidth} flex flex-row`}>
          <div className=" w-full">
          <CalcTable/>
          </div>
        </div>
      </div>

      <div className={`bg-background ${styles.flexStart} sm:hidden`}>
        <div className={`${styles.boxWidth} flex flex-col mx-3 overflow-x-auto`}>
        <CalcTable/>
        </div>
      </div>

    <div className={`bg-background ${styles.paddingX} ${styles.flexStart} `}>
      <div className={`${styles.boxWidth}  `}>
        <div className={`${styles.paddingY1} xl:max-w-[1280px] w-full`}>
          <div className="sm:hidden sticky top-[90vh] w-full">
          <Footer />
          </div>
          <div className="max-sm:hidden sticky top-[90vh] w-full">
          <Footer />
          </div>
        </div>  
      </div>
    </div>

  </div>
);

export default Calculator