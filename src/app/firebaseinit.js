import firebase from 'firebase';
import 'firebase/firestore';

console.log('FIREBASE INIT');
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
  console.log('Will try to initialise firebase');
  if (!firebase.apps.length) {
    console.log('Firabse not initialised yet! Initialising!');
    firebaseApp = firebase.initializeApp(config);
    firestore = firebaseApp.firestore();
  } else {
    console.log('Firebase already initialised! Not initialising!');
    firebaseApp = firebase.app();
    firestore = firebaseApp.firestore();
  }
} catch (err) {
  console.warn('Firebase already initialised!', err);
}

export default firestore;
export const firebaseDatabase = firebaseApp.database();
