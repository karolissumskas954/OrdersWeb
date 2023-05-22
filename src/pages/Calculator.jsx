import styles from "../style";

import { Navbar, Hero, Stats, Questions, Footer } from "../components";

const Calculator = () => (
  <div className="bg-background w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-background ${styles.flexStart} `}>
      <h1>skaiciuokle</h1>
    </div>
  </div>
);

export default Calculator