// seleccion, filtrado
$(document).ready(function() {
  $('#filterInput').on('keyup', function() {
    var value = $(this).val().toLowerCase();
    $('#ul li').filter(function() {
      $(this).toggle($(this).html().toLowerCase().indexOf(value) > -1);
    });
  });

  $('.effects').on('mouseover', function() {
    $(this).animate({'border-radius': '100px'}, 'slow');
    // lo dejo como opción
    $(this).animate({'width': '50%'}, 'slow');
    $(this).css({'background': '#db791f'}, 'slow');
  });
  $('.effects').on('mouseout', function() {
    $(this).animate({'border-radius': '0px'}, 'slow');
    $(this).css({'background': 'none'}, 'slow');
    $(this).animate({'width': '40%'}, 'slow');
  });

  // $('#hola').on('click', function() {
  //   $(this).
  // });
});
