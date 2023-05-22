import styles from "../style";

import { Navbar, Footer, ContactsTable } from "../components";

const Contacts = () => (
  <div className="bg-background w-full overflow-hidden h-screen">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-background ${styles.flexStart} `}>
      <ContactsTable/>
    </div>

    <div className={`bg-background ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth} `}>
        <div className={`${styles.paddingY1} xl:max-w-[1280px] w-full `}>
        <Footer />
        </div>  
      </div>
    </div>
  </div>
);

export default Contacts