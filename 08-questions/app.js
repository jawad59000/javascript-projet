const btns = document.querySelectorAll(".question-btn");
const questions = document.querySelectorAll("article");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    questions.forEach(function (question) {
      if (question !== e.currentTarget.parentElement.parentElement) {
        question.classList.remove("show-text");
      }
    });
    e.currentTarget.parentElement.parentElement.classList.toggle("show-text");
  });
});
