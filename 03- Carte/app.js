let slider = document.getElementsByClassName("card");
let right = document.getElementById("slide-r");
let left = document.getElementById("slide-l");
let hasard = document.getElementById("hasard");
console.log(slider);
let etape = 0;

nmb_carte = slider.length;

function removeActiveCarte() {
  for (i = 0; i < nmb_carte; i++) {
    slider[i].classList.remove("active");
  }
}

right.addEventListener("click", function () {
  etape++;
  if (etape >= nmb_carte) {
    etape = 0;
  }
  removeActiveCarte();
  slider[etape].classList.add("active");
});

left.addEventListener("click", function () {
  etape--;
  if (etape < 0) {
    etape = nmb_carte - 1;
  }
  removeActiveCarte();
  slider[etape].classList.add("active");
});

function getRandomEtape() {
  return Math.floor(Math.random() * nmb_carte);
}

hasard.addEventListener("click", function () {
  etape = getRandomEtape();
  removeActiveCarte();
  slider[etape].classList.add("active");
});
