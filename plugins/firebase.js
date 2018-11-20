import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const config = {
  apiKey: "AIzaSyAL4Ws5WqF1avHmsdNF4EPgPOF0TwY0sdA",
  authDomain: "alex-kimeev-portfolio.firebaseapp.com",
  databaseURL: "https://alex-kimeev-portfolio.firebaseio.com",
  projectId: "alex-kimeev-portfolio",
  storageBucket: "alex-kimeev-portfolio.appspot.com",
  messagingSenderId: "909845025607"
};

!firebase.apps.length ? firebase.initializeApp(config) : ''

export const auth = firebase.auth();
export const db = firebase.database();
export default firebase
