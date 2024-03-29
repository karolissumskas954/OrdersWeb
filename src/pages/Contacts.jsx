import styles from "../style";
import { Navbar, Footer, ContactsTable } from "../components";

const Contacts = () => (
  <section className="">
  <div className="bg-background w-full overflow-hidden h-screen">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-background ${styles.flexStart} ${styles.paddingY}`}>
      <ContactsTable/>
    </div>

    <div className={`bg-background  ${styles.flexStart} `}>
      <div className={`${styles.boxWidth}`}>
        <div className={` xl:max-w-[1280px] w-full h-screen`}>
          <div className="sm:hidden sticky top-[89vh] w-full">
          <Footer />
          </div>
          <div className="max-sm:hidden sticky top-[90vh] w-full">
          <Footer />
          </div>
        
        </div>  
      </div>
    </div>
  </div>
  </section>
);

export default Contacts