const form = document.querySelector("#form");
const popupBtn = document.querySelector(".btn-popup");
const popupDiv = document.querySelector(".popup");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const textAreaInput = document.getElementById("text-area");

nameInput.addEventListener("input", function () {
  this.value = this.value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/g, "");
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  nameInput.value = "";
  emailInput.value = "";
  textAreaInput.value = "";
  popupDiv.classList.remove("hidden");
  console.log("Form submitted");
});

popupBtn.addEventListener("click", () => {
  popupDiv.classList.add("hidden");
});
