// =============================
// ABRIR Y CERRAR MODALES
// =============================

function openModal(id) {
  document.getElementById(id).style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

window.onclick = function(event) {
  const modals = document.querySelectorAll(".modal");

  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};


// =============================
// SCROLL SUAVE MENU
// =============================

document.addEventListener("DOMContentLoaded", () => {

  const links = document.querySelectorAll("nav a");

  links.forEach(link => {

    link.addEventListener("click", e => {

      e.preventDefault();

      const target = document.querySelector(link.getAttribute("href"));

      if(target){
        target.scrollIntoView({
          behavior: "smooth"
        });
      }

    });

  });

});


// =============================
// CARRUSEL
// =============================

function nextItem(carouselId) {

  const carousel = document.getElementById(carouselId);
  const items = carousel.querySelectorAll(".carousel-item");

  let current = carousel.querySelector(".carousel-item.active");
  let index = Array.from(items).indexOf(current);

  current.classList.remove("active");

  let nextIndex = (index + 1) % items.length;

  items[nextIndex].classList.add("active");
}


function prevItem(carouselId) {

  const carousel = document.getElementById(carouselId);
  const items = carousel.querySelectorAll(".carousel-item");

  let current = carousel.querySelector(".carousel-item.active");
  let index = Array.from(items).indexOf(current);

  current.classList.remove("active");

  let prevIndex = (index - 1 + items.length) % items.length;

  items[prevIndex].classList.add("active");
}


// =============================
// AUTOSLIDE
// =============================

setInterval(() => {

  document.querySelectorAll(".carousel").forEach(carousel => {

    nextItem(carousel.id);

  });

}, 6000);


// =============================
// CONTROL CON TECLADO
// =============================

document.addEventListener("keydown", function(e){

  const openModal = document.querySelector(".modal[style*='block']");

  if(!openModal) return;

  const carousel = openModal.querySelector(".carousel");

  if(!carousel) return;

  if(e.key === "ArrowRight"){
    nextItem(carousel.id);
  }

  if(e.key === "ArrowLeft"){
    prevItem(carousel.id);
  }

});


// =============================
// SWIPE EN CELULAR
// =============================

document.querySelectorAll(".carousel").forEach(carousel => {

  let startX = 0;

  carousel.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  });

  carousel.addEventListener("touchend", e => {

    let endX = e.changedTouches[0].clientX;

    if(startX - endX > 50){
      nextItem(carousel.id);
    }

    if(endX - startX > 50){
      prevItem(carousel.id);
    }

  });

});