// 1. On récupère les éléments HTML
const btnDrink = document.getElementById("button-drink");
const btnEat = document.getElementById("button-eat");

const drink = document.getElementById("drink");
const eat = document.getElementById("eat");

// 2. Comportement au clic sur "Drink"
btnDrink.addEventListener("click", () => {
  // On cache toute la section nourriture (bouton + tableau)
  eat.classList.add("not-visible");
});

// 3. Comportement au clic sur "Eat"
btnEat.addEventListener("click", () => {
  // On cache toute la section boissons (bouton + tableau)
  drink.classList.add("not-visible");
});
