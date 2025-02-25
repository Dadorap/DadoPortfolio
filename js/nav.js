document.querySelector(".header_list").addEventListener("click", function () {
  document.querySelector(".checkbox").checked ^= 1;
});

document.querySelectorAll(".header_btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const btnText = btn.innerHTML.trim().toLowerCase();
    switch (btnText) {
      case "about me":
        document.querySelector(".about").scrollIntoView({ behavior: "smooth" });
        break;
      case "projects":
        document
          .querySelector(".project")
          .scrollIntoView({ behavior: "smooth" });
        break;
      case "contact me":
        document.querySelector(".form").scrollIntoView({ behavior: "smooth" });
        break;
      case "testimonial":
        document
          .querySelector(".testimonial-container")
          .scrollIntoView({ behavior: "smooth" });
        break;
    }
  });
});