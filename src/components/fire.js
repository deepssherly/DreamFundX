import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDcHmTN2xVv1KQbA9C5VyqegEzdNjA3zwo",
    authDomain: "fundx-365ae.firebaseapp.com",
    projectId: "fundx-365ae",
    storageBucket: "fundx-365ae.appspot.com",
    messagingSenderId: "595845792336",
    appId: "1:595845792336:web:a23c92b80d6ac4a26b8755"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;