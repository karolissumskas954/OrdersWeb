import styles from "../style";
import { Navbar, PDFDisplay, PriceDetails, Footer } from "../components";

const Prices = () => (
  <div className="bg-background w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`${styles.paddingY}`}>
      <div>
        <h1 className="text-center font-poppins text-[20px] sm:text-[30px]">Kainoraštis</h1>
      </div>
    </div>

    <section>
      <div className={`bg-background ${styles.flexStart} max-sm:hidden`}>
        <div className={`${styles.boxWidth} flex flex-row`}>
          <div className=" w-1/2">
            <PriceDetails/>
          </div>
          <div className=" w-1/2">
            <PDFDisplay />
          </div>
        </div>
      </div>

      <div className={`bg-background ${styles.flexStart} sm:hidden`}>
        <div className={`${styles.boxWidth} flex flex-col mx-3`}>
            <PriceDetails/>
            <PDFDisplay />
        </div>
      </div>
    </section>

    <div className={`bg-background ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth} `}>
        <div className={`${styles.paddingY1}`}>
          <Footer />
        </div>
      </div>
    </div>

  </div>







);

export default Prices