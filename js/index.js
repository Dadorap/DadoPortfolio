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
