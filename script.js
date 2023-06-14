// -------------------------------------------------navbar-----------------------------


$(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});

// -------------------------------------------------navbar-----------------------------
// ----------------------------------------up btn --------------------------------------------------------
$(window).scroll(function () {
    $('a').toggleClass('scrollh', $(this).scrollTop() > 50);
});

$(".demoupbtn").click(function(){
    $("body,html").animate({scrollTop:'0'},1000)
})

// --------------------------------------------------up btn --------------------------------------------------------
$("a[href^='#']").click(function(e) {
    let ax = $(e.target).attr("href");
    let ay = $(ax).offset().top;
    $("body,html").animate({scrollTop:ay},1000)
})



$('body').scrollspy({target: '.navbar-fixed-top'})

// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
$(document).ready(function(){
    
    $("#store-container").fadeOut(3000,function(){
        $("#loading").fadeOut(500,function(){
          
            $("#loading").remove()
        })
    })
})

$(".loading").height($(window).height());
$(".loading").width($(window).width());

    
$(".loading img").css({
    paddingTop: ($(".loading").height() - $(".loading img").height()) / 2,
    paddingLeft: ($(".loading").width() - $(".loading img").width()) / 2
});

$(window).resize(function () {
   
    "use strict";
    
    $(".loading").height($(window).height());
    $(".loading").width($(window).width());


    $(".loading img").css({
        paddingTop: ($(".loading").height() - $(".loading img").height()) / 2,
        paddingLeft: ($(".loading").width() - $(".loading img").width()) / 2
    });
    
});

$(window).mousemove(function (e) {
   
    "use strict";
    
    $(".original").css({
        left: e.pageX - 16,
        top: e.pageY - 16
    });
    
});
