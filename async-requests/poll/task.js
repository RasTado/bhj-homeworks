const pollT = document.getElementById("poll__title");
const pollA = document.getElementById("poll__answers");
const xhr = new XMLHttpRequest();
xhr.responseType = "json";

xhr.addEventListener("readystatechange", (e) => {
  if (xhr.readyState === xhr.DONE) {
    if (xhr.status === 200) {
      // console.log(xhr.response);
      poll(xhr.response);
    } else if (xhr.status === 201) {
      alert("Спасибо, ваш голос засчитан!");
      pollA.style.display = "none";
    }
  }
});

function poll(x) {
  let allData = x;
  let data = allData.data;
  let answers = "";

  pollT.textContent = data.title;
  for (let answer of data.answers) {
    answers += `
      <button class="poll__answer">
          ${answer}
      </button>`;
  }
  pollA.innerHTML = answers;

  Array.from(document.getElementsByClassName("poll__answer")).forEach((el) => {
    el.addEventListener("click", (e) => {
      xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/poll");
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhr.send(
        `vote=${allData.id}&answer=${data.answers.findIndex(
          (el) => el == e.target.textContent
        )}`
      );
    });
  });
}
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.send();
