$(document).ready(function() {

    /* Sticky navbar */
    $(".js__features").waypoint(function(direction) {
        if(direction == "down"){
            //$('nav').removeClass("sticky animate__animated animate__fadeOut");
            if(! $('nav').hasClass("sticky") ){
                $('nav').addClass("sticky animate__animated animate__fadeIn");
            }
            
        }
        else{
            if($('nav').hasClass("sticky") ){
                $('nav').removeClass("sticky animate__animated animate__fadeIn");
            }
        }}, 
        { offset: "60px"}
    )
    
    /* Scroll on buttons */
    $(".js__scroll__to__prices").click(function () {
        $("html, body").animate({scrollTop: $(".js__prices").offset().top}, 2000);
    })

    $(".js__scroll__to__features").click(function () {
        $("html, body").animate({scrollTop: $(".js__features").offset().top}, 1000);
    })

    
    /* Navigation scroll  */
    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
            return false;
            } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
            };
        });
        }
    }
    });

    /* Animations on scroll */

    $(".js__wp__1").waypoint(function(direction){
        $(".js__wp__1").addClass('animate__animated animate__fadeIn');  // agregar if else como en la sticky navbar
    }, {offset: "50%"});

    $(".js__wp__2").waypoint(function(direction){
        $(".js__wp__2").addClass('animate__animated animate__fadeIn');
    }, {offset: "50%"});

    $(".js__wp__3").waypoint(function(direction){
        $(".js__wp__3").addClass('animate__animated animate__fadeIn');
    }, {offset: "50%"});
    $(".js__wp__4").waypoint(function(direction){
        $(".js__wp__4").addClass('animate__animated animate__jackInTheBox');
    }, {offset: "50%"});

    /* Nav navigation */

    $(".js__mobile__nav").click(function () {
        let nav = $('.js__navbar');
        let icon = $(".js__mobile__nav");
        nav.slideToggle(200);

        
    })
    





    
})
