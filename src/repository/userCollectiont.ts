import { db } from '../config/firebaseConfig';

export const userCollection = db.collection('USERS');

export const updateUserData = async (userId: string, data: any) => {
  await userCollection.doc(userId).set(data, { merge: true });
};

export const fetchUserData = async (userId: string) => {
  const doc = await userCollection.doc(userId).get();
  if (!doc.exists) {
    throw new Error('User not found');
  }
  return doc.data();
};