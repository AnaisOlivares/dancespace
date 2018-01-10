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
  var $inputGroups = $('#inputGroups');
  var $pages = $('#pages');
  
  function totalPages(e) {
    for (i = 0; i < data1.length; i++) {
      $boxPages.append('<div class="col-xs-10 col-md-6 col-md-offset-2 pages square-global" id="pages" data-name="' + data1[i].name + '"><h1 class="name-page">' + data1[i].name + '</h1><img class="img-pages img-responsive"  src="' + data1[i].image + '"><div><p>'+ data1[i].type + '</div></div>')
    }
  } 

  totalPages();
  
  
  function showSearch() {
    var userSearch = $inputGroups.val().toLowerCase();
    $pages.hide();
    $pages.each(function () {
      var nameGroup = $(this).data('name');
      if (nameGroup.indexOf(userSearch) !== -1) {
        $(this).show();
        console('son iguales');
      }
    });
  };
  
  $inputGroups.keyup(showSearch);
  
});