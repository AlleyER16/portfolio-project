////////////////////////////////////////////
///// Mobile navbar toggle
const navbarToggle = document.getElementById("navbar-toggle");
const navbar = document.getElementById("navbar");

navbarToggle.addEventListener("click", () => {
  // remove the class if exist and add if not exist
  navbar.classList.toggle("open");
  navbarToggle.classList.toggle("open");
});

////////////////////////////////////////////
///// Dark and light mode toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");

const getTheme = () => {
  const currentTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

  const localStorageTheme = localStorage.getItem("theme");

  return localStorageTheme
    ? localStorageTheme === "dark"
      ? "dark"
      : "light"
    : currentTheme;
};

darkModeToggle.addEventListener("click", () => {
  const theme = getTheme();

  if (theme === "dark") {
    // set to light
    localStorage.setItem("theme", "light");
    darkModeToggle.classList.remove("toggle--active");

    // trigger css theme change as defined in css style with light-dark
    document.documentElement.dataset.theme = "light";
  } else {
    // set to datk
    localStorage.setItem("theme", "dark");
    darkModeToggle.classList.add("toggle--active");

    // trigger css theme change as defined in css style with light-dark
    document.documentElement.dataset.theme = "dark";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const theme = getTheme();

  if (theme === "dark") {
    darkModeToggle.classList.add("toggle--active");
    document.documentElement.dataset.theme = "dark";
  } else {
    document.documentElement.dataset.theme = "light";
  }
});

////////////////////////////////////////////
///// Date and Time
const dateEl = document.getElementById("date");
const timeEl = document.getElementById("time");

const MONTHS_LONG = [
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

const getDateTime = () => {
  const date = new Date();

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const hours = date.getHours();
  const meridian = hours < 12 ? "am" : "pm";

  let hours12format = hours % 12;
  hours12format = hours12format ? hours12format : 12;

  const comp_date = `${MONTHS_LONG[month]} ${String(day).padStart(2, "0")}, ${year}`;
  const comp_time = `${String(hours12format).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")} ${meridian.toUpperCase()}`;

  return { date: comp_date, time: comp_time };
};

window.setInterval(() => {
  const data = getDateTime();

  dateEl.textContent = `${data.date}.`;
  timeEl.textContent = `${data.time}`;
}, 1000);

////////////////////////////////////////////
///// Audio
const audioEl = document.getElementById("page-audio");
const audioControl = document.getElementById("page-audio-control");
const playIcon = document.getElementById("play-icon");
const pauseIcon = document.getElementById("pause-icon");
const audioProgressEl = document.getElementById("page-audio-progress");

audioControl.addEventListener("click", () => {
  if (audioEl.paused) {
    audioEl.play();
  } else {
    audioEl.pause();
  }
});

audioEl.addEventListener("play", () => {
  playIcon.style.display = "none";
  pauseIcon.style.display = "block";
});

audioEl.addEventListener("pause", () => {
  playIcon.style.display = "block";
  pauseIcon.style.display = "none";
});

audioEl.addEventListener("timeupdate", () => {
  audioProgressEl.style.width = `${(audioEl.currentTime / audioEl.duration) * 100}%`;
});

////////////////////////////////////////////
///// Back to Top
const backToTopButton = document.getElementById("back-to-top");

document.addEventListener("scroll", () => {
  const show = window.scrollY >= 1000;

  if (show) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const show = window.scrollY >= 1000;

  if (show) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
