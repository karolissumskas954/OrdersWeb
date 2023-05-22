import styles from "./style";

import { Navbar, Hero, Stats, Questions, Footer } from "./components";
import Home from './pages/Home';
import Prices from "./pages/Prices";
import Calculator from "./pages/Calculator";
import Contacts from "./pages/Contacts";
import { BrowserRouter,Routes, Route } from "react-router-dom";

const App = () => (

  <div>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/prices" element={<Prices/>}></Route>
      <Route path="/calculator" element={<Calculator/>}></Route>
      <Route path="/contacts" element={<Contacts/>}></Route>
    </Routes>
    </BrowserRouter>
  </div>



  // <div className="bg-background w-full overflow-hidden">
  //   <div className={`${styles.paddingX} ${styles.flexCenter}`}>
  //     <div className={`${styles.boxWidth}`}>
  //       <Navbar />
  //     </div>
  //   </div>

  //   <div className={`bg-background ${styles.flexStart} `}>
  //     <div className={`${styles.boxWidth}`}>
  //       <Hero />
  //     </div>
  //   </div>

  //   <div className={`bg-background ${styles.paddingX} ${styles.flexStart}`}>
  //     <div>
        
  //     </div>
  //     <div className={`${styles.boxWidth} `}>
  //       <Stats />

        
  //       <div className={`${styles.paddingY1}`}>
  //       <Questions />
  //       <Footer />
  //       </div>  
  //     </div>
  //   </div>
  // </div>
);

export default App
