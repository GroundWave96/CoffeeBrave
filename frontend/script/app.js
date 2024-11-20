document.addEventListener("DOMContentLoaded", () => {
    //****************************************** MENU ***********************************************\\
    const menuIcon = document.querySelector(".menu-icon");
    const navMenu = document.querySelector(".nav-menu");


    menuIcon.addEventListener("click", () => {
        menuIcon.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    //****************************************** LOGIN ***********************************************\\
    const loginBtn = document.querySelector("#login-btn")
    const emailInput = document.querySelector("#email-input")
    const loginPasswordInput = document.querySelector("#login-password-input")

    loginBtn.addEventListener("click", () => {
        const body = {
            "email": emailInput.value,
            "password": loginPasswordInput.value
        };


        fetch('https://localhost:7156/Authentication/Login', {
            method: 'POST', // Define o método HTTP como POST
            headers: {
                'Content-Type': 'application/json', // Define o tipo de conteúdo como JSON
            },
            body: JSON.stringify(body),
        })
            .then(response => {
                if (!response.ok) {
                    console.log('Erro ao fazer login!')
                }
                return response.json(); // Converte a resposta para JSON
            })
            .then(data => {
                console.log('Resposta do servidor:', data);
            })
    });

    //****************************************** VERIFICA LOGIN ***********************************************\\
    if (localStorage.Get("Token")) {
        fetch('https://localhost:7156/Authentication/IsLogged', {
            method: 'GET', // Define o método HTTP como POST
            headers: {
                'Authorization': 'Bearear ' + localStorage.Get("Token"),
                'Content-Type': 'application/json', // Define o tipo de conteúdo como JSON
            }
        })
            .then(response => {
                if (!response.ok) {
                    btn.class.add("nao-logado")
                }
                return response.json(); // Converte a resposta para JSON
            })
            .then(data => {
                btn.class.add("logado")
            })
    }

});

//************************************** LOGIN POP-UP ********************************************\\
let loginPopup = document.querySelector(".login-popup");

function openPopup() {
    loginPopup.classList.add("open-popup");
    singupPopup.classList.remove("open-Singup");
}

function closePopup() {
    loginPopup.classList.remove("open-popup");
}

//************************************** SING-UP POP-UP ********************************************\\

let singupPopup = document.querySelector(".singup-popup");

function openSingup() {
    singupPopup.classList.add("open-Singup");
    loginPopup.classList.remove("open-popup");
}

function closeSingup() {
    singupPopup.classList.remove("open-Singup");
}

//************************************** SWIPER ********************************************\\

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var appendNumber = 4;
var prependNumber = 1;
document
    .querySelector(".prepend-2-slides")
    .addEventListener("click", function (e) {
        e.preventDefault();
        swiper.prependSlide([
            '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
            '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
        ]);
    });
document
    .querySelector(".prepend-slide")
    .addEventListener("click", function (e) {
        e.preventDefault();
        swiper.prependSlide(
            '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
        );
    });
document
    .querySelector(".append-slide")
    .addEventListener("click", function (e) {
        e.preventDefault();
        swiper.appendSlide(
            '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
        );
    });
document
    .querySelector(".append-2-slides")
    .addEventListener("click", function (e) {
        e.preventDefault();
        swiper.appendSlide([
            '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
            '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
        ]);
    });