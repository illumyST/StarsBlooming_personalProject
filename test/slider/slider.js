
let sliders = document.getElementsByClassName("slider");
let sliOut = document.getElementsByClassName("out")[0];
let right = document.getElementById("next");
let left = document.getElementById("previous");


// for (let i of sliders) {
//     console.log(i.getBoundingClientRect().left)
// }

// let amount=0;
// right.addEventListener('click', function () {
//     if (sliOut.scrollLeft < 2000) {
//         amount += 1000;
//     } else {
//         amount=0
//     }
//     sliOut.scrollTo({
//         top:0,
//         left:+amount,
//         behavior:'smooth'
//     })
// })
// left.addEventListener('click', function () {
//     if (sliOut.scrollLeft >0) {
//         amount-= 1000
//     } else {
//         amount=2000
//     }
//     sliOut.scrollTo({
//         top:0,
//         left:+amount,
//         behavior:'smooth'
//     })
// })
// sliOut.addEventListener('scroll',function(e){
// })

let dataKey = [];
for(let i of sliders){
    dataKey.push(parseInt(i.getAttribute("data-key")));
}

console.log(dataKey);

right.addEventListener('click', function () {
    
    for(let i of sliders){
        if(i.getAttribute("data-key")==0){
            console.log("data-key=0");
            i.style.transform = "translate(300%)"
        }else{
            console.log("data-key=X");
            i.style.transform = "translate(-100%)"
        }
    }
    for(i=0;i<dataKey.length;i++){
        if(dataKey[i]==0){
            dataKey[i]=dataKey.length-1
        }else{
            dataKey[i]=dataKey[i]-1;
        }
    }
    
    console.log(dataKey)
});


left.addEventListener('click', function () {
    for(i=0;i<dataKey.length;i++){
        if(dataKey[i]==dataKey.length-1){
            dataKey[i]=0;
        }else{
            dataKey[i]=dataKey[i]+1;
        }
    }
    console.log(dataKey)
});
