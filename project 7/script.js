const left = document.getElementById(".left");
const right = document.getElementById(".right");
const container = document.querySelector(".container");
left.addEventListener("mouseenter", () =>
  container.classList.add("hover-left")
);
left.addEventListener("mouseenter", () =>
  container.classList.remove("hover-left")
);

right.addEventListener("mouseenter", () =>
  container.classList.add("hover-right")
);
right.addEventListener("mouseenter", () =>
  container.classList.remove("hover-right")
);
