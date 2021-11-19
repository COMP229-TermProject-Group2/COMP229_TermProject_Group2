// IIFE

(function () {
  function Start() {
    console.log("App started...");
  }

  window.addEventListener("load", Start);
})();

//Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const navContainerEl = document.querySelector(".nav-container");

btnNavEl.addEventListener("click", () => {
  navContainerEl.classList.toggle("nav-open");
});
