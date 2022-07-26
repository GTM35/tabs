const about = document.querySelector(".about");
const btns = document.querySelectorAll(".btn");

about.querySelector("#history").classList.add("active");
document.querySelector(".btn-container .active").classList.add("active");

about.addEventListener("click", (el) => {
  let id = el.target.dataset.id;
  if (id) {
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });

    el.target.classList.add("active");

    const contentAbout = document.querySelectorAll(".about-content");
    contentAbout.forEach((el) => {
      el.classList.remove("active");
    });

    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
