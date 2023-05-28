const loader = document.getElementById("loader");
const items = document.getElementById("items");
const xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === xhr.DONE) {
    loader.classList.remove("loader_active");
    // console.log(xhr.responseText);
    courseReader(xhr.responseText);
  }
});
xhr.open(
  "GET",
  "https://students.netoservices.ru/nestjs-backend/slow-get-courses"
);
xhr.send();

function courseReader(x) {
  for (let data in JSON.parse(x).response.Valute) {
    // console.log(data);
    let courseData = JSON.parse(x).response.Valute[data];
    // console.log(courseData);
    cResult = `
      <div>
      <span class="item__code">
      ${courseData.CharCode}
      </span>
      <span class="item__value">
      ${courseData.Value}
      </span>
      <span class="item__currency">
      руб.
      </span>
      </div>`;
    items.insertAdjacentHTML("beforeEnd", cResult);
  }
}
