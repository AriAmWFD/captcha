let Inot = document.getElementById("inot");
let Iam = document.getElementById("iam");
let test = document.getElementById("test");
let quest = document.getElementById("quest");
let number = document.getElementById("number");
let input = document.getElementById("answer");
let refresh = document.getElementById("refresh");
let submit = document.getElementById("submit");
let alphabets = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
let soal = number.innerHTML;

Iam.addEventListener("click", () => {
  alert("Get The HELL Out Of Here!!!");
});
Inot.addEventListener("click", () => {
  quest.classList.remove("question");
  quest.classList.add("hidden");
  test.classList.add("test");
});

number.innerHTML =
  alphabets[Math.floor(Math.random() * alphabets.length)] +
  Math.floor(Math.random() * 1000) +
  alphabets[Math.floor(Math.random() * alphabets.length)] +
  alphabets[Math.floor(Math.random() * alphabets.length)];
refresh.addEventListener("click", () => {
  number.innerHTML =
    alphabets[Math.floor(Math.random() * alphabets.length)] +
    Math.floor(Math.random() * 1000) +
    alphabets[Math.floor(Math.random() * alphabets.length)] +
    alphabets[Math.floor(Math.random() * alphabets.length)];
  soal.join;
});

submit.addEventListener("click", () => {
  if (input.value == number.innerHTML) {
    alert("you are good to go!");
    input.value = "";
    number.innerHTML =
      alphabets[Math.floor(Math.random() * alphabets.length)] +
      Math.floor(Math.random() * 1000) +
      alphabets[Math.floor(Math.random() * alphabets.length)] +
      alphabets[Math.floor(Math.random() * alphabets.length)];
  } else {
    alert("you Lier!!");
    input.value = "";
    number.innerHTML =
      alphabets[Math.floor(Math.random() * alphabets.length)] +
      Math.floor(Math.random() * 1000) +
      alphabets[Math.floor(Math.random() * alphabets.length)] +
      alphabets[Math.floor(Math.random() * alphabets.length)];
  }
});
