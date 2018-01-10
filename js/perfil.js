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
    newTask.addClass('new');
    containerPost.append(newTask);
    var label = $('<label>');
    var check = $('<input>');
    newTask.append(label);
    var text = $(document.createTextNode(taskContent));
    label.append(text).append('  ' + time());
    var icon = $('<i>');
    icon.addClass('glyphicon glyphicon-trash icon');
    newTask.append(icon);

    textarea.val('')

    check.click(function () {
      labeledTask();
    });
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
