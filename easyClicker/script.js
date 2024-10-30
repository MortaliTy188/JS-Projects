const counter = document.querySelector(".counter");
const plus = document.querySelector(".btn");
const start = document.querySelector("#start");

plus.disabled = true;

plus.addEventListener("click", () => {
  let value = parseInt(counter.innerText);
  value += 1;
  counter.innerText = value;
});

start.addEventListener("click", () => {
  counter.innerText = 0;
  plus.disabled = false;

  start.style.display = "none";
  counter.style.display = "block";
  plus.style.display = "block";
});
