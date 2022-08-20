const play = document.querySelector(".loader .play");
const pause = document.querySelector(".loader .pause");
const stop = document.querySelector(".loader .stop");
const section = document.querySelector(".video");
const video = document.querySelector("video");
const bar = document.querySelector(".loader .bar");
let progress_bar = document.querySelector(".loader .progress_bar");
const enLarge = document.querySelector(".loader .enlarge");
const shrink = document.querySelector(".loader .shrink");
const volumeBar = document.querySelector(".loader .volume_bar");
const loader = document.querySelector(".loader");
const cadre = document.querySelector(".contour");
const title = document.querySelector("h1");

window.addEventListener("load", function () {
  const TL = gsap.timeline({ paused: true });

  TL.staggerFrom(
    title,
    3,
    {
      left: 50,
      opacity: 0,
      transform: "translateY(-10000px)",
      ease: "power2.out",
    },
    0.3,
    "-=1.5"
  )
    .staggerFrom(
      cadre,
      2,
      {
        transform: "scale(0)",
        height: 0,
        opacity: 0,
        ease: "power2.out",
      },
      0.3
    )

    .staggerFrom(
      section,
      2,
      { left: 50, opacity: 0, transform: "scale(0)", ease: "power2.out" },
      0.3,
      "-=1.5"
    )
    .staggerFrom(
      video,
      2,
      { transform: "scale(0)", opacity: 0, ease: "power2.out" },
      0.3,
      "-=2.9"
    );

  // .staggerFrom(
  //   section,
  //   2,
  //   { transform: "scale(0)", opacity: 0, ease: "power2.out" },
  //   0.3,
  //   "-=1"
  // );

  TL.play();
});

function demarer() {
  video.play();
  play.classList.add("cache");
  pause.classList.add("display");
}

function ptitPause() {
  video.pause();
  pause.classList.remove("display");
  play.classList.remove("cache");
}

function playPauseEcran() {
  if (!play.classList.contains("cache")) {
    video.play();
    play.classList.add("cache");
    pause.classList.add("display");
  } else {
    video.pause();
    pause.classList.remove("display");
    play.classList.remove("cache");
  }
}

function restart() {
  video.pause();
  video.currentTime = 0;
  play.classList.remove("cache");
  pause.classList.remove("display");
}

video.ontimeupdate = function () {
  const dureeTotal = video.duration;
  const barWidth = bar.clientWidth;
  let tempInVideo = video.currentTime;
  progress_bar_width = (tempInVideo * barWidth) / dureeTotal;
  document.querySelector(".loader .progress_bar").style.width = `
    ${progress_bar_width}px`;
};

enLarge.addEventListener("click", function () {
  if (section.requestFullscreen) {
    section.requestFullscreen();
    enLarge.classList.add("cache");
    shrink.classList.add("display");
  }
});

video.addEventListener("dblclick", function () {
  if (!enLarge.classList.contains("cache")) {
    enLarge.classList.add("cache");
    section.requestFullscreen();
    shrink.classList.add("display");
  } else {
    document.exitFullscreen();
    enLarge.classList.remove("cache");
    shrink.classList.remove("display");
  }
});

shrink.addEventListener("click", function () {
  if (document.fullscreenElement) {
    document.exitFullscreen();
    enLarge.classList.remove("cache");
    shrink.classList.remove("display");
  }
});

