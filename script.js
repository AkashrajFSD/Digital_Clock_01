const hourElement = document.getElementById("hours");
const minutesElements = document.getElementById("minutes");
const secondsElements = document.getElementById("seconds");
const ampmElements = document.getElementById("ampm");

function updateClock() {
  // hours
  let h = new Date().getHours();

  // minutes
  let m = new Date().getMinutes();

  // seconds
  let s = new Date().getSeconds();

  // ampm
  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  //   adding 0 infront of number
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourElement.innerText = h;
  minutesElements.innerText = m;
  secondsElements.innerText = s;
  ampmElements.innerText = ampm;

  //   for seconds to display numbers

  setTimeout(() => {
    updateClock();
  }, 1000);
}
updateClock();
