import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD1dvbaCz12xeZofe6vS8yfTB-7O2p5ggg',
  authDomain: 'website-52fbe.firebaseapp.com',
  databaseURL: 'https://website-52fbe-default-rtdb.firebaseio.com',
  projectId: 'website-52fbe',
  storageBucket: 'website-52fbe.appspot.com',
  messagingSenderId: '953268376252',
  appId: '1:953268376252:web:48e93c648ac1d84470f6b9',
  measurementId: 'G-1T0Q01EEYZ'
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore();
export const auth = getAuth();
