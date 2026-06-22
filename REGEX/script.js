const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const phoneInput    = document.getElementById("phone");

const usernameMsg = document.getElementById("username-msg");
const passwordMsg = document.getElementById("password-msg");
const phoneMsg    = document.getElementById("phone-msg");

const usernameRegex = /^[a-zA-Z0-9]{5,15}$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/;
const phoneRegex    = /^\+234\d{10}$/;

function validate(input, regex, msgEl, validText, invalidText) {
  if (input.value === "") {
    msgEl.textContent = "";
    msgEl.className = "msg";
  } else if (regex.test(input.value)) {
    msgEl.textContent = validText;
    msgEl.className = "msg valid";
  } else {
    msgEl.textContent = invalidText;
    msgEl.className = "msg invalid";
  }
}

usernameInput.addEventListener("input", function () {
  validate(
    usernameInput,
    usernameRegex,
    usernameMsg,
    "Username looks good!",
    "5 to 15 characters, letters and numbers only."
  );
});

passwordInput.addEventListener("input", function () {
  validate(
    passwordInput,
    passwordRegex,
    passwordMsg,
    "Password is strong!",
    "Min 8 characters, include uppercase, a digit, and a special character."
  );
});

phoneInput.addEventListener("input", function () {
  validate(
    phoneInput,
    phoneRegex,
    phoneMsg,
    "Phone number is valid!",
    "Must start with +234 followed by 10 digits."
  );
});
