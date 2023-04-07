
let sliders = document.getElementsByClassName("slider");
let sliOut = document.getElementsByClassName("out")[0];

for (let i of sliders) {
    console.log(i.getBoundingClientRect().left)
}
let right = document.getElementById("next");
let left = document.getElementById("previous");

let amount=0;
right.addEventListener('click', function () {
    if (sliOut.scrollLeft < 2000) {
        amount += 1000;
    } else {
        amount=0
    }
    sliOut.scrollTo({
        top:0,
        left:+amount,
        behavior:'smooth'
    })
})
left.addEventListener('click', function () {
    if (sliOut.scrollLeft >0) {
        amount-= 1000
    } else {
        amount=2000
    }
    sliOut.scrollTo({
        top:0,
        left:+amount,
        behavior:'smooth'
    })
})
sliOut.addEventListener('scroll',function(e){
})