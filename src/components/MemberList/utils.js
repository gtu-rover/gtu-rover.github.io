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
import { MEMBERS_ORDER } from '../../constants';

export const fetchMembers = async (dbPath) => {
  const members = [];
  const membersRef = collection(db, dbPath);
  const docs = await getDocs(query(membersRef));
  docs.forEach((member) => {
    members.push({ ...member.data(), id: member.id });
  });
  return members;
};

export const sortMembers = (members) => {
  const orderTemplate = {};
  MEMBERS_ORDER.forEach((s) => (orderTemplate[s] = null));
  return Object.assign(orderTemplate, members);
};

export const setMember = (data, dbPath) => {
  return new Promise((resolve, reject) => {
    setDoc(doc(db, dbPath, data.id), data).then(() => resolve(data));
  });
};

export const addNewMember = (defaults, dbPath) => {
  return new Promise((resolve, reject) => {
    const newMember = {
      team: defaults.team || 'unknown',
      name: defaults.name || 'name'
    };
    addDoc(collection(db, dbPath), newMember).then((docRef) => {
      resolve({ ...newMember, id: docRef.id });
    });
  });
};

export const deleteMember = (id, dbPath) => {
  return new Promise((resolve, reject) => {
    deleteDoc(doc(db, dbPath, id)).then(() => resolve());
  });
};
