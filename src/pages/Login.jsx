import styles from "../style";
import { LoginForm } from '../components'

const Login = () => {

    return (
        <div className="bg-white w-screen h-screen overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
          <LoginForm/>
          </div>
        </div>
      </div> 
    )
}

export default Login