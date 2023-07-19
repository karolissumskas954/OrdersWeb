import styles from "../style";
import { Navbar, Hero, Stats, Questions, Footer } from "../components";

const App = () => (
  <div className="bg-background w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-background ${styles.flexStart} `}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-background ${styles.flexStart}`}>
      <div className={`${styles.boxWidth} `}>
        <Stats />
        <div className={`${styles.paddingY1} `}>
          <Questions />
          <Footer />
        </div>
      </div>
    </div>
  </div>
);

export default App