$(document).ready(function() {
    var contentPlacement = $('#nav').position().top + $('#nav').height();
    $('#content').css('margin-top',contentPlacement);
});