const form = document.getElementById("form");
const progrBar = document.getElementById("progress");
const sendB = document.getElementById("send");
const fileInp = document.querySelector("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendB.disabled = true;

  const xhr = new XMLHttpRequest();

  const file = fileInp.files[0];
  console.log(file);

  xhr.addEventListener("readystatechange", () => {
    console.log("state:", xhr.readyState);
    switch (xhr.readyState) {
      case xhr.LOADING:
        console.log("LOADING");
        console.log(xhr.response);
        break;

      case xhr.DONE:
        console.log("DONE");
        sendB.disabled = false;
        break;
    }
  });

  xhr.upload.addEventListener("progress", (e) => {
    progrBar.value = e.loaded / e.total;
    progrBar.style.setProperty(
      "--percent-loaded",
      `'${(progrBar.value * 100).toFixed(0)} %'`
    );
  });

  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
  xhr.setRequestHeader("Content-Type", "multipart/form-data");

  var formData = new FormData();
  formData.append("file", file);

  xhr.send(formData);
});
