import firebase from 'firebase/app' 
import 'firebase/firestore'
import 'firebase/auth'

 
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyApSBpwTaLRoiDgwKg8XChp4ZqGTIfsIr0",
    authDomain: "water-b4e50.firebaseapp.com",
    databaseURL: "https://water-b4e50.firebaseio.com",
    projectId: "water-b4e50",
    storageBucket: "water-b4e50.appspot.com",
    messagingSenderId: "615369478573"
  };

  firebase.initializeApp(config);

  firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase;