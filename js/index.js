console.log("TEST")
//querySelectotconst input = document.querySelector(".form-name");

const btn = document.querySelector(".form-submit");

//keydown
// input.addEventListener("keydown", (e) => {
//     console.log(e.target.value)
// })

btn.onclick = function () {
    console.log(input.value)
    // document.body.style.backgroundColor = input.value;
    document.querySelector(".navbar").style.backgroundColor = input.value;;
}
