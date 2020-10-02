$(document).ready(function(){
    $(".header").height($(window).height());
    $(window).resize(function(){
        $(".header").height($(window).height());
        $(".services .container .services-images .row .ser-img .overlay").width($(".services .container .services-images .row .ser-img img").width())
        $(".services .container .services-images .row .ser-img .overlay").height($(".services .container .services-images .row .ser-img img").height())
         $(".services .container .services-images .row .ser-img .overlay h5").css({
             paddingTop:($(".services .container .services-images .row .ser-img .overlay").height()-20)/2
         });
         $("html,body").width($(window).width())
    });
    $(".text").css("paddingTop",($(window).height()-$(".text").outerHeight())/2);
    $(".services .container .services-images .row .ser-img .overlay").height($(".services .container .services-images .row .ser-img img").height())
   $(".services .container .services-images .row .ser-img .overlay").width($(".services .container .services-images .row .ser-img img").width())
    $(".services .container .services-images .row .ser-img .overlay h5").css({
        paddingTop:($(".services .container .services-images .row .ser-img .overlay").height()-20)/2
    });

    $(".header  .nav-link").click(function(e){
        e.preventDefault();
        $("html,body").animate({
            scrollTop : $("#"+$(this).data('scroll')).offset().top-40
        },1000)

        
    });
   
    $(".work .work-images img").click(function(){
        $($(this).data("pop")).fadeIn()
    });
    $(".pop .close").click(function(){
        $(".pop").fadeOut()
    })

    $(window).scroll(function(){
        if($(this).scrollTop()>100 ){
            $("nav").addClass("fixed");
           
       }
        else{
            $("nav").removeClass("fixed");
           
        }});

        $(window).scroll(function(){
            if($(this).scrollTop()>100 ){
                $(".header").addClass("mt");
               
           }
            else{
                $(".header").removeClass("mt");
               
            }
    });
    $("html,body").width($(window).width());

    $(".header i").click(function(){
        $("html,body").animate({
            scrollTop : $("body").height()
        },2000)
    })

    
    



























})



