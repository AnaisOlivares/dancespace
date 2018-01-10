$(document).ready(function(){

  var btn = $('#btn');
  btn.disabled = true;
  var textarea = $('#textarea');

  textarea.keyup(function () {
    validation();
  });

  function validation() {
    var long = textarea.val().length;
    var onlyText = textarea.val().replace(/\s/g, '');
    if (long == 0 || onlyText == 0) {
      btn.disabled = true;
    }
    else {
      btn.disabled = false;
    }
  }
  btn.click(function () {
    addTask();
    time();
    textarea.val('');
    btn.disabled = true;
  });
  function addTask() {
    var taskContent = textarea.val();
    var containerPost = $('#container-post');
    var newTask = $('<div>');
    newTask.addClass('square-global col-md-9 col-md-offset-3 col-xs-9');
    newTask.attr("id", "post");
    containerPost.append(newTask);
    var label = $('<label>');
    newTask.append(label).append('<div class="display"><button class="btn">Comentar</button></div>');
    var text = $(document.createTextNode(taskContent));
    label.append(text).append('  ' + time());
    var icon = $('<i>');
    icon.addClass('glyphicon glyphicon-trash icon');
    newTask.append(icon);
    textarea.val('');

    function labeledTask() {
      label.toggleClass('labeled');
    }
    icon.click(function () {
      deleteTask();
    });
    function deleteTask() {
      newTask.remove()
    }
  }
  
  function time() {
    var actualDate = new Date();
    var actualHour = actualDate.getHours() + ':' + actualDate.getMinutes();
    return actualHour;
  }
})
