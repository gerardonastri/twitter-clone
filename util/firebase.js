import firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZDwm_WiLTaht9gKI-iLzqTxuyD_mqv-8",
  authDomain: "twitter-clo-1c202.firebaseapp.com",
  projectId: "twitter-clo-1c202",
  storageBucket: "twitter-clo-1c202.appspot.com",
  messagingSenderId: "568076731817",
  appId: "1:568076731817:web:34a7468381dfb11c6230b8",
  measurementId: "${config.measurementId}"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
const storage = firebase.storage();
export default storage;