 import firebase from 'firebase/app'
 import 'firebase/firestore'

 // Your web app's Firebase configuration


 var firebaseConfig = {
     apiKey: "AIzaSyDT8G_68Hb3fgW5qx11GzNQ4Ikh5pdZqow",
     authDomain: "todo-list-vuejs.firebaseapp.com",
     databaseURL: "https://todo-list-vuejs.firebaseio.com",
     projectId: "todo-list-vuejs",
     storageBucket: "todo-list-vuejs.appspot.com",
     messagingSenderId: "356433843998",
     appId: "1:356433843998:web:0795986f33c6568fca9b0f"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 const db = firebase.firestore();


 export default db;