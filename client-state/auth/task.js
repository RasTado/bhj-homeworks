const signin = document.getElementById("signin");
const signinF = document.getElementById("signin__form");
const welcome = document.getElementById("welcome");
const userId = document.getElementById("user_id");
const pairs = document.cookie.split("; ");
const cookie = pairs.find((p) => p.startsWith("user_id="));

signinF.addEventListener("submit", (e) => {
  e.preventDefault();

  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  xhr.open(
    "POST",
    "https://students.netoservices.ru/nestjs-backend/auth",
    true
  );
  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === xhr.DONE) {
      const r = xhr.response;
      if (r.success === true) {
        console.log(r.user_id);
        signin.classList.remove("signin_active");
        welcome.classList.add("welcome_active");
        userId.textContent = r.user_id;
        document.cookie = `user_id=${r.user_id}`;
      } else {
        alert("«Неверный логин/пароль»");
      }
    }
  });

  const formData = new FormData(signinF);
  xhr.send(formData);

  signinF.reset();
});

if (cookie) {
  signin.classList.remove("signin_active");
  welcome.classList.add("welcome_active");
  userId.textContent = cookie.substring(cookie.length - 3);
}
