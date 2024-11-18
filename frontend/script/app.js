//****************************************** MENU ***********************************************\\
document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const navMenu = document.querySelector(".nav-menu");

    menuIcon.addEventListener("click", () => {
        menuIcon.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
});

//************************************** LOGIN POP-UP ********************************************\\
let loginPopup = document.querySelector(".login-popup");

function openPopup() {
    loginPopup.classList.add("open-popup");
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
