// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, get, child } from "firebase/database";
import { firebaseConfig, databaseQuestionURL } from "./firebaseConfig";
import uuid from 'react-uuid';



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const dbRef = ref(getDatabase());


const analytics = getAnalytics(app);

export function addQuestionToDatabase(name, email, question){
    set(ref(database, databaseQuestionURL + '/' + uuid()), {
        username: name,
        email: email,
        question : question,
        status: false
      }).then(() => {
        // Data saved successfully!
        console.log("Data saved successfully!")
      })
      .catch((error) => {
        // The write failed...
        onsole.log("The write failed...")
      });;
}

export function getQuestionData() {
  return new Promise((resolve, reject) => {
    get(child(dbRef, databaseQuestionURL))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const dbdata = snapshot.val();
          const dataArray = Object.values(dbdata);
          resolve(dataArray);
        } else {
          console.log('No data available');
          resolve([]); // Resolve with an empty array if no data
        }
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
}