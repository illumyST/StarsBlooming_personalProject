window.addEventListener('load', function () {

    let bar = document.getElementsByClassName("bar")[0];


    if (window.innerWidth <= 415) {
        bar.addEventListener('click', function (e) {
            // console.log(this.closest(".nav").offsetTop)
            if (scrollY < innerHeight) {
                scrollTo(0, innerHeight);
            }
            for (let i of bar.children) {
                i.classList.toggle("-on")
            };
            bar.previousElementSibling.classList.toggle("-on");
        });

        // 子選單
        let olparent = document.querySelectorAll(".olparent > a");
        for (let i of olparent) {
            i.addEventListener('click', function (e) {
                e.preventDefault();
                i.nextElementSibling.classList.toggle("-on");
                this.closest("li").classList.toggle("-on");

            })
        }
    }
});




//顯示購物車商品數
window.addEventListener('load', fShowCartNum);

function fShowCartNum() {

    let showCartNum = document.getElementsByClassName("showCartNum")[0];

    // localstorage 裡的商品數
    // let cartItemSum = JSON.parse(localStorage.getItem("cartItems")).length;

    // if (cartItemSum) {
    //     showCartNum.style.display = "block";
    //     showCartNum.innerHTML = cartItemSum;
    // }

    if (localStorage.getItem("cartItems")) {
        let cartItemSum = JSON.parse(localStorage.getItem("cartItems")).length;

        showCartNum.style.display = "block";
        showCartNum.innerHTML = cartItemSum;
    }
}
// localStorage.removeItem("cartItems")
