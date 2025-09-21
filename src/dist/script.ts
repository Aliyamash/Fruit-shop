const menuHeader = document.querySelector<HTMLElement>(".menu-header");
const overlay = document.getElementById("overlay") as HTMLElement | null;
const mobileHeader = document.getElementById(
  "mobile-header"
) as HTMLElement | null;

function openMenu(): void {
  overlay?.classList.add("open");
  mobileHeader?.classList.add("open");
}

function closeMenu(): void {
  overlay?.classList.remove("open");
  mobileHeader?.classList.remove("open");
}

menuHeader?.addEventListener("click", () => {
  openMenu();
});

overlay?.addEventListener("click", () => {
  closeMenu();
});

document.addEventListener("DOMContentLoaded", () => {
  const browseBtn = document.querySelector<HTMLButtonElement>("#button-cat");
  const categoriesMenu =
    document.querySelector<HTMLDivElement>("#categories-menu");

  if (!browseBtn || !categoriesMenu) return;

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

declare var Swiper: any;

const swiper = new Swiper(".mySwiper", {
  spaceBetween: 15,
  centeredSlides: true,
  breakpoints: {
    0: { slidesPerView: 1.2 as const },  
    768: { slidesPerView: 1 } 
  }
});

var swiper1 = new Swiper(".mySwiper1", {
  spaceBetween: 15,
  breakpoints:{
  0:{ slidesPerView: 2.1 as const },
  768: { slidesPerView: 4 }, 
  1024: { slidesPerView: 5 }
  },
  autoHeight: true,
      navigation: {
        nextEl: ".swiper-button-next-1",
        prevEl: ".swiper-button-prev-1",
      },

    });
    var swiper1 = new Swiper(".mySwiper2", {
  spaceBetween: 15,
  breakpoints:{
  0:{ slidesPerView: 2.1 as const },
  768: { slidesPerView: 4 }, 
  1024: { slidesPerView: 5 }
  },
  autoHeight: true,
      navigation: {
        nextEl: ".swiper-button-next-2",
        prevEl: ".swiper-button-prev-2",
      },

    });
