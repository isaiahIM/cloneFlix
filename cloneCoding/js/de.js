$(document).ready(function(){
    $("[id^='d_Btn']").click(function(){
        var btnId = $(this).attr("id").replace("d_Btn", "");
        $("[id^='d_hidden']").not("#d_hidden" + btnId).slideUp();
        $("#d_hidden" + btnId).slideToggle();
    });
});
