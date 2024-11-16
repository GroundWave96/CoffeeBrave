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
let popup = document.querySelector(".login-popup");

function openPopup(){
    popup.classList.add("open-popup");
}

function closePopup(){
    popup.classList.remove("open-popup");
}