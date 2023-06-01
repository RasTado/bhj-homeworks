const modMain = document.getElementById("subscribe-modal");
const modClose = document.querySelectorAll(".modal__close_times");

const pairs = document.cookie.split("; ");
const cookie = pairs.find((p) => p.startsWith("closed="));

if (!cookie) {
  modMain.classList.add("modal_active");
}

Array.from(modClose).forEach((x) => {
  x.onclick = (x) => {
    mod = x.srcElement.closest(".modal");
    mod.classList.remove("modal_active");
    document.cookie = "closed=True";
  };
});
