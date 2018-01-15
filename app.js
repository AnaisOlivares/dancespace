// Initialize Firebase
var config = {
  apiKey: "AIzaSyCJlEMeaDXhGRe7AFdeUd-_dHrTKd75Ah4",
  authDomain: "prueba-8358a.firebaseapp.com",
  databaseURL: "https://prueba-8358a.firebaseio.com",
  projectId: "prueba-8358a",
  storageBucket: "prueba-8358a.appspot.com",
  messagingSenderId: "876058746890"
};
firebase.initializeApp(config);

var user = null;

var $logGoo = $('#google');

$logGoo.on('click', googleLog);

function googleLog(event) {

  event.preventDefault();

  var provider = new firebase.auth.GoogleAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      var user = firebase.auth().currentUser;
      name = user.displayName;
      console.log(user);
      console.log(name);
      if (user) {
        window.location.href = 'views/discover';
      }
    })
}

function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture: imageUrl
  });
}

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.

    writeUserData((user.providerData[0].uid), (user.displayName), (user.email), (user.photoURL));
  } else {
    // No user is signed in.
  }
});