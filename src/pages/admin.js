import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import HomePage from '.';
import { useAuthState } from 'react-firebase-hooks/auth';
import { db } from '../utils/firebase';
import { GoogleAuthProvider } from 'firebase/auth';

const provider = new GoogleAuthProvider();

// const user = 'rover@gtu.edu.tr';
// const pass = 'gturover123';

const Admin = () => {
  const auth = getAuth();
  const [user] = useAuthState(auth);

  useEffect(() => {
    auth.onAuthStateChanged((u) => {
      if (u) return;
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.email;
          const credential = GoogleAuthProvider.credentialFromError(error);
        });
    });
  }, [user]);

  return <>{user && <HomePage editable />}</>;
};

export default Admin;
