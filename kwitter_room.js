
var firebaseConfig = {
      apiKey: "AIzaSyC6iSHtUyq8jooMFzU-6bty7uDHXF-ETzk",
      authDomain: "lets-chat-a0409.firebaseapp.com",
      databaseURL: "https://lets-chat-a0409-default-rtdb.firebaseio.com",
      projectId: "lets-chat-a0409",
      storageBucket: "lets-chat-a0409.appspot.com",
      messagingSenderId: "274301922790",
      appId: "1:274301922790:web:d141fadbc78c84d4ca3a27",
      measurementId: "G-EN65SK0MWL"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', 
function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
{childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - "+ Room_names);
      row = "<div class='room_name' id="+Room_name+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({

      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";

}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}