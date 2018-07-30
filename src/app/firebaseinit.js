import firebase from 'firebase';
import 'firebase/firestore';

var config = {
  apiKey: 'AIzaSyANwSGI5HlCNaxSBrV66QUZofxtII4jW8o',
  authDomain: 'travay-dapp.firebaseapp.com',
  databaseURL: 'https://travay-dapp.firebaseio.com',
  projectId: 'travay-dapp',
  storageBucket: 'travay-dapp.appspot.com',
  messagingSenderId: '752035908821'
};

let firebaseApp;
let firestore;
try {
  if (!firebase.apps.length) {
    firebaseApp = firebase.initializeApp(config);
    firestore = firebaseApp.firestore();
  } else {
    firebaseApp = firebase.app();
    firestore = firebaseApp.firestore();
  }
} catch (err) {
  console.warn('Firebase already initialised!', err);
}

export default firestore;
export const firebaseDatabase = firebaseApp.database();
export default firebaseApp.firestore()

