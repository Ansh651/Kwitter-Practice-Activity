
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCKNOmCMXX-PAVQ-QdLwZO6K4_qUAvNkd0",
    authDomain: "letschat-d2203.firebaseapp.com",
    databaseURL: "https://letschat-d2203-default-rtdb.firebaseio.com",
    projectId: "letschat-d2203",
    storageBucket: "letschat-d2203.appspot.com",
    messagingSenderId: "19587294804",
    appId: "1:19587294804:web:07e2a54ea560e237e8efc1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
  function AddUser(){
      user_name=document.getElementById("user_name").value ;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });

  }