$(document).ready(function(){
  $("button").click(function(){
    $("#div1").load("_posts/2014-11-09-cognits-frontend-blog.md");
     $('#respuesta-ej1').toggle('slow');
  });
});
	$(document).ready(function(){ 
  	 $("button").on('click',function(){
      $("#div1").toggle('slow');
   });

});

