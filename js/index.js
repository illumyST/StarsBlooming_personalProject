if(window.innerWidth <=1200 ){
    setTimeout(function(){
        console.log(1)
        window.scroll({
            top:innerHeight,
            behavior:'smooth'
        });
    },6000);
}else{
    setTimeout(function(){
        console.log(1)
        window.scroll({
            top:innerHeight,
            behavior:'smooth'
        });
    },5000);
}

let sliderContainer = document.getElementsByClassName("slider_container")[0];

let right = document.getElementById("next");
let left = document.getElementById("previous");

let amount = 0;
// console.log(sliderContainer.scrollWidth-sliderContainer.clientWidth)

function slideRight(){
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
}
right.addEventListener('click', slideRight);
setInterval(slideRight ,5000)

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

// brand hover 效果 -----------------------
let brandArea = document.querySelector(".brand");
let brandShapes = document.querySelector(".brand .shapes")
let shape = document.getElementsByClassName("shape")[0];

brandArea.addEventListener("mousemove", function (e) {
    shape.style.display="block";
    let x = e.pageX - 50;
    let y = e.pageY - 50 - brandShapes.offsetTop - brandArea.offsetTop;
    // console.log(x,y)
    shape.style.left = x + "px";
    shape.style.top = y + "px";
});
brandArea.addEventListener("mouseout", function (e) {
    shape.style.display="none";
});

// 差速滾動 ------------------------------------

function presetting(ele){
    ele.style.cssText = 'position:relative;visibility:hidden;opacity:0;top:500px;';
}
function aos(ele){
    if(ele.getBoundingClientRect().top <= this.innerHeight+400){
        ele.style.cssText = 'visibility:visible;opacity:1;top:0px;';
    }
}

let brand = document.getElementsByClassName("brand")[0];
let hot = document.getElementsByClassName("hot")[0];
let comment = document.getElementsByClassName("comment")[0];
let news = document.getElementsByClassName("news")[0];


window.addEventListener('DOMContentLoaded',function(){
    presetting(brand);
    presetting(hot);
    presetting(comment);
    presetting(news);

})

window.addEventListener('scroll',function(){
    aos(brand);
    aos(hot);
    aos(comment);
    aos(news);
});
