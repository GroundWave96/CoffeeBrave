document.addEventListener("DOMContentLoaded", () => {
    //****************************************** MENU ***********************************************\\
    const menuIcon = document.querySelector(".menu-icon");
    const navMenu = document.querySelector(".nav-menu");

    // Função para alternar o estado do menu
    menuIcon.addEventListener("click", (event) => {
        menuIcon.classList.toggle('active');
        navMenu.classList.toggle('active');
        event.stopPropagation(); // Impede que o clique no ícone seja registrado pelo documento
    });

    // Fecha o menu ao clicar fora
    document.addEventListener("click", (event) => {
        // Verifica se o clique foi fora do menu e do ícone
        if (!navMenu.contains(event.target) && !menuIcon.contains(event.target)) {
            menuIcon.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });


    //****************************************** LOGIN ***********************************************\\
    /*
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
    */
    //****************************************** VERIFICA LOGIN ***********************************************\\
    /*
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
    */

});

//************************************** HEADER SCROLL ********************************************\\
window.onscroll = function () { myFunction() };

function myFunction() {
    if (document.documentElement.scrollTop > 10) {
        document.getElementById("headerBox").className = "test";
    } else {
        document.getElementById("headerBox").className = "";
    }
}
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
        type: "fraction",
    },
    navigation: {
        nextEl: ".prev",
        prevEl: ".next",
    },
    on: {
        slideChange: function () {
            updateNavButtons();
        },
        reachEnd: function () {
            updateNavButtons();
        },
        reachBeginning: function () {
            updateNavButtons();
        }
    }
});

//* BTN OPACITY *\\
function updateNavButtons() {
    if (swiper.isEnd) {
        document.querySelector('.prev').style.opacity = 0.3;
    } else {
        document.querySelector('.prev').style.opacity = 1;
    }

    if (swiper.isBeginning) {
        document.querySelector('.next').style.opacity = 0.3;
    } else {
        document.querySelector('.next').style.opacity = 1;
    }
}
updateNavButtons();
