let azul = document.getElementById("caja1");
let rojo = document.querySelector("#caja2");
let verde = document.getElementById("caja3");
let amarillo = document.querySelector("#caja4");
// use querySelector y getElement juntos solo por praticar

colorNuevo = (cN) => {
  cN.target.style.backgroundColor = "black";
};

amarillo.addEventListener("click", colorNuevo);
rojo.addEventListener("click", colorNuevo);
azul.addEventListener("click", colorNuevo);
verde.addEventListener("click", colorNuevo);

let board = document.getElementById("newKey");
let newBoard = document.getElementById("key");
document.addEventListener("keydown", function (teclado) {
  if (teclado.key === "a") {
    board.style.backgroundColor = "pink";
  } else if (teclado.key === "s") {
    board.style.backgroundColor = "orange";
  } else if (teclado.key === "d") {
    board.style.backgroundColor = "skyblue";
  }
});
document.addEventListener("keydown", function (teclado2) {
  if (teclado2.key === "a") {
    newBoard.style.backgroundColor = "purple";
  } else if (teclado2.key === "s") {
    newBoard.style.backgroundColor = "grey";
  } else if (teclado2.key === "d") {
    newBoard.style.backgroundColor = "pink";
  }
});
function getNewDiv(color) {
  let newDiv = document.createElement("div");
  newDiv.style.height = "200px";
  newDiv.style.width = "200px";
  newDiv.style.border = "2px solid black";
  newDiv.style.backgroundColor = color;
  document.body.appendChild(newDiv);
}
document.addEventListener("keydown", function (finalColor) {
  if (finalColor.key === "q") {
    getNewDiv("skyblue");
  } else if (finalColor.key === "w") {
    getNewDiv("orange");
  } else if (finalColor.key === "e") {
    getNewDiv("brown");
  }
});
