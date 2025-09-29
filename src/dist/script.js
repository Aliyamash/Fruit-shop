const menuHeader = document.querySelector(".menu-header");
const overlay = document.getElementById("overlay");
const mobileHeader = document.getElementById("mobile-header");
function openMenu() {
    overlay === null || overlay === void 0 ? void 0 : overlay.classList.add("open");
    mobileHeader === null || mobileHeader === void 0 ? void 0 : mobileHeader.classList.add("open");
}
function closeMenu() {
    overlay === null || overlay === void 0 ? void 0 : overlay.classList.remove("open");
    mobileHeader === null || mobileHeader === void 0 ? void 0 : mobileHeader.classList.remove("open");
}
menuHeader === null || menuHeader === void 0 ? void 0 : menuHeader.addEventListener("click", () => {
    openMenu();
});
overlay === null || overlay === void 0 ? void 0 : overlay.addEventListener("click", () => {
    closeMenu();
});
document.addEventListener("DOMContentLoaded", () => {
    const browseBtn = document.querySelector("#button-cat");
    const categoriesMenu = document.querySelector("#categories-menu");
    if (!browseBtn || !categoriesMenu)
        return;
    browseBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        categoriesMenu.classList.toggle("hidden");
    });
    categoriesMenu.addEventListener("click", (event) => {
        event.stopPropagation();
    });
    document.addEventListener("click", () => {
        if (!categoriesMenu.classList.contains("hidden")) {
            categoriesMenu.classList.add("hidden");
        }
    });
});
const swiper = new Swiper(".mySwiper", {
    spaceBetween: 15,
    centeredSlides: true,
    breakpoints: {
        0: { slidesPerView: 1.2 },
        768: { slidesPerView: 1 },
    },
});
var swiper1 = new Swiper(".mySwiper1", {
    spaceBetween: 15,
    breakpoints: {
        0: { slidesPerView: 2.1 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 5 },
    },
    autoHeight: true,
    navigation: {
        nextEl: ".swiper-button-next-1",
        prevEl: ".swiper-button-prev-1",
    },
});
var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 15,
    breakpoints: {
        0: { slidesPerView: 2.1 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 5 },
    },
    autoHeight: true,
    navigation: {
        nextEl: ".swiper-button-next-2",
        prevEl: ".swiper-button-prev-2",
    },
});
var swiper3 = new Swiper(".mySwiper3", {
    spaceBetween: 15,
    breakpoints: {
        0: { slidesPerView: 2.1 },
    },
});
var swiper4 = new Swiper(".mySwiper4", {
    spaceBetween: 15,
    slidesPerView: 1
});
var swiper5 = new Swiper(".mySwiper5", {
    spaceBetween: 15,
    slidesPerView: 1.2
});
const buttons = document.querySelectorAll(".accordion-btn");
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const content = btn.nextElementSibling;
        if (!content)
            return;
        if (window.innerWidth < 768) {
            content.classList.toggle("hidden");
            const icon = btn.querySelector("span");
            icon === null || icon === void 0 ? void 0 : icon.classList.toggle("rotate-180");
        }
    });
});
export {};
//# sourceMappingURL=script.js.map