import firebase from "firebase"

var firebaseConfig = {
    apiKey: 'AIzaSyBPuNyX7aj07cAq4UGhGdWWBD3P8_L-XpE',
    authDomain: 'bemparado-feef6.firebaseapp.com',
    databaseURL: 'https://bemparado-feef6-default-rtdb.firebaseio.com',
    projectId: 'bemparado-feef6',
    storageBucket: 'bemparado-feef6.appspot.com',
    messagingSenderId: '97100660183',
    appId: '1:97100660183:web:f2601f9db7a28b160ddf92',
    measurementId: 'G-R8S8GT95TD'
  }

firebase.initializeApp(firebaseConfig)
// Enable offline support
firebase.firestore().enablePersistence()
  .catch(function(err) {
      if (err.code == 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
      }
  })

firebase.getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = firebase.auth().onAuthStateChanged(user => {
        console.log(user)
        unsubscribe();
        resolve(user);
      }, reject);
    })
  };

console.log(firebase)
export default firebase
