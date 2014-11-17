// Javascript Code.
$(document).ready(function(){
    $("#div1").load("_posts/2014-11-09-cognits-frontend-blog.md");
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
    $("#div2").load("_posts/segundo.md");
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

//posts 3

$(document).ready(function(){
    $("#div3").load("_posts/segundo.md");
  });

$(document).ready(function(){
    $('#butt').click(function(){
        var toAdd = $('input[name=checkListIt]').val();
        $('.li').append('<div class="item">' + toAdd + '</div>');
        var toAdd = $('input[name=comentar]').val();
        $('.li').append('<div class="item">' + toAdd + '</div>');
    });
    
    $(document).on("click", ".item", function() {
    $(this).remove();
    });
});
// boton3
$(document).ready(function(){ $('#boton3').toggle( function(e){ $('#p3').slideDown();$(this).text('Ocultar respuesta');e.preventDefault();},function(e){ $('#p3').slideUp();$(this).text('Ver respuesta');e.preventDefault();});});
