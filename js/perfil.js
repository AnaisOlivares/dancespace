$(document).ready(function () {
  var btn = $('#btn');
  var textarea = $('#textarea');
  var $containerPost = $('#container-post');

  //  función que valida si hay espacio o no
  textarea.keyup(function () {
    var long = textarea.val().length;
    console.log($('#textarea').val().length);
    if (long === 0) {
      btn.attr('disabled', true);
      console.log('no hay nada');
    } else {
      console.log('va');
      btn.attr('disabled', false);
    }
  });

  function addTask() {
    var taskContent = textarea.val();
    var containerPost = $('#container-post');
    var newDiv = $('<div>');
    newDiv.addClass('square-global col-md-9 col-md-offset-3 col-xs-9');
    newDiv.attr('id', 'post');
    containerPost.append(newDiv);
    var label = $('<label>');
    newDiv.append(label).append('<div class="display"><button class="btn">Comentar</button></div>');
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
  }

  btn.click(function () {
    addTask();
    time();
    textarea.val('');
    btn.disabled = true;
  });

  function time() {
    var actualDate = new Date();
    var actualHour = actualDate.getHours() + ':' + actualDate.getMinutes();
    return actualHour;
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
    $('.followers-modal').append('<div><img src="../../' + data[i].image + '" class="image-modal-size"><p class="name-display">' + data[i].name + '</p><button class="btn"> Dejar de seguir</button></div>');
  }
})