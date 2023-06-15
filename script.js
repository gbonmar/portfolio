document.querySelectorAll('a[href^="#"').forEach(anchor => {
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior : "smooth"
    });
  })
})


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA3hNSfCVyNqAk83UkasRGas4Vp9vSYlBU",
  authDomain: "chat-app-portfolio-24bc8.firebaseapp.com",
  databaseURL: "https://chat-app-portfolio-24bc8-default-rtdb.firebaseio.com",
  projectId: "chat-app-portfolio-24bc8",
  storageBucket: "chat-app-portfolio-24bc8.appspot.com",
  messagingSenderId: "845272638719",
  appId: "1:845272638719:web:04c2d34f43285acc65d8ca"
};

firebase.initializeApp(firebaseConfig);

// Get the database reference
const database = firebase.database();

// Get chat elements
const chatForm = document.getElementById('chat-form');
const messageInput = document.getElementById('message-input');
const chatMessages = document.getElementById('chat-messages');

// Function to send a message
function sendMessage(e) {
  e.preventDefault();
  const message = messageInput.value.trim();

  if (message) {
    // Push the message to the database
    database.ref('messages').push().set({
      text: message,
      timestamp: firebase.database.ServerValue.TIMESTAMP
    });

    messageInput.value = '';
  }
}

// Function to display the chat messages
function displayMessages(snapshot) {
  chatMessages.innerHTML = '';

  snapshot.forEach(function(childSnapshot) {
    const message = childSnapshot.val().text;
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    chatMessages.appendChild(messageElement);
  });

  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Listen for new messages in the database
database.ref('messages').on('value', function(snapshot) {
  displayMessages(snapshot);
});

// Event listener for the chat form submission
chatForm.addEventListener('submit', sendMessage);
