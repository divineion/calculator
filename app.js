const birthYear = document.querySelector(".birthYear");
const birthMonth = document.querySelector(".birthMonth");
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
const test = document.querySelector("#test");
const currentMonth = today.getMonth();
const ageInMonth = document.querySelector(".monthes");
const daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const ageInDays = document.querySelector(".days");

//vérification de la saisie user
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

birthMonth.addEventListener("blur", function () {
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

  for (i = 0; i < birthMonth.value; i++)
    if (birthDay.value > daysInMonth[i]) {
      console.log("error");
      dayMonthTallyFailure();
    } else {
      dayMonthTally();
    }

  const regexMonth = RegExp(/0[1-9]|1[012]/);
  regexMonth.exec(birthMonth.value) ? dayMonthTally() : dayMonthTallyFailure();
});

birthYear.addEventListener("blur", function (e) {
  e.preventDefault;
  if (birthYear.value > currentYear || !birthYear.value) {
    birthYear.classList.add("invalid");
    errorMessage.classList.add("invalid");
    errorMessage.textContent = "You aren't born yet. Please try later.";
  } else if (
    birthYear.value == currentYear &&
    birthMonth.value >= currentMonth
  ) {
    birthYear.classList.add("invalid");
    errorMessage.classList.add("invalid");
    errorMessage.textContent = "You aren't born yet. Please try later.";
  } else {
    birthYear.classList.remove("invalid");
    errorMessage.classList.remove("invalid");
    button.disabled = false;
  }
}); //prévoir de supprimer le report de la date de naissance en cas d'erreur

//calcul des diff selon les cas
test.addEventListener("click", function (e) {
  e.preventDefault;
  daySummary.textContent = birthDay.value;
  monthSummary.textContent = birthMonth.value;
  yearSummary.textContent = birthYear.value;
  const date2 = new Date(birthYear.value, birthMonth.value - 1, birthDay.value);
  console.log(date2);
  const date1 = today;
  let diffYears = date1.getFullYear() - date2.getFullYear();
  const ageInYears = document.querySelector(".years");
  ageInYears.textContent = diffYears;

  if (birthDay.value <= today.getDate()) {
    ageInDays.textContent = today.getDate() - parseInt(birthDay.value);
  } else if (birthDay.value > today.getDate()) {
    ageInDays.textContent =
      daysInMonth[today.getMonth() + 1] - (birthDay.value - today.getDate());
  }
  if (birthMonth.value <= today.getMonth() + 1) {
    ageInMonth.textContent = today.getMonth() + 1 - parseInt(birthMonth.value);
  } else if (birthMonth.value > today.getMonth() + 1) {
    console.log(ageInMonth);
    console.log("mois supérieur");
    ageInYears.textContent = diffYears - 1;
    ageInMonth.textContent =
      12 - (parseInt(birthMonth.value) - (today.getMonth() + 1));
  }
});
