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

// function signIn(){
//   if(!firebase.auth().currentUser){
//     var provider = new firebase.auth.GoogleAuthProvider();
//     provider.addScope('https:www.googleapis.com/auth/plus.login');
//     firebase.auth().signInWithPopup(provider).then(function(result){
//       var token = result.credential.accesstoken;
//       var user = result-user;
//     }).catch(function(error){
//       var errorCode = error.Code;
//       var errorMessage = error.message;
//       var erroremail = error.email;
//       var credential = error.credential;
//       // if(errorcode === 'auth/account-exists-with-different-credential'){
//       //   alert('Es el mismo usuario');
//       // }
//     })
//     window.location.href = 'views/discover/';
//   } else {
//     firebase.auth().signOut();
//   }
// }


// $(function () {
//   var groups = [
//     'be your self',
//     'we can dance',
//     'dance with us',
//     'aprende salsa'
//   ];
//   $("#inputGroups").autocomplete({
//     source: groups
//   });
// });