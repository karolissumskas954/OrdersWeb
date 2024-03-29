import { dg } from "../assets"
import { dbRef, getQuestionData } from "../../firebase";
import { getDatabase, ref, set, get, child } from "firebase/database";

function writeUserData() {

  const dataArray = getQuestionData();

  dataArray
    .then((data) => {
      const newdb = data.map((item) => {
        console.log(item.email);
      });
    })
    .catch((error) => {
      console.error(error);
    });


  



}
const LoginForm = () => {
    return(
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-20 w-20 "
            src={dg}
            alt="Your Company"
          />
          {/* <h1 className="mx-auto text-center font-semibold font-poppins text-3xl bg-gradient-to-r from-jaffa-400 to-tulip-300 rounded-xl py-2 text-white">Deimantinis gręžimas</h1> */}
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Prisijunkite prie savo paskyros
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Elektroninio pašto adresas
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full bg-white1-50 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-jaffa-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Slaptažodis
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-jaffa-400 hover:text-tulip-300">
                  Pamiršote slaptažodį?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full bg-white1-50 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-jaffa-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md
                    transition-all duration-500 bg-gradient-to-r from-jaffa-400 via-tulip-300 to-purple-500  bg-size-200 bg-pos-0 hover:bg-pos-100
                    px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm"
              >
                Prisijungti
              </button>
            </div>

            <div>
              <button
              onClick={() => {writeUserData()}}
                type="submit"
                className="flex w-full justify-center rounded-md
                    transition-all duration-500 bg-gradient-to-r from-jaffa-400 via-tulip-300 to-purple-500  bg-size-200 bg-pos-0 hover:bg-pos-100
                    px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm"
              >
                Database
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Neturite paskyros?{' '}
            <a href="/home" className="font-semibold leading-6 text-jaffa-400 hover:text-tulip-300">
            Grįžti į pagrindinį puslapį
            </a>
          </p>
        </div>
      </div>
    )
}

export default LoginForm