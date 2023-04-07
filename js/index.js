let sliderContainer = document.getElementsByClassName("slider_container")[0];

let right = document.getElementById("next");
let left = document.getElementById("previous");

let amount = 0;
// console.log(sliderContainer.scrollWidth-sliderContainer.clientWidth)
right.addEventListener('click', function(){
    if(sliderContainer.scrollLeft < (sliderContainer.scrollWidth-sliderContainer.clientWidth)){
        amount += sliderContainer.clientWidth;
    }else{
        amount = 0;
    };
    sliderContainer.scrollTo({
        top:0,
        left:amount,
        behavior:'smooth'
    });
});

left.addEventListener('click', function(){
    if(sliderContainer.scrollLeft > 0){
        amount -= sliderContainer.clientWidth;
    }else{
        amount = sliderContainer.scrollWidth-sliderContainer.clientWidth;
    };
    sliderContainer.scrollTo({
        top:0,
        left:amount,
        behavior:'smooth'
    });
});