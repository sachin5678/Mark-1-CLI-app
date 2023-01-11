var readlineSync = require("readline-sync")
var userName = readlineSync.question("What is your name  ")
console.log("Hello, Welcome " + userName + " Lets Play Do You Know me Game ")
console.log("------------------------")
score = 0


var highScores = [
  {
    name: "sachin",
    score: 7,
  },
  {
    name: 'Mom',
    score: 6,
  },
  {
    name: 'Tanay sir',
    score: 6,
  },
]
//function
function quiz(question, answer) {
  var userAnswer = readlineSync.question(question)
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("you are correct")
    score++
  } else {
    console.log("you are wrong")
    score--
    console.log("Right answer:" + questionList[i].answer);
  }

}
//array of questions
var questionList = [{
  question: "Who is my favorite cricketer? ",
  answer: "sachin"
},
{
  question: "Which is my current favorite color? ",
  answer: "blue",
},
{
  question: "What is my favourite ice cream flavour? ",
  answer: "chocolate",
},
{
  question: "What is my fav sports? ",
  answer: "chess",
},
{
  question: "What is my favourite city? ",
  answer: "mumbai"
},
{
  question: "What is my fav. subject ? ",
  answer: "analog electronics"
},
{
  question: "Which is my blood group? ",
  answer: "b+"
}

]

//loop

for (var i = 0; i < questionList.length; i++)
  {
  currentQuestion = questionList[i]
  quiz(currentQuestion.question, currentQuestion.answer)

  console.log("------------------------")

}


console.log("your score is: " + score)

console.log('Check out the high scorers - ')
for (var i = 0; i < highScores.length; i++) {
  console.log(highScores[i].name + ': ' + highScores[i].score)
}
console.log('-------------------')
console.log(
  'If you have scored better than the current high scorers then send me a screenshot of your score, so that I can add you to the high scorers list.'
)
console.log('Thank you for playing!')