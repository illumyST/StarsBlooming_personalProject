window.addEventListener('load', function () {

    let bar = document.getElementsByClassName("bar")[0];

    bar.addEventListener('click', function (e) {
        for(let i of bar.children){
            i.classList.toggle("-on")
        };
        bar.previousElementSibling.classList.toggle("-on");
    })
})

//顯示購物車商品數
window.addEventListener('load',fShowCartNum);

function fShowCartNum(){

    let showCartNum = document.getElementsByClassName("showCartNum")[0];

    // localstorage 裡的商品數
    let cartItemSum = JSON.parse(localStorage.getItem("cartItems")).length; 

    if(cartItemSum){
        showCartNum.style.display = "block";
        showCartNum.innerHTML = cartItemSum;
    }

}
// localStorage.removeItem("cartItems")