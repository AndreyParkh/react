import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const firebaseRef = firebase.database().ref();

const provider = new firebase.auth.GithubAuthProvider();
const auth = firebase.auth();
const storage = firebase.storage();
const storageRef = storage.ref();

export {
  auth,
  provider,
  firebaseRef,
  storage,
  storageRef,
};
