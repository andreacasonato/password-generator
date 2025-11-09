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

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

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

/* Features:
- The ability to generate two random passwords when the user clicks the button
- Each password must be at least 12
characters long
- The user may decide whether to include numbers and/or special characters
*/

const passwordLengthEl = document.getElementById("password-length");
const generateButton = document.getElementById("generateButton");
const outputOneEl = document.getElementById("outputOneEl");
const outputTwoEl = document.getElementById("outputTwoEl");

// Create two random passwords
generateButton.addEventListener("click", function () {
  let desiredLength = Number(passwordLengthEl.value);

  if (desiredLength < 12 || desiredLength > 18) {
    alert("Please select a password length between 12 and 18");
    return;
  }

  let allowedChars = [...letters];

  // Check toggle states
  const includeSymbols = toggleSymbols.classList.contains("on");
  const includeNumbers = toggleNums.classList.contains("on");

  if (includeSymbols) {
    allowedChars = allowedChars.concat(symbols);
  }
  if (includeNumbers) {
    allowedChars = allowedChars.concat(numbers);
  }

  let passwordOne = "";
  let passwordTwo = "";

  for (let i = 0; i < desiredLength; i++) {
    passwordOne +=
      allowedChars[Math.floor(Math.random() * allowedChars.length)];
    passwordTwo +=
      allowedChars[Math.floor(Math.random() * allowedChars.length)];
  }

  outputOneEl.textContent = passwordOne;
  outputTwoEl.textContent = passwordTwo;
});

// --------------------------------------------------- //

const toggleSymbols = document.getElementById("toggleButtonSymbols");

toggleSymbols.addEventListener("click", function () {
  toggleSymbols.classList.toggle("on");
});

const toggleNums = document.getElementById("toggleButtonNums");

toggleNums.addEventListener("click", function () {
  toggleNums.classList.toggle("on");
});

// 'Copy on click feature'
outputOneEl.addEventListener("click", function () {
  navigator.clipboard.writeText(outputOneEl.textContent);
});

outputTwoEl.addEventListener("click", function () {
  navigator.clipboard.writeText(outputTwoEl.textContent);
});
