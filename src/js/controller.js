const btnOne = document.querySelector(".calc--btn-1");
const btnTwo = document.querySelector(".calc--btn-2");
const btnThree = document.querySelector(".calc--btn-3");
const btnFour = document.querySelector(".calc--btn-4");
const btnFive = document.querySelector(".calc--btn-5");
const btnSix = document.querySelector(".calc--btn-6");
const btnSeven = document.querySelector(".calc--btn-7");
const btnEight = document.querySelector(".calc--btn-8");
const btnNine = document.querySelector(".calc--btn-9");
const btnZero = document.querySelector(".calc--btn-0");
const btnPlus = document.querySelector(".calc--btn-plus");
const btnMinus = document.querySelector(".calc--btn-minus");
const btnDelete = document.querySelector(".calc--btn-delete");
const btnMultiply = document.querySelector(".calc--btn-x");
const btnRemainder = document.querySelector(".calc--btn-remainder");
const btnClear = document.querySelector(".calc--btn-c");
const btnDot = document.querySelector(".calc--btn-dot");
const btnEqual = document.querySelector(".calc--btn-equal");
const btnDivide = document.querySelector(".calc--btn-divide");
const btnCE = document.querySelector(".calc--btn-ce");

const screen = document.querySelector(".screen");

btnOne.addEventListener("click", function (e) {
  e.preventDefault();
  if (screen.value.length === 1 && screen.value.slice(-1) === "0") {
    screen.value = "1";
  } else {
    screen.value += "1";
  }
});
btnTwo.addEventListener("click", function (e) {
  e.preventDefault();
  if (screen.value.length === 1 && screen.value.slice(-1) === "0") {
    screen.value = "";
  }
  screen.value += "2";
});
btnThree.addEventListener("click", function (e) {
  e.preventDefault();
  if (screen.value.length === 1 && screen.value.slice(-1) === "0") {
    screen.value = "";
  }
  screen.value += "3";
});
btnFour.addEventListener("click", function (e) {
  e.preventDefault();
  if (screen.value.length === 1 && screen.value.slice(-1) === "0") {
    screen.value = "";
  }
  screen.value += "4";
});
btnFive.addEventListener("click", function (e) {
  e.preventDefault();
  if (screen.value.length === 1 && screen.value.slice(-1) === "0") {
    screen.value = "";
  }
  screen.value += "5";
});
btnSix.addEventListener("click", function (e) {
  e.preventDefault();
  if (screen.value.length === 1 && screen.value.slice(-1) === "0") {
    screen.value = "";
  }
  screen.value += "6";
});
btnSeven.addEventListener("click", function (e) {
  e.preventDefault();
  if (screen.value.length === 1 && screen.value.slice(-1) === "0") {
    screen.value = "";
  }
  screen.value += "7";
});
btnEight.addEventListener("click", function (e) {
  e.preventDefault();
  if (screen.value.length === 1 && screen.value.slice(-1) === "0") {
    screen.value = "";
  }
  screen.value += "8";
});
btnNine.addEventListener("click", function (e) {
  e.preventDefault();
  if (screen.value.length === 1 && screen.value.slice(-1) === "0") {
    screen.value = "";
  }
  screen.value += "9";
});
btnZero.addEventListener("click", function (e) {
  e.preventDefault();
  if (screen.value.length === 1 && screen.value.slice(-1) === "0") {
    screen.value = "";
  }
  screen.value += "0";
});
btnPlus.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    screen.value.slice(-1) !== "+" &&
    screen.value.slice(-1) !== "%" &&
    screen.value.slice(-1) !== "-" &&
    screen.value.slice(-1) !== "*" &&
    screen.value.slice(-1) !== "/" &&
    screen.value !== ""
  )
    screen.value += "+";
});
btnMinus.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    screen.value.slice(-1) !== "+" &&
    screen.value.slice(-1) !== "%" &&
    screen.value.slice(-1) !== "-" &&
    screen.value.slice(-1) !== "*" &&
    screen.value.slice(-1) !== "/" &&
    screen.value !== ""
  )
    screen.value += "-";
});
btnMultiply.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    screen.value.slice(-1) !== "+" &&
    screen.value.slice(-1) !== "%" &&
    screen.value.slice(-1) !== "-" &&
    screen.value.slice(-1) !== "*" &&
    screen.value.slice(-1) !== "/" &&
    screen.value !== ""
  )
    screen.value += "*";
});

btnDivide.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    screen.value.slice(-1) !== "+" &&
    screen.value.slice(-1) !== "%" &&
    screen.value.slice(-1) !== "-" &&
    screen.value.slice(-1) !== "*" &&
    screen.value.slice(-1) !== "/" &&
    screen.value !== ""
  )
    screen.value += "/";
});
btnRemainder.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    screen.value.slice(-1) !== "+" &&
    screen.value.slice(-1) !== "%" &&
    screen.value.slice(-1) !== "-" &&
    screen.value.slice(-1) !== "*" &&
    screen.value.slice(-1) !== "/" &&
    screen.value !== ""
  )
    screen.value += "%";
});

btnClear.addEventListener("click", function (e) {
  e.preventDefault();
  screen.value = "";
});
btnCE.addEventListener("click", function (e) {
  e.preventDefault();
  screen.value = "";
});
btnDot.addEventListener("click", function (e) {
  e.preventDefault();
  if (screen.value.slice(-1) !== ".") screen.value += ".";
});
btnDelete.addEventListener("click", function (e) {
  e.preventDefault();

  let str = screen.value.slice(0, -1);
  screen.value = str;
});

btnEqual.addEventListener("click", function (e) {
  e.preventDefault();
  if (screen.value !== "") screen.value = eval(screen.value);
});
