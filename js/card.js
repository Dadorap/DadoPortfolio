const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const projectCard = card.querySelector(".project-card");
    const isAlreadyFlipped = projectCard.classList.contains("flipped");

    document
      .querySelectorAll(".project-card.flipped")
      .forEach((flippedCard) => {
        flippedCard.classList.remove("flipped");
      });

    if (!isAlreadyFlipped) {
      projectCard.classList.add("flipped");
    }
  });
});
