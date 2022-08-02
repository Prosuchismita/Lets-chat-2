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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg= document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}
