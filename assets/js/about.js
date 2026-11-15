/////////////////////////////
//// Career Tab
const educationalBackgroundToggle = document.getElementById(
  "education-background-toggle",
);
const professionalWorkToggle = document.getElementById(
  "professional-work-toggle",
);

const educationalBackground = document.getElementById("educational-background");
const professionalWork = document.getElementById("professional-work");

educationalBackgroundToggle.addEventListener("click", () => {
  educationalBackground.style.display = "flex";
  educationalBackgroundToggle.classList.add("active");

  professionalWork.style.display = "none";
  professionalWorkToggle.classList.remove("active");
});

professionalWorkToggle.addEventListener("click", () => {
  educationalBackground.style.display = "none";
  educationalBackgroundToggle.classList.remove("active");

  professionalWork.style.display = "block";
  professionalWorkToggle.classList.add("active");
});
