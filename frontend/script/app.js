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

//************************************** PRODUCT TABS ********************************************\\

const tabs = document.querySelectorAll('.tab-btn');

tabs.forEach(tab => tab.addEventListener('click', () => tabClicked(tab)));

const tabClicked = (tab) => {
    tabs.forEach(tab => tab.classList.remove('active'));
    tab.classList.add('active');

    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('show'));

    const contentId = tab.getAttribute('content-id');
    const content = document.getElementById(contentId);

    content.classList.add('show');
}

const currentActiveTab = document.querySelector('.tab-btn.active');
tabClicked(currentActiveTab);


//**************************************  ********************************************\\