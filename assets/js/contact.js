///////////////////////////////////////////////
////// Contact Form

const contactForm = document.getElementById("contact-form");

let firstSubmit = false;

const nameEl = contactForm.elements.namedItem("name");
const emailEl = contactForm.elements.namedItem("email");
const phoneNumberEl = contactForm.elements.namedItem("phone_number");
const messageEl = contactForm.elements.namedItem("message");

const successModal = document.getElementById("success-modal");
const closeModal = document.getElementById("close-modal-button");
const overlay = document.getElementById("overlay");

overlay.addEventListener("click", () => {
  successModal.classList.toggle("open");
  overlay.classList.toggle("show");
});
closeModal.addEventListener("click", () => {
  successModal.classList.toggle("open");
  overlay.classList.toggle("show");
});

const addError = (el, errorMessage) => {
  const parentEl = el.closest(".input-group");
  const infoEl = parentEl.querySelector("p");

  parentEl.classList.add("error");

  infoEl.innerHTML = errorMessage;
  infoEl.style.display = "block";
};

const removeError = (el) => {
  const parentEl = el.closest(".input-group");
  const infoEl = parentEl.querySelector("p");

  parentEl.classList.remove("error");

  infoEl.innerHTML = "";
  infoEl.style.display = "none";
};

// Remove error on input
nameEl.addEventListener("input", () => {
  if (!firstSubmit) return;

  const value = nameEl.value;

  if (!value) {
    addError(nameEl, "This field is required");
  } else {
    removeError(nameEl);
  }
});

emailEl.addEventListener("input", () => {
  if (!firstSubmit) return;

  const value = emailEl.value;

  // check for empty and check via regex
  if (value) {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      removeError(emailEl);
    } else {
      addError(emailEl, "Enter a valid email");
    }
  } else {
    addError(emailEl, "This field is required");
  }
});

phoneNumberEl.addEventListener("input", () => {
  if (!firstSubmit) return;

  const value = phoneNumberEl.value;

  if (!value) {
    addError(phoneNumberEl, "This field is required");
  } else {
    removeError(phoneNumberEl);
  }
});

messageEl.addEventListener("input", () => {
  if (!firstSubmit) return;

  const value = messageEl.value;

  if (!value) {
    addError(messageEl, "This field is required");
  } else {
    removeError(messageEl);
  }
});

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = nameEl.value;
  const email = emailEl.value;
  const phoneNumber = phoneNumberEl.value;
  const message = messageEl.value;

  let errorFlag = false;

  if (!name) {
    addError(nameEl, "This field is required");
    errorFlag = true;
  }

  if (!email) {
    addError(emailEl, "This field is required");
    errorFlag = true;
  } else {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      addError(emailEl, "Enter a valid email");
      errorFlag = true;
    }
  }

  if (!phoneNumber) {
    addError(phoneNumberEl, "This field is required");
    errorFlag = true;
  }

  if (!message) {
    addError(messageEl, "This field is required");
    errorFlag = true;
  }

  if (errorFlag) {
    firstSubmit = true;
    return;
  }

  successModal.classList.toggle("open");
  overlay.classList.toggle("show");

  firstSubmit = false;

  nameEl.value = "";
  emailEl.value = "";
  phoneNumberEl.value = "";
  messageEl.value = "";
});
