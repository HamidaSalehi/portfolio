"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const close_modal = document.querySelector(".close-modal");
const show_modal = document.querySelectorAll(".show-modal");
console.log(show_modal);

const displayModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const hiddenModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < show_modal.length; i++) {
  show_modal[i].addEventListener("click", displayModal);
}
close_modal.addEventListener("click", hiddenModal);
overlay.addEventListener("click", hiddenModal);

document.addEventListener("keydown", function (event) {
  if (event.key == "Escape") {
    if (!modal.classList.contains("hidden")) {
      hiddenModal();
    }
  }
});
