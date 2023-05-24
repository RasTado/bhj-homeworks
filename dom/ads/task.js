const p = document.querySelectorAll(".rotator__case");
let cs = 0;
let delay = p[cs].getAttribute("data-speed");

function chCase(n) {
  cs = (n + p.length) % p.length;
  p.forEach((el) => el.classList.remove("rotator__case_active"));
  p[cs].style.color = p[cs].getAttribute("data-color");
  p[cs].classList.add("rotator__case_active");
}

chCase(cs);
let timer = setTimeout(function tick() {
  chCase(cs + 1);
  timer = setTimeout(tick, p[cs].getAttribute("data-speed"));
}, delay);
