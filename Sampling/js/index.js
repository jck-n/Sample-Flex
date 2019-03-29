// jQuery function utilizing a button to hide and display new content windows.

$(document).ready(function(){
    $(".illusion-container").fadeOut();
    $(".content-button").click(function(){
        $(".content-container, .content-button").fadeOut(2000);
        $(".illusion-container, .spinner-masthead").delay(2000).fadeIn(2000);
    });
});