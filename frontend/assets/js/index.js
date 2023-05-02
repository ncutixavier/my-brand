// console.log("DOC::", document.getElementsByClassName('color'))
console.log("DOC::", document.querySelector(".color"));

//onclick
let changeColor = document.querySelector("#colorBtn");
let color = document.querySelector(".color");

// changeColor.onclick = function () {
//   console.log("DOC::", changeColor);
//   document.querySelector(".container").style.backgroundColor = "green";
// }

changeColor.addEventListener("click", () => {
  console.log("DOC::", color.value);
  document.querySelector(".container").style.backgroundColor = color.value;
});

color.addEventListener("input", (event) => {
  console.log("DOC::", event.target.value);
  document.querySelector(".container").style.backgroundColor = event.target.value;
});
