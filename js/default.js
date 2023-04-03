window.addEventListener('load', function () {

    let bar = document.getElementsByClassName("bar")[0];

    bar.addEventListener('click', function (e) {
        for(let i of bar.children){
            i.classList.toggle("-on")
        };
        bar.previousElementSibling.classList.toggle("-on");
    })
})

