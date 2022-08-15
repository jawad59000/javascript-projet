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

function demarer() {
  video.play();
  play.classList.add("cache");
  pause.classList.add("display");
  loaderCache();
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
    loaderCache();
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
  }
});
video.addEventListener("dblclick", function () {
  if (enLarge.classList.contains("cache")) {
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

volumeBar.addEventListener("click", function (e) {
  let volumeBarWidth = volumeBar.clientWidth;

  let coordonateBar = volumeBar.getBoundingClientRect();

  let positionClick = e.x - coordonateBar.x;

  let positionVolume = positionClick / volumeBarWidth;

  video.volume = positionVolume;

  document.querySelector(
    ".loader .volume_bar .progress_volume"
  ).style.width = `${positionVolume * volumeBarWidth}px`;
  // console.log(lecturePosition);
});

const mute = document.querySelector(".loader .volume_block .volume");
const onmute = document.querySelector(".loader .volume_block .mute");

mute.addEventListener("click", function () {
  video.muted = true;
  mute.classList.add("cache");
  onmute.classList.add("display");
});

onmute.addEventListener("click", function () {
  video.muted = false;
  mute.classList.remove("cache");
  onmute.classList.remove("display");
});

function loaderCache() {
  const sec = 2;
  if (play.classList.contains("cache")) {
    loader.classList.add("cache");
  }
}

section.addEventListener(
  "mousemove",
  function () {
    loader.classList.remove("cache");
  },
  1000
);

section.addEventListener(
  "mouseout",
  function () {
    const timer = 2;

    loader.classList.add("cache");
  },
  1000
);

let timeInVideo = document.querySelector(".loader .currentTime");
let restDuration = document.querySelector(".loader .restDuration");

video.addEventListener("loadedmetadata", function () {
  const durationVideo = video.duration / 60;

  let restDurationVideo = durationVideo;
  restDurationVideo = Math.round(restDurationVideo * 100) / 100;

  restDuration.innerHTML = restDurationVideo;
});

video.addEventListener("timeupdate", function () {
  let time = video.currentTime / 60;
  time = Math.round(time * 100) / 100;
  timeInVideo.innerHTML = time;

  const durationVideo = video.duration / 60;

  let restDurationVideo = durationVideo - time;
  restDurationVideo = Math.round(restDurationVideo * 100) / 100;

  restDuration.innerHTML = restDurationVideo;
});

let timer = 2;
const hideControls = () => {
  if (video.paused); // si la vidéo est en pause on ne cache pas les controles
  timer = setTimeout(() => {
    loader.classList.add("cache");
  }, 2000); // on affiche les controles dans 3s
};

video.addEventListener("mousemove", () => {
  loader.classList.remove("cache");
  clearTimeout(timer); // clear timer when mouse is moving
  hideControls(); //masquer les contrôles après 3 secondes
});
