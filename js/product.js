let menuOl = document.getElementsByClassName("menuOl")[0];

menuOl.addEventListener('click',function(e){
    e.preventDefault();
    this.classList.toggle("-on");
    this.querySelector("ol").classList.toggle("-on");
})

