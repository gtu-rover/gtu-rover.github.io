import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db } from '../utils/firebase';
import { doc, setDoc } from 'firebase/firestore';

export const updateSponsorhipFile = (file) => {
  const fileRef = ref(getStorage(), `sponsorhipFile`);
  return new Promise((resolve, reject) => {
    uploadBytes(fileRef, file).then((snapshot) => {
      console.log('Uploaded a blob or file!');
      getDownloadURL(snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
        resolve(downloadURL);
        const documentsRef = doc(db, 'documents', 'sponsorshipFile');
        setDoc(documentsRef, { link: downloadURL });
      });
    });
  });
};
