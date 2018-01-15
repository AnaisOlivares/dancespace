// $(document).ready(function () {
var btn = $('#btn');
var textarea = $('#textarea');
var $containerPost = $('#container-post');

//  función que valida si hay espacio o no
textarea.keyup(function () {
  var long = textarea.val().length;
  console.log($('#textarea').val().length);
  if (long !== 0) {
    console.log('puedo postear');
    btn.attr('disabled', false);
  } else {
    btn.attr('disabled', true);
    console.log('no puedo');
  }
});

// función que hace el post
function addTask() {
  var taskContent = textarea.val();
  var containerPost = $('#container-post');
  var newDiv = $('<div>');
  newDiv.addClass('square-global col-md-9 col-md-offset-3 col-xs-9 post');
  newDiv.attr('id', 'post');
  containerPost.after(newDiv);
  var label = $('<label>');
  newDiv.append(label).append('<div class="display"><button class="btn btncoment">Comentar</button></div>');
  var text = $(document.createTextNode(taskContent));
  label.append(text).append('  ' + time());
  var icon = $('<i>');
  icon.addClass('glyphicon glyphicon-trash icon');
  newDiv.append(icon);
  textarea.val('');

  function labeledTask() {
    label.toggleClass('labeled');
  }

  icon.click(function () {
    deleteTask();
  });

  function deleteTask() {
    newDiv.remove();
  }

  $('.btncoment').click(function () {
    addComent();
    // console.log('comenta');
    // $('.post').append('<div> <input type="text" placeholder="Comenta"></div>');
  });

  $('.coment').on("keydown", function (event) {
    // var value = this.value + String.fromCharCode(e.keyCode);
    console.log('hi');
    console.log(event.keyCode);
  })

}



btn.click(function () {
  addTask();
  time();
  textarea.val('');
  // btn.disabled = true;
});


function time() {
  var actualDate = new Date();
  var actualHour = actualDate.getHours() + ':' + actualDate.getMinutes();
  return actualHour;
}

function addComent() {
  $('.post').append('<div><input type="text" placeholder="Comenta" class="coment"></div>');
  console.log('le diste click');
}

// función que postea Imágenes

$('#exampleInputFile').on('change', function (img) {
  var file = img.target.files[0];
  var fr = new FileReader();

  fr.onload = function (ev2) {
    console.dir(ev2);
    $('#i').attr('src', ev2.target.result);
    $('#i').addClass('img-responsive square-global');
  };
  fr.readAsDataURL(file);
});

// función de modal de siguiendo

$('.following').on('click', function () {
  console.log('hizo click');
  for (var i = 0; i < 8; i++) {
    console.log('funciona for');
    $('.following-modal').append('<div><img with="6rem" height="6rem" src="../../' + data[i].image + '" class="image-modal-size"><p class="name-display">' + data[i].name + '</p><button class="btn"> Dejar de seguir</button></div>');
  }
})

// función modal de seguidores

$('.followers').on('click', function () {
  console.log('hizo click');
  for (var i = 8; i < 17; i++) {
    console.log('funciona for');
    $('.followers-modal').append('<div><img src="../../' + data[i].image + '" class="image-modal-size"><p class="name-display">' + data[i].name + '</p><button class="btn">Seguir</button></div>');
  }
})

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

var $nameUser = $('.userName');
var $imgUser = $('.imgUser');

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    console.log(user.displayName);

    var displayName = user.displayName;
    var email = user.email;
    var photoURL = user.photoURL;
    var uid = user.uid;
    var providerData = user.providerData;

    $nameUser.text(displayName);
    $imgUser.attr('src', photoURL);
  } else {
    console.log('no');
  }
});