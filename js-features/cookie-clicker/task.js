const counter = document.getElementById("clicker__counter")
const link = document.getElementById("cookie")

link.onclick = () => {
    cookie.width += 100
    counter.textContent++
}
let inter = setInterval(() => {
    cookie.width = 200
}, 50);

// link.onclick = () => {
//     if (cookie.width != 200) {
//         cookie.width = 200
//     }
//     else {
//         cookie.width += 100
//     }
//     counter.textContent++
// }