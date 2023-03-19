let bar = document.getElementsByClassName("bar")[0];

let aside = document.getElementsByClassName("aside")[0]

bar.addEventListener("click", function () {
    aside.classList.toggle("-on");
    bar.children[0].classList.toggle("-on");
    bar.children[1].classList.toggle("-on");
});