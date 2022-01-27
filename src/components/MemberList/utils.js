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

export const fetchMembers = async () => {
  const members = [];
  const membersRef = collection(db, 'members');
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

export const setMember = (data) => {
  return new Promise((resolve, reject) => {
    setDoc(doc(db, 'members', data.id), data).then(() => resolve(data));
  });
};

export const addNewMember = (defaults) => {
  return new Promise((resolve, reject) => {
    const newMember = {
      team: defaults.team || 'unknown',
      name: defaults.name || 'name'
    };
    addDoc(collection(db, 'members'), newMember).then((docRef) => {
      resolve({ ...newMember, id: docRef.id });
    });
  });
};
