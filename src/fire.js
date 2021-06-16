import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBr7A01X2ZSVBaxJL_1tYbQneqsiWVYYaY",
    authDomain: "charity-71527.firebaseapp.com",
    projectId: "charity-71527",
    storageBucket: "charity-71527.appspot.com",
    messagingSenderId: "373054704911",
    appId: "1:373054704911:web:1f9a284f86055e8076827a",
    measurementId: "G-7F7N7GKKZK"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

  export default fire;