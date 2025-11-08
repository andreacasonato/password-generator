const characters = [
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
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
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

/* GOALS:
- Generate two random passwords when the user clicks the button
- Each password should be 15
characters long
*/

let passwordLengthEl = document.getElementById("password-length");
const generateButton = document.getElementById("generateButton");
const outputOneEl = document.getElementById("outputOneEl");
const outputTwoEl = document.getElementById("outputTwoEl");

// Create two random passwords
generateButton.addEventListener("click", function () {
  let desiredLength = Number(passwordLengthEl.value);

  if (desiredLength < 8 || desiredLength > 18) {
    alert("Please select a password length between 8 and 18");
    return;
  }

  let passwordOne = "";
  let passwordTwo = "";

  for (let i = 0; i < desiredLength; i++) {
    passwordOne += characters[Math.floor(Math.random() * characters.length)];
    passwordTwo += characters[Math.floor(Math.random() * characters.length)];
  }

  outputOneEl.textContent = passwordOne;
  outputTwoEl.textContent = passwordTwo;
});

// --------------------------------------------------- //

/* Next features:
- Add "copy-on-click"
- Toggle "symbols" and "numbers" on/off 
*/
