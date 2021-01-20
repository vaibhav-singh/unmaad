function openCity(cityName) {
    var i;
    var x = document.getElementsByClassName("city ");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none ";
    }
    document.getElementById(cityName).style.display = "block ";
}

function openCity(cityName, element) {
    //var i = element.parentNode.parentNode.getElementsByClassName("city ");
    //var j = i.length;

    var x = element.parentNode.parentNode.getElementsByClassName("city ");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none ";
    }
    document.getElementById(cityName).style.display = "block ";
}

function clicky_dg() {
    document.getElementById("myModal_dg").style.display = "block ";
}

function closey_dg() {
    document.getElementById("myModal_dg").style.display = "none ";
    document.body.style.overflow = "scroll";
    document.body.classList.remove("preview-open");
}

function clicky_df() {
    document.getElementById("myModal_df").style.display = "block ";
}

function closey_df() {
    document.getElementById("myModal_df").style.display = "none ";
    document.body.style.overflow = "scroll";
    document.body.classList.remove("preview-open");
}

function clicky_dj() {
    document.getElementById("myModal_dj").style.display = "block ";
}

function closey_dj() {
    document.getElementById("myModal_dj").style.display = "none ";

    document.body.style.overflow = "scroll";
    document.body.classList.remove("preview-open");
}

function clicky_dge() {
    document.getElementById("myModal_dge").style.display = "block ";
}

function closey_dge() {
    document.getElementById("myModal_dge").style.display = "none ";

    document.body.style.overflow = "scroll";
    document.body.classList.remove("preview-open");
}

function clicky_dsn() {
    document.getElementById("myModal_dsn").style.display = "block ";
}

function closey_dsn() {
    document.getElementById("myModal_dsn").style.display = "none ";

    document.body.style.overflow = "scroll";
    document.body.classList.remove("preview-open");
}

function clicky_dr() {
    document.getElementById("myModal_dr").style.display = "block ";
}

function closey_dr() {
    document.getElementById("myModal_dr").style.display = "none ";

    document.body.style.overflow = "scroll";
    document.body.classList.remove("preview-open");
}

function clicky_du() {
    document.getElementById("myModal_du").style.display = "block ";
}

function closey_du() {
    document.getElementById("myModal_du").style.display = "none ";

    document.body.style.overflow = "scroll";
    document.body.classList.remove("preview-open");
}


function clicky_dw() {
    document.getElementById("myModal_dw").style.display = "block ";
}

function closey_dw() {
    document.getElementById("myModal_dw").style.display = "none ";

    document.body.style.overflow = "scroll";
    document.body.classList.remove("preview-open");
}

function clicky_dz() {
    document.getElementById("myModal_dz").style.display = "block ";
}

function closey_dz() {
    document.getElementById("myModal_dz").style.display = "none ";

    document.body.style.overflow = "scroll";
    document.body.classList.remove("preview-open");
}

var buttons = document.querySelectorAll('.swal-alert');
for (const button of buttons) {
    button.addEventListener('click', function() {
        swal("Registrations ", "Releasing Soon!", "info", {
            button: false,
        })
    });

}

var buttons = document.querySelector('.swal-alert-layout');
buttons.addEventListener('click', function() {
    swal({
        text: "Stage Layout",
        icon: "img/Events/Fashion/Stage.png",
        button: false,
    })
});