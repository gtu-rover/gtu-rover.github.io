import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db } from '../../utils/firebase';
import {
  doc,
  setDoc,
  collection,
  getDocs,
  query,
  addDoc,
  deleteDoc
} from 'firebase/firestore';
import { SPONSORS_ORDER } from '../../constants';

export const addNewSponsor = (image, defaults, dbPath) => {
  const imageRef = ref(getStorage(), `sponsors/${image.name}`);
  return new Promise((resolve, reject) => {
    uploadBytes(imageRef, image).then((snapshot) => {
      console.log('Uploaded a blob or file!');
      getDownloadURL(snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
        const newSponsor = {
          image: defaults.image || downloadURL || '',
          css: defaults.css || 'img { }',
          link: defaults.link || '',
          group: defaults.group || ''
        };
        resolve(newSponsor);
        const list = collection(db, dbPath);
        addDoc(list, newSponsor);
      });
    });
  });
};

export const fetchSponsors = async (dbPath) => {
  const sponsors = [];
  const sponsorsRef = collection(db, dbPath);
  const docs = await getDocs(query(sponsorsRef));
  docs.forEach((sponsor) => {
    sponsors.push({ ...sponsor.data(), id: sponsor.id });
  });
  return sponsors;
};

export const sortSponsors = (sponsors) => {
  const orderTemplate = {};
  SPONSORS_ORDER.forEach((s) => (orderTemplate[s] = null));
  return Object.assign(orderTemplate, sponsors);
};

export const setSponsor = (data, dbPath) => {
  return new Promise((resolve, reject) => {
    setDoc(doc(db, dbPath, data.id), data).then(() => resolve(data));
  });
};

export const deleteSponsor = (id, dbPath) => {
  return new Promise((resolve, reject) => {
    deleteDoc(doc(db, dbPath, id)).then(() => resolve());
  });
};
