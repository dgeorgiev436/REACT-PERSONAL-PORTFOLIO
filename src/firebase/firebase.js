import { initializeApp } from 'firebase/app';
import "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyA62OvipwvmDsDHgoM8v_9Np8_7ZnlWPLU",
  authDomain: "react-portfolio-contact-84de8.firebaseapp.com",
  projectId: "react-portfolio-contact-84de8",
  storageBucket: "react-portfolio-contact-84de8.appspot.com",
  messagingSenderId: "147858345367",
  appId: "1:147858345367:web:b8d4bf03660cd2b8b608d2"
};

const firebaseDb = initializeApp(firebaseConfig);

// export default firebaseDb.database.ref;
export default firebaseDb