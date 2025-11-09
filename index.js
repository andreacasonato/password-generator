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
const generateButton = document.getElementById("generateButton");
const outputOneEl = document.getElementById("outputOneEl");
const outputTwoEl = document.getElementById("outputTwoEl");
const toggleSymbols = document.getElementById("toggleButtonSymbols");
const toggleNums = document.getElementById("toggleButtonNums");

// ========= Generate Passwords on Click =========

generateButton.addEventListener("click", function () {
  // Convert input value to a number
  let desiredLength = Number(passwordLengthEl.value);

  // Ensure password length is between 12 and 18 characters
  if (desiredLength < 12 || desiredLength > 18) {
    alert("Please select a password length between 12 and 18");
    return;
  }

  // Start with letters as the base character set
  let allowedChars = [...letters];

  // Add symbols and/or numbers if toggles are turned on
  const includeSymbols = toggleSymbols.classList.contains("on");
  const includeNumbers = toggleNums.classList.contains("on");

  if (includeSymbols) allowedChars = allowedChars.concat(symbols);
  if (includeNumbers) allowedChars = allowedChars.concat(numbers);

  // Initialize two empty passwords
  let passwordOne = "";
  let passwordTwo = "";

  // Randomly generate characters for each password
  for (let i = 0; i < desiredLength; i++) {
    passwordOne +=
      allowedChars[Math.floor(Math.random() * allowedChars.length)];
    passwordTwo +=
      allowedChars[Math.floor(Math.random() * allowedChars.length)];
  }

  // Display generated passwords
  outputOneEl.textContent = passwordOne;
  outputTwoEl.textContent = passwordTwo;
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

// ========= Copy Passwords on Click =========

outputOneEl.addEventListener("click", function () {
  navigator.clipboard.writeText(outputOneEl.textContent);
});

outputTwoEl.addEventListener("click", function () {
  navigator.clipboard.writeText(outputTwoEl.textContent);
});
