//------ include 頁首頁尾 ------
$(function () {
    $(".nav").load("default.html .nav>nav");
    $(".footer").load("default.html .footer>footer");
});

//------ btt ------
//返回時長 0.6秒
$(".btt").click(function (e) {
    e.preventDefault();
    const linkScroll = $("main").offset().top;
    $("html,body").animate(
        {
            scrollTop: linkScroll,
        },
        600
    );
});

//優化 – 離頂點超過 ?px 時，才出現 btt
$(window).scroll(function () {
    const linkScroll = $("main").offset().top;
    if ($(window).scrollTop() > (linkScroll)) {
        if ($(".btt").hasClass("hide")) {
            $(".btt").toggleClass("hide");
        }
    } else {
        $(".btt").addClass("hide");
    }
});


//------ 放大鏡 ------

let img = document.getElementsByClassName("img");

let show = document.getElementsByClassName("show")[0];
let glass = document.getElementsByClassName("glass")[0];

let bigImg = document.getElementsByClassName("bigImg")[0];
let bigShow = document.getElementsByClassName("bigShow")[0];


// click and change img
for (let i of img) {
    i.addEventListener("click", function (e) {
        show.src = this.src;
        bigShow.src = this.src;
    });
};

// hover and show img
show.addEventListener("mouseenter", function (e) {
    bigImg.classList.add("-on");
    glass.classList.add("-on");
})
show.addEventListener("mouseleave", function (e) {
    bigImg.classList.remove("-on");
    glass.classList.remove("-on");
})


show.addEventListener("mousemove", function (e) {
    let x = e.pageX - parseInt(this.getBoundingClientRect().left) - (glass.clientHeight / 2);
    let y = e.pageY - parseInt(this.getBoundingClientRect().top) - (glass.clientHeight / 2);

    //glass move
    glass.style.left = x + "px";
    glass.style.top = y + "px";

    //bigShow
    bigShow.style.height = show.clientWidth * bigImg.clientWidth / glass.clientWidth + "px";

    bigShow.style.left = - x * (bigShow.clientWidth / show.clientWidth) + "px";

    bigShow.style.top = - y * (bigShow.clientHeight / show.clientHeight) + "px";
})

// colorbtn

let colorbtn = document.getElementsByClassName("colorbtn");
let choose = null;
function whetherChosen() {
    if (choose != null) { //already chosen
        choose.classList.toggle("-chosen");
        if (choose == this) {
            choose = null;
        } else {
            choose = this;
            choose.classList.toggle("-chosen");
        };
    } else { //not close
        choose = this;
        choose.classList.toggle("-chosen");
    }
}
for (let i of colorbtn) {
    i.addEventListener("click", whetherChosen);
}

// numBox
let fai = document.getElementsByClassName("numbtn");
let pnum = document.getElementsByClassName("pnum")[0];

fai[0].addEventListener("click", function () {
    if (pnum.value > 1) {
        pnum.value -= 1;
    }
});
fai[1].addEventListener("click", function () {
    if (pnum.value < 99) {
        pnum.value -= -1;
    }
});
pnum.addEventListener("keyup", function () {
    this.value = this.value.replace(/\D/g, "");
});

pnum.addEventListener("blur", function () {
    if (!pnum.value) {
        pnum.value = 1;
    }
});


let tltp = document.getElementsByClassName("tltp")[0];
let price = tltp.querySelector("span");
let counter = document.getElementsByClassName("counter")[0];

function printnum() {
    if (pnum.value > 1) {
        price.innerText = pnum.value * 159;
        tltp.classList.add("-on");
    } else{
        tltp.classList.remove("-on");
    }
};
pnum.addEventListener("keyup", printnum);
counter.addEventListener("click", printnum);

// func-heartFill
let heart = document.getElementsByClassName("heart")[0];
heart.addEventListener("click",()=>{
    heart.nextElementSibling.classList.toggle("-on");
});

// buy and cart / checknull
let btns = document.getElementsByClassName("btn");
function checknull(){
    if(!choose){
        alert("請選擇顏色");
    }
};
for(let i of btns){
    i.addEventListener("click", checknull);
};

// cart cookie
