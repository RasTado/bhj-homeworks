const toltipList = document.querySelectorAll(".has-tooltip");

toltipList.forEach((toltip) => {
  toltip.addEventListener("click", (e) => {
    e.preventDefault();
    const { top, left } = e.target.getBoundingClientRect();
    // console.log(top, left);
    fieldTip = document.createElement("div");
    let activTip = document.querySelector(".tooltip");
    if (activTip) {
      activTip.remove();
    } else {
      fieldTip.setAttribute("class", "tooltip tooltip_active");
      fieldTip.setAttribute("style", `top: ${top + 20}px; left: ${left}px`);
      fieldTip.textContent = e.target.title;
      e.target.appendChild(fieldTip);
    }
  });
});
