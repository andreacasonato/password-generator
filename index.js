// ========= Character Sets =========

// All uppercase and lowercase letters
const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// All numeric digits
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Common special symbols
const symbols = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

// ========= DOM Element References =========

const passwordLengthEl = document.getElementById("password-length");
const passwordCountEl = document.getElementById("password-count");
const generateButton = document.getElementById("generateButton");
const outputsContainer = document.getElementById("outputsContainer");
const toggleSymbols = document.getElementById("toggleButtonSymbols");
const toggleNums = document.getElementById("toggleButtonNums");

// ========= Helpers =========

function generatePassword(desiredLength, allowedChars) {
  let password = "";
  for (let i = 0; i < desiredLength; i++) {
    password += allowedChars[Math.floor(Math.random() * allowedChars.length)];
  }
  return password;
}

function createCopyIconSvg() {
  return `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
  `;
}

function createPasswordRow(passwordText) {
  const row = document.createElement("div");
  row.className = "generator__output-item";

  const passwordEl = document.createElement("p");
  passwordEl.className = "password-text";
  passwordEl.textContent = passwordText;

  const copyBtn = document.createElement("button");
  copyBtn.className = "copy-btn";
  copyBtn.type = "button";
  copyBtn.innerHTML = createCopyIconSvg();

  const feedbackEl = document.createElement("div");
  feedbackEl.className = "copy-feedback";
  feedbackEl.textContent = "COPIED!";

  copyBtn.addEventListener("click", function () {
    if (!passwordEl.textContent) return;
    navigator.clipboard.writeText(passwordEl.textContent);
    showCopyFeedback(feedbackEl, copyBtn);
  });

  row.appendChild(passwordEl);
  row.appendChild(copyBtn);
  row.appendChild(feedbackEl);

  return { row, copyBtn };
}

// ========= Generate Passwords on Click =========

generateButton.addEventListener("click", function () {
  // Convert input value to a number
  let desiredLength = Number(passwordLengthEl.value);
  let desiredCount = Number(passwordCountEl.value);

  // Ensure password length is between 12 and 18 characters
  if (desiredLength < 12 || desiredLength > 18) {
    alert("Please select a password length between 12 and 18");
    return;
  }

  if (desiredCount < 1 || desiredCount > 10) {
    alert("Please select a number of passwords between 1 and 10");
    return;
  }

  // Start with letters as the base character set
  let allowedChars = [...letters];

  // Add symbols and/or numbers if toggles are turned on
  const includeSymbols = toggleSymbols.classList.contains("on");
  const includeNumbers = toggleNums.classList.contains("on");

  if (includeSymbols) allowedChars = allowedChars.concat(symbols);
  if (includeNumbers) allowedChars = allowedChars.concat(numbers);

  outputsContainer.innerHTML = "";

  for (let i = 0; i < desiredCount; i++) {
    const password = generatePassword(desiredLength, allowedChars);
    const { row, copyBtn } = createPasswordRow(password);
    outputsContainer.appendChild(row);
    copyBtn.classList.add("visible");
  }
});

// ========= Toggle Buttons for Options =========

// Turn symbols option on/off
toggleSymbols.addEventListener("click", function () {
  toggleSymbols.classList.toggle("on");
});

// Turn numbers option on/off
toggleNums.addEventListener("click", function () {
  toggleNums.classList.toggle("on");
});

// ========= Show Copy Feedback =========

function showCopyFeedback(feedbackElement, copyButton) {
  // Hide the copy button and show feedback
  copyButton.classList.remove("visible");

  feedbackElement.classList.add("show");

  setTimeout(() => {
    feedbackElement.classList.remove("show");
    // Show the copy button again after feedback disappears
    setTimeout(() => {
      copyButton.classList.add("visible");
    }, 300);
  }, 1500);
}
