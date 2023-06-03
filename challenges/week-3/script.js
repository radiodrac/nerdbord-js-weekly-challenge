const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

function openModal() {
    modal.classList.toggle("hidden");
    modal.classList.toggle("bouncein");
    modal.classList.toggle("bounceout");
    overlay.classList.toggle("hidden");
}

function closeModal() {
    setTimeout(function() {
        modal.classList.toggle("hidden")
    }, 450);
    setTimeout(function() {
        overlay.classList.toggle("hidden")
    }, 300);
    modal.classList.toggle("bouncein");
    modal.classList.toggle("bounceout");
}

openModalBtn.addEventListener("click", openModal);

closeModalBtn.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);