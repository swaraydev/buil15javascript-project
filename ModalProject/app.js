// select modal-btn, modal-overlay, close-btn
// Listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .OPEN-MODAL to modal-overlay
// when user clicks close-btn remove .OPEN-MODAL from modal-overlay

const modalBtn = document.querySelector(".modal-btn");
const modaLoverlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function () {
  modaLoverlay.classList.add("open-modal");
});

closeBtn.addEventListener("click", function () {
  modaLoverlay.classList.remove("open-modal");
});

