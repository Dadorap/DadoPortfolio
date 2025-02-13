document.getElementById("name").addEventListener("input", function () {
  this.value = this.value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/g, "");
});

function redirectPopup() {
  console.log("Button clicked (inline script)");
  window.location.href = "http://127.0.0.1:5500/";
}

document.querySelector("#form").addEventmListener("submit", function (e) {
  e.preventDefault();
  console.log("Form submitted");
  redirectPopup();
});
