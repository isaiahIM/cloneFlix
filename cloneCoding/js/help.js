$(document).ready(function(){
    $("[id^='Btn']").click(function(){
        var btnId = $(this).attr("id").replace("Btn", "");
        $("[id^='hidden']").not("#hidden" + btnId).slideUp();
        $("#hidden" + btnId).slideToggle();
    });
});

    $(function() {
    var search_box = $("#search-box").offset().top;
    $(window).scroll(function() {
        var window = $(this).scrollTop();
        if(search_box <= window) {
        $("#search-box").addClass("fixed");
        }else{
        $("#search-box").removeClass("fixed");
        }
    })
});