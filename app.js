const birthYear = document.querySelector(".birthYear");
let birthMonth = document.querySelector(".birthMonth");
const birthDay = document.querySelector(".birthDay");
const age = document.querySelector("#age");
const button = document.querySelector("button");
const errorMessage = document.querySelector(".errorMessage");
const today = new Date();
const currentYear = today.getFullYear();
const summary = document.querySelector("#summary");
const daySummary = document.querySelector(".daySummary");
const monthSummary = document.querySelector(".monthSummary");
const yearSummary = document.querySelector(".yearSummary");
const form = document.querySelector("form");

birthDay.addEventListener("blur", function (e) {
  e.preventDefault;
  if (birthDay.value < 01 || birthDay.value > 31) {
    birthDay.classList.add("invalid");
    errorMessage.classList.add("invalid");
    birthDay.focus();
  } else {
    birthDay.classList.remove("invalid");
    errorMessage.classList.remove("invalid");
  }
});

birthMonth.addEventListener("blur", function (e) {
  const dayMonthTally = function () {
    birthMonth.classList.remove("invalid");
    birthDay.classList.remove("invalid");
    errorMessage.classList.remove("invalid");
    birthYear.focus();
  };
  const dayMonthTallyFailure = function () {
    birthMonth.classList.add("invalid");
    birthDay.classList.add("invalid");
    errorMessage.classList.add("invalid");
    errorMessage.textContent = "This month seems to be longer than usual.";
  };
  switch (birthMonth.value) {
    case "02":
      if (birthDay.value > 29) {
        dayMonthTallyFailure();
      } else {
        dayMonthTally();
      }
      break;
    case "04":
    case "06":
    case "09":
    case "11":
      if (birthDay.value > 30) {
        dayMonthTallyFailure();
      } else {
        dayMonthTally();
      }
      break;
    case "01":
    case "03":
    case "05":
    case "07":
    case "08":
    case "10":
    case "12":
      dayMonthTally();
      break;
    default:
      birthMonth.classList.add("invalid");
      errorMessage.classList.add("invalid");
      birthMonth.focus();
  }
});

birthYear.addEventListener("blur", function (e) {
  e.preventDefault;
  if (birthYear.value > currentYear || !birthYear.value) {
    birthYear.classList.add("invalid");
    errorMessage.classList.add("invalid");
    errorMessage.textContent = "You aren't born yet. Please try later.";
  } else {
    birthYear.classList.remove("invalid");
    errorMessage.classList.remove("invalid");
    button.disabled = false;
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault;
  daySummary.textContent = birthDay.value;
  monthSummary.textContent = birthMonth.value;
  yearSummary.textContent = birthYear.value;
  alert("date de naissance"+birthYear.value)
});

const date1 = today;
let date2 = new Date(birthYear.value, birthMonth.value-1, birthDay.value);


// YearReport.innerHTML = Year.value;
// const today = new Date; //décomposition :
// let year = today.getFullYear();
// console.log(year);
// year = year.toString().substring(2);
// year = parseInt(year);

// contrainte de validité entre année A et A+3
//expYear.addEventListener('blur', function() {
//    expYear.value >= year && expYear.value <= (year + 3) ? invalidDate.style.display = "none" : invalidDate.style.display = "block";
//})