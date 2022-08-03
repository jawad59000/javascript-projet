const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

giveaway = document.querySelector(".giveaway");
deadline = document.querySelector(".deadline");
items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2022, 09, 25, 18, 30, 0);

const year = futureDate.getFullYear();

let month = futureDate.getMonth();
month = months[month];

const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

const date = futureDate.getDate();

let weekday = futureDate.getDay();
weekday = weekdays[weekday];

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}pm`;

const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHours = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHours);
  let minutes = Math.floor((t % oneHours) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
}

let countdown = setInterval(getRemainingTime, 1000);
