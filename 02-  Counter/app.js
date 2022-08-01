let add = document.getElementById("increase");
let remove = document.getElementById("decrease");
let reset = document.getElementById("reset");
let int = document.getElementById("number");
let colorNumber = number.style.color;
let integer = 0;

add.addEventListener("click", function () {
  integer += 1;
  int.innerHTML = integer;
  color();
});

reset.addEventListener("click", function () {
  integer = 0;
  int.innerHTML = integer;
  color();
});
remove.addEventListener("click", function () {
  integer -= 1;
  int.innerHTML = integer;
  color();
});

function color() {
  if (number.innerHTML > 0) {
    number.style.color = "green";
  } else if (number.innerHTML < 0) {
    number.style.color = "red";
  } else {
    number.style.color = "black";
  }
}
