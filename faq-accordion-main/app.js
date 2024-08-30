const btns = document.querySelectorAll(".question-btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const question = e.currentTarget.parentElement.parentElement;
    const questionText = question.querySelector(".question-text");
    const plusIcon = question.querySelector(".plus-icon");
    const minusIcon = question.querySelector(".minus-icon");

    // toggle text
    questionText.classList.toggle("show-text");
    // toggle icon
    plusIcon.classList.toggle("show-text");
    minusIcon.classList.toggle("show-text");
  });
});
