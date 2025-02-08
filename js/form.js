document.getElementById("name").addEventListener("input", function () {
  this.value = this.value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/g, "");
});

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); 
});
