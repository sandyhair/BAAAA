
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyBjoGlBnh1aNpv_zrSmjNheBFB1JynoDXI",
  authDomain: "kwitter-48ca2.firebaseapp.com",
  databaseURL: "https://kwitter-48ca2-default-rtdb.firebaseio.com",
  projectId: "kwitter-48ca2",
  storageBucket: "kwitter-48ca2.appspot.com",
  messagingSenderId: "920707602248",
  appId: "1:920707602248:web:95e199da234057a8d6c57d",
  measurementId: "G-CKW80LRKHD"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

    function addRoom()
{
    user_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(user_name).update({
      purpose : "addroomname"
    } 
    );
localStorage.setItem("room_name", room_name);
window.location= "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row = "<div class= 'room_name' id="+Room_name+" onclick='redirectoRoomName(this.id)>'>#"+Room_names +"<div><hr>";
document.getElementById("output").innerHTMl += row;
      //End code
      });});};
getData();

function redirectToRoomName()
{
  localStorage.setItem("room_name", name);
  window.location= "kwitter_page.html"
}
function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  windowlocation = "kwitter.html";
};