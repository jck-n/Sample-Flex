// jQuery function utilizing a button to hide and display new content windows.

$(document).ready(function(){
    $(".illusion-container").hide();
    $(".content-button").click(function(){
        $(".content-container, .content-button").fadeOut(2000);
        $(".illusion-container, .spinner-masthead").delay(2000).fadeIn(2000);
    });
});
$(document).ready(function(){
    $(".spinner-button").click(function(){
        $(".illusion-square").fadeOut(2000);
        $(this).text("Click to Re-Enable Cover Boxes");
        $("button:last-child").addClass("recover");
    });
    $(".recover").click(function(){
        $(".illusion-square").fadeIn(2000);
    });
});