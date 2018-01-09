// Initialize Firebase
(function () {
  var config = {
    apiKey: "AIzaSyChMkuY21z3tcoS-VLwCHAk0mYwk1SYwTw",
    authDomain: "dancespace2-6e1cc.firebaseapp.com",
    databaseURL: "https://dancespace2-6e1cc.firebaseio.com",
    projectId: "dancespace2-6e1cc",
    storageBucket: "dancespace2-6e1cc.appspot.com",
    messagingSenderId: "675415849876"
  };

  firebase.initializeApp(config);

  // validando formulario

  var verifyEmail = false;

  $inputEmail3.on('keyup', function(){
    var input = $inputEmail3.val();
    var expReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(expReg.test(input)){
      verifyEmail = true;
      $btnSignUp.attr('disabled', false);
    } else {
      $btnSignUp.attr('disabled', true);
    }
  })

  // Obtener email y pass
  var $inputEmail3 = $('#inputEmail3');
  var $inputPassword3 = $('#inputPassword3');
  var $btnLogin = $('#btnLogin');
  var $btnSignUp = $('#btnSignUp');

  var database = firebase.database();

  // Sign in
  $btnLogin.on('click', function() {
    var $email = $inputEmail3.val();
    var $pass = $inputPassword3.val();
    var auth = firebase.auth();

    var promise = auth.signInWithEmailAndPassword($email, $pass);

  });

  // Sign up
  $btnSignUp.click(function(e) {
    var $email = $inputEmail3.value;
    var $pass = $inputPassword3.value;
    var auth = firebase.auth();

    // Sign in
    var promise = auth.createUserWithEmailAndPassword($email, $pass);

  });

}());
