const p = document.querySelectorAll('.rotator__case')
let cs = 0;

function chCase(n) {
    cs = (n + p.length) % p.length;

    p.forEach((el) => el.classList.remove('rotator__case_active'));
    p[cs].classList.add('rotator__case_active');
}

chCase(cs)
interval = setInterval(() => {
    chCase(cs + 1)
}, 1000)