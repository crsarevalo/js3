ele = document.getElementById("ele1");
function pintar(color = "green", elem) {
  elem.style.backgroundColor = color;
}

ele.addEventListener("click", function () {
  pintar("yellow", ele);
});
