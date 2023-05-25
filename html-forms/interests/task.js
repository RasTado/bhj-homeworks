const checkb = document.querySelectorAll('input[type="checkbox"]');

checkb.forEach((check) => {
  check.addEventListener("change", (event) => {
    checkFunc(event.target);
  });
});

function checkFunc(x) {
  let xChildren = x
    .closest(".interest")
    .querySelectorAll('input[type="checkbox"]');

  xChildren.forEach((child) => {
    child.checked = x.checked;
    child.indeterminate = false;
  });
}
