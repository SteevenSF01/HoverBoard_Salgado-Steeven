let divParent = document.querySelector(".container");
for (let index = 0; index < 340; index++) {
  //! La boucle qui permet de créer les div
  let divCreer = document.createElement("div");
  divCreer.className = "divEnfant"; //! Ajout de la class au div
  divParent.appendChild(divCreer);
  divCreer.style.background = "#3a3a3a"; //! Ajout de style aux div
  divCreer.style.width = "23px";
  divCreer.style.height = "26px";
  divCreer.style.margin = "1px";
}

let lesDivEnfant = document.querySelectorAll(".divEnfant");

function randomColor() {
  return (choose = "#" + Math.floor(Math.random() * 16777215).toString(16)); //! Calcul pour une couleur aléatoire
}

lesDivEnfant.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.style.background = randomColor();
    element.style.borderRadius = "50%"
  });
  element.addEventListener("mouseout", () => {
    element.style.background = "#3a3a3a";
    element.style.transition = "4s ease";
    element.style.borderRadius = "0"
  });
});
