$(document).ready(function() {
    $("#twd_opa_controls").on('click', 'span', function() {
        $("#twd_opa img").removeClass("opaque");

        var newImage = $(this).index();

        $("#twd_opa img").eq(newImage).addClass("opaque");

        $("#twd_opa_controls span").removeClass("selected");
        $(this).addClass("selected");
    });
});

/* Flip Slideshow */
$(document).ready(function() {
    $('#slide_flip_controls').on('click', 'span', function() {
        $("#slide_flip_images").css("transform", "translateX(" + $(this).index() *

            -600 + "px)");

        $("#slide_flip_controls span").removeClass("selected");
        $(this).addClass("selected");
    });
});
el = document.getElementById("simple-ss");
el.onclick = links;

function links() {
    left = parseInt(getComputedStyle(el).getPropertyValue("background-position").split(" ", 1));

    /* DEFINE POSITIONS FOR CLICK EVENTS */
    if (left >= -400) {

        // First until about half way scrolled over
        alert("first");
        //window.open("https://www.google.com");

    } else if (left >= -1200) {

        // Second when half way scrolled either side
        alert("second");
        //window.open("https://www.google.com");

    } else if (left >= -1600) {

        // Third when over half way into banner
        alert("third");
        //window.open("https://www.google.com");

    }

}