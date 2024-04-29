const textArea = document.querySelector("#question");
const button = document.querySelector(".btn");
const result = document.querySelector(".result");
const answers = ["Okay", "Yes you can say it", "I'm not sure!"];

button.addEventListener("click", function () {
  let question = textArea.value;
  let num = Math.floor(Math.random() * answers.length);
  let answer = `${question} ${answers[num]}`;
  result.innerHTML = answer;
  textArea.value = "";
});
