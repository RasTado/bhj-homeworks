const bookControlers = document.querySelectorAll(".book__controls");
let styles = {};
let elementToBookStyle = {
  size: {
    big: "book_fs-big",
    small: "book_fs-small",
  },
};

bookControlers.forEach((bookControler) => {
  bookControler.addEventListener("click", (e) => {
    e.preventDefault();
    const book = e.currentTarget.parentNode;
    const target = e.target;
    const control = target.parentNode;

    if (control.className.includes("book__control_font-size")) {
      styles["size"] = elementToBookStyle.size[target.dataset.size];
      fontSize = control.querySelectorAll(".font-size");
      fontSize.forEach((item) => item.classList.remove("font-size_active"));
      target.classList.add("font-size_active");
    }
    changeStyle(book, styles);
  });
});

function changeStyle(book) {
  book.classList = ["book"];
  book.classList.add(styles["size"]);
}
