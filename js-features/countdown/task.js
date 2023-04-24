const count = document.getElementById("timer")
let inter = setInterval(() => {
    count.textContent = Number(count.textContent) - 1
    if (Number(count.textContent) < 0) {
        window.alert('Вы победили в конкурсе!')
        clearInterval(inter);         
    }
    // setTimeout(() => {
    //     window.alert('Вы победили в конкурсе!');
    //     clearInterval(inter); 
    // }, 60000);
}, 1000);

