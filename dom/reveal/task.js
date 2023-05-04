const p = document.querySelectorAll('.reveal')

function isVisible() {
    p.forEach((el) => {
        console.log(el.getBoundingClientRect())
        const {top, bottom} = el.getBoundingClientRect()
        if (bottom > 0 && top < window.innerHeight) {
            el.classList.add("reveal_active");
        } else {
            el.classList.remove("reveal_active");
        }
    }) 
}

document.addEventListener("scroll", () => isVisible());