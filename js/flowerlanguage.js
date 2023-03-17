let bar = document.getElementsByClassName("bar")[0];
let aside = document.getElementsByClassName("aside")[0]
bar.addEventListener("click",function(){
    aside.classList.add("-on");
});