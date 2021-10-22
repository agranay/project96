var firebaseConfig = {
    apiKey: "AIzaSyAC68NHHrPWB_Lg11l47RGWpdg5OqM9Eao",
    authDomain: "project93-b5a9b.firebaseapp.com",
    databaseURL: "https://project93-b5a9b-default-rtdb.firebaseio.com",
    projectId: "project93-b5a9b",
    storageBucket: "project93-b5a9b.appspot.com",
    messagingSenderId: "132277065379",
    appId: "1:132277065379:web:b9ff0908e5c6e870135116",
    measurementId: "G-6E2XJXLL52"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

   user_name = localStorage.getItem("Username");
   room_name = localStorage.getItem("Roomname");
   document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";
   function send()
   {
       msg = document.getElementById("takemsg").value
       firebase.database().ref(room_name).push({
           name:user_name,
           message:msg,
           like:0
       });
       document.getElementById ("takemsg").value=" " ;
   }