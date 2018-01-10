//
$(function () {
  var groups = [
    'be your self',
    'we can dance',
    'dance with us',
    'express yourself'
  ];
  $("#inputGroups").autocomplete({
    source: groups
  });
});

$(document).ready(function(){
  var $boxPages = $('#box-pages');
  
  function totalPages(e) {
    for (i = 0; i < data1.length; i++) {
      $boxPages.append('<div class="col-xs-10 col-md-6 col-md-offset-2 pages square-global" id="pages" data-name="' + data1[i].name + '"><p class="name-page">' + data1[i].name + '</p><img class="img-pages img-responsive"  src="' + data1[i].image + '"><p>'+ data1[i].type + '</div>')
    }
  } 
  totalPages();
  $boxPages.hide();
});


var $inputGroups = $('#inputGroups');

function showSearch() {
  var userSearch = $inputGroups.val().toLowerCase();
  $('.pagess').each(function () {
    var nameGroup = $(this).text();
    if (nameGroup.indexOf(userSearch) !== -1) {
      $(this).show();
    }
  });
};

$inputGroups.keyup(showSearch);
