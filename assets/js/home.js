////////////////////////////////////////////
///// Intro video
const introVideoOverlay = document.getElementById("intro-video-overlay");
const introVideo = document.getElementById("intro-video");
const introVideoControl = document.getElementById("intro-video-control");

introVideoControl.addEventListener("click", () => {
  introVideo.classList.add("show");
  introVideoOverlay.classList.add("show");
});

introVideoOverlay.addEventListener("click", () => {
  introVideo.classList.remove("show");
  introVideoOverlay.classList.remove("show");
  introVideo.pause();
});
