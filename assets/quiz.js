const finish_btn = document.getElementById("finish-button");
const quiz_form = document.querySelector("#quizForm");
const prevButton = document.querySelector('#prev-button');
const nextButton = document.querySelector('#next-button')


const answers = {};

quiz_form.addEventListener("change", updateAnswers);
function updateAnswers(event) {
  //code to store answers

 console.log(event.target)
 let input = event.target;
 answers[input.name] = input.value

  console.log("answers: ", answers);
}

let currentQuestionIndex = 0;


// Next Button
nextButton.addEventListener("click", function(){
  currentQuestionIndex++;
  displayQuestion(currentQuestionIndex)
  updateButtonStates(currentQuestionIndex)
})


// previous button
prevButton.addEventListener("click", function(){
  currentQuestionIndex--;
  displayQuestion(currentQuestionIndex)
  updateButtonStates(currentQuestionIndex)
})

function displayQuestion(index){
  let current_question = questions[index]
  let selected_answer = answers[current_question.name] || '';
  let question_html = `
    <h2>${current_question.text}</h2>
     <div class="label-container">
    ${current_question.options.map(option => `
   
      <input ${option.value === selected_answer ? "checked": ""} type="radio" id="${option.value}" name="${current_question.name}" value="${option.value}">
      <label for="${option.value}">
        <div class="img-wrap">
          <img src="${option.img}">
        </div>
        <span>${option.label}</span>
      </label>`
    ).join('')}
  </div>
  `
  
  quiz_form.innerHTML = question_html
}


function updateButtonStates (index){
  prevButton.disabled = (index === 0);
  nextButton.classList.toggle("hidden", index === questions.length -1);
  finish_btn.classList.toggle("hidden", index != questions.length - 1);
}
 updateButtonStates(currentQuestionIndex);
displayQuestion(currentQuestionIndex)

finish_btn.addEventListener("click", function () {
  if (answers.product_type && answers.bike_type && answers.color) {
    alert("Here are your answers: " + JSON.stringify(answers));
  } else {
    alert("Please answer all the questions!");
  }
});
