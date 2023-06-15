document.querySelectorAll('a[href^="#"').forEach(anchor => {
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior : "smooth"
    });
  })
})
import firebase from './firebaseConfig';

// Now you can use the `firebase` object to interact with Firebase services
const database = firebase.database();
// ...


