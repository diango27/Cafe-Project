// 1. Sélection des boutons et des div de contenu
const btnEat = document.getElementById("btn-eat");
const btnDrink = document.getElementById("btn-drink");

const eat = document.getElementById("eat");
const drink = document.getElementById("drink");

// 2. Clic sur le bouton "Eat"
btnEat.addEventListener("click", () => {
  eat.classList.remove("not-visible"); // On affiche la div #eat
  drink.classList.add("not-visible"); // On cache la div #drink
});

// 3. Clic sur le bouton "Drink"
btnDrink.addEventListener("click", () => {
  drink.classList.remove("not-visible"); // On affiche la div #drink
  eat.classList.add("not-visible"); // On cache la div #eat
});
