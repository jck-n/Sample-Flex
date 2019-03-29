// jQuery function utilizing a button to hide and display new content windows.

$(document).ready(function(){
    $(".content-button").click(function(){
        $(".content-container").fadeOut(2000);
        $(".illusion-container").delay(2000).fadeIn(2000);
    });
});