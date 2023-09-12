// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";
import { firebaseConfig } from "./firebaseConfig";
import uuid from 'react-uuid';



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

const analytics = getAnalytics(app);

export function addQuestionToDatabase(name, email, question){
    set(ref(database, 'questions/' + uuid()), {
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