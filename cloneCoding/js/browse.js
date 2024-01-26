scroll(function(){
    var x = document.getElementsByClassName("sliders")[0];
    var step = window.outerWidth / 2;
    x.scrollLeft += step;
});

getScrollVal(function() {
    var x = document.getElementsByClassName("content")[0];

    var el2 = document.getElementsByClassName("right_arrow")[0];
    var right = x.scrollWidth - (x.scrollLeft + x.clientWidth) + 1;
    if (right <= 2) {
        el2.style.display = "none";
    } else {
        el2.style.display = "flex";
    }
}, 550);

getScrollVal();