bar.addEventListener("click", function (e) {
  let tempInVideo = video.currentTime;

  const dureeTotal = video.duration;
  console.log(video.duration);
  console.log(dureeTotal);
  let barWidth = bar.clientWidth;

  progress_bar_width = (tempInVideo * barWidth) / dureeTotal;

  let coordonateBar = bar.getBoundingClientRect();

  let positionClick = e.x - coordonateBar.x;

  let lecturePosition = (positionClick * dureeTotal) / barWidth;

  video.currentTime = lecturePosition;
  // console.log(lecturePosition);
});
const volumeProgress = document.querySelector(
  ".loader .volume_bar .progress_volume"
);
volumeBar.addEventListener("click", function (e) {
  let volumeBarWidth = volumeBar.clientWidth;

  let coordonateBar = volumeBar.getBoundingClientRect();

  let positionClick = e.x - coordonateBar.x;

  let positionVolume = positionClick / volumeBarWidth;

  video.volume = positionVolume;

  document.querySelector(
    ".loader .volume_bar .progress_volume"
  ).style.width = `${positionVolume * volumeBarWidth}px`;

  if ((video.muted = true)) {
    video.muted = false;
    mute.classList.remove("cache");
    onmute.classList.remove("display");
  }
  // console.log(lecturePosition);
});

const mute = document.querySelector(".loader .volume_block .volume");
const onmute = document.querySelector(".loader .volume_block .mute");

mute.addEventListener("click", function () {
  video.muted = true;
  mute.classList.add("cache");
  onmute.classList.add("display");
  document.querySelector(".loader .volume_bar .progress_volume").style.width =
    "0px";
});

onmute.addEventListener("click", function () {
  video.muted = false;
  mute.classList.remove("cache");
  onmute.classList.remove("display");
  document.querySelector(".loader .volume_bar .progress_volume").style.width =
    "50%";
});

function loaderCache() {
  const sec = 2;
  if (play.classList.contains("cache")) {
    loader.classList.add("cache");
  }
}

let timeInVideo = document.querySelector(".loader .currentTime");
let restDuration = document.querySelector(".loader .restDuration");

video.addEventListener("loadedmetadata", function (e) {
  let durationVideo = e.target.duration;
  let totalMin = Math.floor(durationVideo / 60);
  let totalSec = Math.floor(durationVideo % 60);
  totalMin < 10 ? (totalMin = "0" + totalMin) : totalMin;
  totalSec < 10 ? (totalSec = "0" + totalSec) : totalSec;
  restDuration.innerHTML = `${totalMin}:${totalSec}`;
});

video.addEventListener("timeupdate", function (e) {
  let currentVideoTime = e.target.currentTime;
  let currentMin = Math.floor(currentVideoTime / 60);
  let currentSec = Math.floor(currentVideoTime % 60);
  currentMin < 10 ? (currentMin = "0" + currentMin) : currentMin;
  currentSec < 10 ? (currentSec = "0" + currentSec) : currentSec;
  timeInVideo.innerHTML = `${currentMin}:${currentSec}`;

  // let durationVideo = e.target.duration;
  // let totalMin = Math.floor(durationVideo / 60) - currentMin;
  // let totalSec = Math.floor(durationVideo % 60) - currentSec;
  // totalSec < 10 ? (totalSec = "0" + totalSec) : totalSec;
  // totalMin < 10 ? (totalMin = "0" + totalMin) : totalMin;

  // restDuration.innerHTML = `${totalMin}:${totalSec}`;
  // console.log(totalSec);
  if (video.ended) {
    pause.classList.remove("display");
    play.classList.remove("cache");
  }
});

let timer;
let timeout;
let isHidden = false;

function magicMouse() {
  timeout = setTimeout(function () {
    if (!isHidden && section.requestFullscreen) {
      section.style.cursor = "none";
      isHidden = true;
    }
  }, 6000);
  if (isHidden) {
    section.style.cursor = "auto";
    isHidden = false;
  }
}
const hideControls = () => {
  if (video.paused || oreg.classList.contains("cache")) {
    // si la vidéo est en pause on ne cache pas les controles
  } else {
    timer = setTimeout(() => {
      loader.classList.add("fantome");
    }, 3000);
  }
}; // on affiche les controles dans 3s

