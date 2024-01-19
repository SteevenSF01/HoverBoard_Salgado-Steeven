let divParent = document.querySelector(".container")
for (let index = 0; index < 340; index++) {
   let divCreer = document.createElement("div")
   divCreer.className = "divEnfant" 
    divParent.appendChild(divCreer)
   divCreer.style.background = "#3a3a3a"
    divCreer.style.width = "23px"
    divCreer.style.height = "26px"
    divCreer.style.margin = "1px"
}

let lesDivEnfant = document.querySelectorAll(".divEnfant")
console.log(lesDivEnfant);

function randomColor() {
    return choose = "#" + Math.floor(Math.random() * 16777215).toString(16);
}

lesDivEnfant.forEach(element => {
    element.addEventListener("mouseover", () => {
        element.style.background = randomColor()
    })
    element.addEventListener("mouseout", () => {
        element.style.background = "#3a3a3a"
        element.style.transition = "3s"
    })
});