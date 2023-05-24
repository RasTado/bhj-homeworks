getHoles = (index) => document.getElementById(`hole${index}`);
const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
let d = 0;
let l = 0;

for (const i of Array(9).keys()) {
  holes = getHoles(i + 1);
  holes.onclick = (element) => {
    hole = element.target;

    if (hole.className === "hole hole_has-mole") {
      d++;
      dead.textContent = d;
    } else {
      l++;
      lost.textContent = l;
    }

    isEndGame = false;
    if (d == 10) {
      window.alert("WIN ");
      isEndGame = true;
    }

    if (l == 5) {
      window.alert("GAME OVER");
      isEndGame = true;
    }

    if (isEndGame) {
      let d = 0;
      let l = 0;
      dead.textContent = d;
      lost.textContent = l;
    }
  };
}