video.addEventListener("mousemove", () => {
  loader.classList.remove("fantome");

  clearTimeout(timer); // clear timer when mouse is moving
  magicMouse();
  hideControls(); //masquer les contrôles après 3 secondes
});
loader.addEventListener("mousemove", () => {
  loader.classList.remove("fantome");
  clearTimeout(timer); // clear timer when mouse is moving
  magicMouse();
  hideControls(); //masquer les contrôles après 3 secondes
});

const arTime = document.querySelector(".arTime");
const avTime = document.querySelector(".avTime");

arTime.addEventListener("click", function () {
  if (video.currentTime > 0) {
    video.currentTime -= 10;
  }
});

window.addEventListener("keydown", function (e) {
  e.preventDefault();
  if (video.currentTime > 0 && e.keyCode === 37) {
    video.currentTime -= 10;
  }
  if (video.currentTime > 0 && e.keyCode === 39) {
    video.currentTime += 10;
  }

  if (video.currentTime > 0 && video.paused && e.keyCode === 32) {
    play.classList.add("cache");
    pause.classList.add("display");
    video.play();
  } else if (video.played && e.keyCode === 32) {
    play.classList.remove("cache");
    pause.classList.remove("display");
    video.pause();
  }
});

avTime.addEventListener("click", function () {
  if (video.currentTime > 0) {
    video.currentTime += 10;
  }
});

const viewTimeArea = document.querySelector(".viewTime");

viewTimeArea.style.display = "none";

bar.addEventListener("mousemove", function (e) {
  let progressWidthVal = bar.clientWidth;
  let x = e.offsetX;
  viewTimeArea.style.setProperty("--x", `${x}px`);
  viewTimeArea.style.display = "block";
  bar.style.display = "block";
  let videoDuration = video.duration;
  let progressTime = Math.floor((x / progressWidthVal) * videoDuration);
  let currentMin = Math.floor(progressTime / 60);
  let currentSec = Math.floor(progressTime % 60);
  currentMin < 10 ? (currentMin = "0" + currentMin) : currentMin;
  currentSec < 10 ? (currentSec = "0" + currentSec) : currentSec;
  viewTimeArea.innerHTML = `${currentMin}:${currentSec}`;
});

bar.addEventListener("mouseleave", function () {
  viewTimeArea.style.display = "none";
});

video.addEventListener("ended", function () {
  if (repeat.classList.contains("active")) {
    video.play();
  }
});

const replay = document.querySelector(".replay");
const repeat = document.querySelector(".repeat");
const noRepeat = document.querySelector(".noRepeat");

repeat.addEventListener("click", function () {
  repeat.classList.toggle("active");
});

const freg = document.querySelector(".freg");
const oreg = document.querySelector(".oreg");

const list = document.querySelector(".list");
list.classList.add("cache");
freg.style.display = "none";

oreg.addEventListener("click", function () {
  list.style.display = "block";
  freg.style.display = "block";
  oreg.classList.add("cache");
});

freg.addEventListener("click", function () {
  list.style.display = "none";
  oreg.classList.remove("cache");
  freg.style.display = "none";
});

const playBack = [...document.querySelectorAll("li")];

playBack.forEach((event) => {
  event.addEventListener("click", function () {
    removeClassActive();
    event.classList.add("actives");
    let speed = event.getAttribute("data-speed");
    video.playbackRate = speed;
    list.style.display = "none";
    oreg.classList.remove("cache");
    freg.style.display = "none";
  });
});

function removeClassActive() {
  playBack.forEach((event) => {
    event.classList.remove("actives");
  });
}

// window.addEventListener("keydown", function (evt) {
//   console.log(evt);
// });
const blockst = document.querySelector(".volumestock");
const blockV = document.querySelector(".volume_block");

mute.addEventListener("mousemove", function () {
  blockst.classList.add("displayS");
});

onmute.addEventListener("mousemove", function () {
  blockst.classList.add("displayS");
});

blockV.addEventListener("mouseleave", function () {
  blockst.classList.remove("displayS");
});
