function x () {

   if($(".imges").html==" ")
   {
       $("footer").addClass("fixed-bottom");
   }

    $("img").hover(function(){
        var paragraph=$(this).next().html();
         $(".apendParag").html(paragraph);
    })

    $(".imges").hover(function(){
        
         $(".apendParag").html(" ");
    })


    
}

x();

