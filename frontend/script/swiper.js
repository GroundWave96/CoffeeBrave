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
