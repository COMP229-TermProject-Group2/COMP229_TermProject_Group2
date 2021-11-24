// IIFE

(function () {
  function Start() {
    console.log("App started...");

    //Guard before deleting an entry
    let deleteButtons = document.querySelectorAll('.btn-danger');

    for(button of deleteButtons) {
        button.addEventListener('click', (event) => {
            if (!confirm("Are you sure?")){
                event.preventDefault();
                //window.location.assign('/book-list');
            }
        });
    }
  }

  window.addEventListener("load", Start);
})();

//Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const navContainerEl = document.querySelector(".nav-container");

btnNavEl.addEventListener("click", () => {
  navContainerEl.classList.toggle("nav-open");
});
