const about = document.querySelector(".about");
const btns = document.querySelectorAll(".btn");

about.addEventListener("click", (el) => {
  let id = el.target.dataset.id;
  if (id) {
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });

    if (id != "vision") {
      let list = document.querySelectorAll(".about-content");
      list.forEach((el) => {
        if (el.id != "vision") {
          listItem = el.querySelector(".about-list");
          listItem.classList.add("hiddenList");
        }
      });
    }

    el.target.classList.add("active");

    const contentAbout = document.querySelectorAll(".about-content");
    contentAbout.forEach((el) => {
      el.classList.remove("active");
    });

    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
