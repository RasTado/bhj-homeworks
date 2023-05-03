const modMain = document.getElementById('modal_main')
const modClose = document.querySelectorAll('.modal__close_times')
const modSuccess = document.getElementById('modal_success')
const success = document.querySelector('.show-success')

modMain.classList.add('modal_active');

console.log(modClose)

Array.from(modClose).forEach(x => {
    x.onclick = (x) => {
        mod = x.srcElement.closest('.modal');
        mod.classList.remove('modal_active')
    }
})

success.onclick = (s) => {
    modMain.classList.remove('modal_active')
    modSuccess.classList.add('modal_active')
}
