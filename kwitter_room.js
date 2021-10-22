 // Your web app's Firebase configuration
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
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;
  
          localStorage.setItem("Roomname",room_name);
      
          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}