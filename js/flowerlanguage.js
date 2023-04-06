let bar = document.getElementsByClassName("bar")[0];

let aside = document.getElementsByClassName("aside")[0]

bar.addEventListener("click", function () {
    aside.classList.toggle("-on");
    bar.children[0].classList.toggle("-on");
    bar.children[1].classList.toggle("-on");
});

if(window.innerWidth <=1200 ){
    alert("為提供最佳體驗，請至桌機版瀏覽")
}