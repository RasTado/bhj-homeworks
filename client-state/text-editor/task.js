const field = document.getElementById("editor");
const clearB = document.getElementById("clearBut");
const storedName = localStorage.getItem("ls");

if (storedName) {
  field.textContent = storedName;
}
field.addEventListener("keydown", (e) => {
  saveInLocStorage("ls", field.value);
});

function saveInLocStorage(key, value) {
  localStorage.setItem(key, value);
}

clearB.onclick = () => {
  localStorage.removeItem("ls");
  field.value = "";
};
