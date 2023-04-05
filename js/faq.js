if (window.innerWidth <= 415) {
    let pTags = document.querySelectorAll(".showOut p")
    for (let i of pTags) {
        i.querySelectorAll("br").forEach(element => {
            element.replaceWith(" ")
        });
    }

}
