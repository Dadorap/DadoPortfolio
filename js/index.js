document.addEventListener("DOMContentLoaded", function () {
  const contactBtnBox = document.querySelector("#contact-btn");
  const contactBtn = document.querySelector("#contactBtn");

  if (!contactBtn || !contactBtnBox) {
    console.error("Contact button or box not found!");
    return;
  }

  setTimeout(() => {
    contactBtn.classList.remove("hidden");
  }, 1500);

  setTimeout(() => {
    contactBtnBox.classList.add("slideInAnimation");
  }, 1000);
});

document.querySelector("#contactBtn").addEventListener("click", function () {
  document.querySelector("#form").scrollIntoView({ behavior: "smooth" });
});

document.querySelectorAll(".header_btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const btnText = btn.innerHTML.trim().toLowerCase();
    console.log(btnText);
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
    }
  });
});
