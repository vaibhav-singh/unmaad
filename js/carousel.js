var carousel = document.querySelector('.carousel');
var scene = document.querySelector('.scene');
var cells = carousel.querySelectorAll('.carousel__cell');
var cellCount; // cellCount set from cells-range input value
var selectedIndex = 0;
var cellWidth = carousel.offsetWidth;
var cellHeight = carousel.offsetHeight;
var isHorizontal = true;
var rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
var radius, theta;
// var $div = $('div');
// var a = 0;
// console.log( cellWidth, cellHeight );

// window.requestAnimationFrame(autoPlayCarousel);
// window.addEventListener('focus', autoPlayCarousel);
// autoPlayCarousel();
// var my_time;
$(document).ready(function() {
    autoPlayCarousel();
    $(".scene").mouseenter(function() {
        clearTimeout(my_time);
    }).mouseleave(function() {
        autoPlayCarousel();
    });
});

function rotateCarousel() {
    var angle = theta * selectedIndex * -1;
    carousel.style.transform = 'translateZ(' + -radius + 'px) ' +
        rotateFn + '(' + angle + 'deg)';
}

// var prevButton = document.querySelector('.previous-button');
// prevButton.addEventListener('click', function() {
//     selectedIndex--;
//     rotateCarousel();
// });

// var nextButton = document.querySelector('.next-button');
// nextButton.addEventListener('click', function() {
//     selectedIndex++;
//     rotateCarousel();
// });

// var cellsRange = document.querySelector('.cells-range');
// cellsRange.addEventListener('change', changeCarousel);
// cellsRange.addEventListener('input', changeCarousel);



function autoPlayCarousel() {
    // setInterval(function() {
    //     selectedIndex++;
    //     a++;
    //     $div.stop();
    //     // .stop(true, true);
    //     rotateCarousel();
    // }, 2500);

    rotateCarousel();
    selectedIndex++;
    my_time = setTimeout('autoPlayCarousel()', 2500);
    // window.requestAnimationFrame(autoPlayCarousel);
}

// function autoStopCarousel() {
//     // setInterval(function() {
//     selectedIndex = selectedIndex;
//     // }, 2500);
// }

function changeCarousel() {
    cellCount = 7; //cellsRange.value;
    theta = 360 / cellCount;
    var cellSize = isHorizontal ? cellWidth : cellHeight;
    radius = Math.round((cellSize / 2) / Math.tan(Math.PI / cellCount));
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        if (i < cellCount) {
            // visible cell
            cell.style.opacity = 1;
            var cellAngle = theta * i;
            cell.style.transform = rotateFn + '(' + cellAngle + 'deg) translateZ(' + radius + 'px)';
        } else {
            // hidden cell
            cell.style.opacity = 0;
            cell.style.transform = 'none';
        }
    }

    rotateCarousel();
}

// var orientationRadios = document.querySelectorAll('input[name="orientation"]');
// (function() {
//     for (var i = 0; i < orientationRadios.length; i++) {
//         var radio = orientationRadios[i];
//         radio.addEventListener('change', onOrientationChange);
//     }
// })();

function onOrientationChange() {
    var checkedRadio = document.querySelector('input[name="orientation"]:checked');
    // isHorizontal = checkedRadio.value == 'horizontal';
    isHorizontal = true;
    rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
    changeCarousel();
}

// set initials
onOrientationChange();

var ticket = document.querySelector('#AmitTrivedi');
ticket.addEventListener('click', function() {
    // clearTimeout(my_time);
    // // $('#AmitTrivedi').waypoint(function() {
    // swal({
    //     title: "Amit Trivedi LIVE!",
    //     text: "Early Bird Tickets now available!\n Get yours today at 30% off.\n Limited period only!",
    //     // type: "info"
    //     icon: "info",
    //     buttons: "Buy Tickets Now!",
    // }).then(function() {
    //     window.open("https://www.townscript.com/e/amit-trivedi-live-unmaad-20-at-iim-bangalore-200402", "_blank");
    // });
    window.open("https://in.bookmyshow.com/events/amit-trivedi-live-unmaad-2020-at-iim-bangalore/ET00121219", "_blank");
});

// var rtu = document.querySelector('#RTU');
// rtu.addEventListener('click', function() {
//     clearTimeout(my_time);
//     // $('#AmitTrivedi').waypoint(function() {
//     window.open("RTU/rtu20.html", "_blank");
// });

var ticketEuphoria = document.querySelector('#Euphoria');
ticketEuphoria.addEventListener('click', function() {
    window.open("https://in.bookmyshow.com/events/amit-trivedi-live-unmaad-2020-at-iim-bangalore/ET00121219", "_blank");
});

var aboutus = document.querySelector('#About');
aboutus.addEventListener('click', function() {
    clearTimeout(my_time);
    // $('#AmitTrivedi').waypoint(function() {
    window.open("About/about.html", "_blank");
});

var artists = document.querySelector('#Artists');
artists.addEventListener('click', function() {
    clearTimeout(my_time);
    // $('#AmitTrivedi').waypoint(function() {
    window.open("About/about.html#mu-faq", "_blank");
});