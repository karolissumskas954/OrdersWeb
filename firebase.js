// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, get, child, onValue } from "firebase/database";
import { firebaseConfig, databaseQuestionURL, databaseOrderURL } from "./firebaseConfig";
import uuid from 'react-uuid';
import { format } from 'date-fns'



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
        status: false,
        date: format(new Date(), 'yyyy-MM-dd')
      }).then(() => {
        console.log("Data saved successfully!")
      })
      .catch((error) => {
        onsole.log("The write failed...")
      });;
}

export function getQuestionData() {
  return new Promise((resolve, reject) => {
    const dRef = ref(database, databaseQuestionURL + '/');
    onValue(dRef, (snapshot) => {
      const dbdata = snapshot.val();
          const dataArray = Object.values(dbdata);
          const customSort = (dateStr1, dateStr2) => {
            const date1 = new Date(dateStr1);
            const date2 = new Date(dateStr2);
            return date2 - date1;
          };
          dataArray.sort((a, b) => customSort(a.date, b.date));
          resolve(dataArray);
    })
  });
}

export function addOrdersToDatabase(data, name, email, telephone, address, date){
  set(ref(database, databaseOrderURL + '/' + uuid()), {
      orderNumber: getRandomIntInclusive(1, 1000),
      data: data,
      name: name,
      email: email,
      telephone : telephone,
      address: address,
      date: date,
      status: 1,
      transport: 0
    }).then(() => {
      console.log("Data saved successfully!")
    })
    .catch((error) => {
      onsole.log("The write failed...")
    });;
}


export function getOrderData() {
  return new Promise((resolve, reject) => {
    const dRef = ref(database, databaseOrderURL + '/');
    onValue(dRef, (snapshot) => {
      const dbdata = snapshot.val();
          const dataArray = Object.values(dbdata);
          const customSort = (dateStr1, dateStr2) => {
            const date1 = new Date(dateStr1);
            const date2 = new Date(dateStr2);
            return date2 - date1;
          };
          dataArray.sort((a, b) => customSort(a.date, b.date));
          resolve(dataArray);
    })
  });
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
