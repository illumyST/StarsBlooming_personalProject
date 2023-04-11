let menuOl = document.getElementsByClassName("menuOl")[0];

menuOl.addEventListener('click',function(e){
    e.preventDefault();
    this.classList.toggle("-on");
    this.querySelector("ol").classList.toggle("-on");
})


let glink = ["../images/bg/flowerWithVase.jpg", "../images/bg/g2.jpg","../images/bg/g3.jpg","../images/bg/g4.jpg"];
let g1 = document.getElementsByClassName("g1")[0];
let gnav = document.getElementsByClassName("gnav")[0].querySelectorAll("li");

let cnt=0;


setInterval(function(){
    g1.style.cssText = `background-image:url(${glink[cnt]})`;

    if(cnt==0){
        gnav[gnav.length-1].classList.remove('-on');
    }else{
        gnav[cnt-1].classList.remove('-on');
    };
    gnav[cnt].classList.add('-on');

    if(cnt==glink.length-1){
        cnt=0;
    }else{
        cnt+=1;
    }
},3500);





