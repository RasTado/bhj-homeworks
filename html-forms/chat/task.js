const chatWidgetSide = document.querySelector(".chat-widget__side");
const chatWidget = document.querySelector(".chat-widget");
const messages = document.querySelector(".chat-widget__messages");
const chatWidgetC = document.querySelector(".chat-widget__messages-container");
const input = document.getElementById("chat-widget__input");

chatWidgetSide.addEventListener("click", () => {
  chatWidget.classList.add("chat-widget_active");
  timeOut(30000);
});

function getTime() {
  let date = new Date();
  return `${date.getHours()}:${date.getMinutes()}`;
}

function timeOut(delay) {
  messages.innerHTML += `
    <div class="message" id="wrtMsg">
        <div class="message__text" style="color: darkgrey; background: none; font-size: 10px;">Writing...</div>
    </div>`;
  let timeO = setTimeout(() => {
    const wrtMsg = document.getElementById("wrtMsg");
    wrtMsg.outerHTML = `
  <div class="message">
      <div class="message__text">${
        botAnswList[Math.floor(Math.random() * botAnswList.length)]
      }</div>
      <div class="message__time">${getTime()}</div>
  </div>`;
  }, delay);
}

input.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    const wrtMsg = document.getElementById("wrtMsg");
    if (input.value.trim() == "") {
      console.log("Empty filed");
    } else {
      if (wrtMsg) {
        wrtMsg.outerHTML = "";
      }
      messages.innerHTML += `
        <div class="message message_client">
            <div class="message__text">${input.value}</div>
            <div class="message__time">${getTime()}</div>
        </div>`;
      input.value = "";
      timeOut(Math.random() * 2000);
      chatWidgetC.scrollTo(0, chatWidgetC.scrollHeight);
    }
  }
});

let botAnswList = [
  "До свидания!",
  "Привет! Пока!",
  "Отстаньте от нас",
  "Никого нет дома",
  "Разговор окончен.",
];
