const hamburger = document.querySelector(".hamburger--js");
console.log(hamburger);

hamburger.addEventListener("click", () => {
  const nav = document.querySelector(".navigation--js");
  nav.classList.toggle("navigation--open");
});
