// Target start = 6 September 2025
const startDate = new Date("September 6, 2025 00:00:00").getTime();

// Target end = 6 September 2026, 10:00 PM
const endDate = new Date("September 6, 2026 22:00:00").getTime();

function countdown() {
  const now = new Date().getTime();

  // Agar countdown abhi start nahi hua
  if (now < startDate) {
    document.querySelector(".col").innerHTML =
      "<h2 style='color:white;'>Countdown will start from 6 Sept 2025</h2>";
    return;
  }

  const gap = endDate - now;

  // Time calculations
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);

  // Display in inputs
  document.getElementById("days").value = d >= 0 ? d : 0;
  document.getElementById("hours").value = h >= 0 ? h : 0;
  document.getElementById("minutes").value = m >= 0 ? m : 0;
  document.getElementById("seconds").value = s >= 0 ? s : 0;

  // Agar target time cross ho gaya
  if (gap < 0) {
    clearInterval(timer);
    document.querySelector(".col").innerHTML =
      "<h2 style='color:white;'> Event Started on 6 Sept 2026 </h2>";
  }
}

let timer = setInterval(countdown, 1000);
