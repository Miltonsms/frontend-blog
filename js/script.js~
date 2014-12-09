// Javascript Code.
$(document).ready(function(){
    $("#div1").load("_posts/paradimas.md");
  });

$(document).ready(function(){
    $('#button').click(function(){
        var toAdd = $('input[name=checkListItem]').val();
        $('.list').append('<div class="item">' + toAdd + '</div>');
        var toAdd = $('input[name=comentario]').val();
        $('.list').append('<div class="item">' + toAdd + '</div>');
    });
    
    $(document).on("click", ".item", function() {
    $(this).remove();
    });
});
// boton1
$(document).ready(function(){ $('#alternar-respuesta-ej5').toggle( function(e){ $('#p1').slideDown();$(this).text('Ocultar respuesta');e.preventDefault();},function(e){ $('#p1').slideUp();$(this).text('Ver respuesta');e.preventDefault();});});

//posts 2

$(document).ready(function(){
    $("#div2").load("_posts/valores.md");
  });

$(document).ready(function(){
    $('#butto').click(function(){
        var toAdd = $('input[name=checkListIte]').val();
        $('.lis').append('<div class="item">' + toAdd + '</div>');
        var toAdd = $('input[name=comentari]').val();
        $('.lis').append('<div class="item">' + toAdd + '</div>');
    });
    
    $(document).on("click", ".item", function() {
    $(this).remove();
    });
});
// boton2
$(document).ready(function(){ $('#boton2').toggle( function(e){ $('#p2').slideDown();$(this).text('Ocultar respuesta');e.preventDefault();},function(e){ $('#p2').slideUp();$(this).text('Ver respuesta');e.preventDefault();});});

