import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

 const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAejTYJQvRkhOlL7z7vfYXg2AzqKiiZSKE",
  authDomain: "ginasiogoodhealth.firebaseapp.com",
  projectId: "ginasiogoodhealth",
  storageBucket: "ginasiogoodhealth.appspot.com",
  messagingSenderId: "409516042590",
  appId: "1:409516042590:web:a3d4b51f8cec02223a47cf",
  measurementId: "G-HK7N6VG2EW",
});

export const fireDB = firebaseConfig.firestore();
//export default firebaseConfig;


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAejTYJQvRkhOlL7z7vfYXg2AzqKiiZSKE",
//   authDomain: "ginasiogoodhealth.firebaseapp.com",
//   projectId: "ginasiogoodhealth",
//   storageBucket: "ginasiogoodhealth.appspot.com",
//   messagingSenderId: "409516042590",
//   appId: "1:409516042590:web:a3d4b51f8cec02223a47cf",
//   measurementId: "G-HK7N6VG2EW"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);