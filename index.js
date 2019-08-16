let readlineSync = require('readline-sync');

let personalityA = 0;

// letStart();
function letStart() {
  let answer = readlineSync.keyInYNStrict("Are you ready?");
  if (answer) {
    console.log("Let's begin! \n");
  } else {
    console.log("Whatever, this quiz was too cool for you anyway!\n");
    letStart();
  }
}

// QUESTION1;
function questionOne() {
  let answer = readlineSync.keyInYNStrict("Question 1. \n What's my favorite color?");
  if (answer) {
    console.log("Nice guess! It's green. \n");
    personalityA += 1;
  } else {
    nestedQuestion();
  }
}

function nestedQuestion() {
  let answer = readlineSync.keyInYNStrict("What is more important to me ?");
  if (answer) {
    console.log("non materialistic things are the way to go.\n ");
    personalityA += 2;
  } else {
    console.log("You know all we really care about is geting rich\n");
    personalityA += 1;
  }
}

function questionTwo() {
  let answer = readlineSync.keyInYNStrict(" Question 2. \n If someone dropped their money, would you give it back to them?");
  if (answer) {
    personalityA += 2;
  } else {
    personalityA += 1;
  }
}

let questionThree = () => {
  let answersQuestionThree = ['Mercedes Benz', 'Lexus', 'BMW'],
    index = readlineSync.keyInSelect(answersQuestionThree, 'Question 3. \n What is my favorite car? Pick a answer?', {
      cancel: false
    });
    switch (index) {
      case 0:
        personalityA +=3;
        break;
      case 1:
          personalityA +=2;
          break;
      case 2:
        personalityA += 1;
        break;
      default:
        questionThree();
    }
}
let questionFour = () => {
  let answerQuestionFour = ['Duhhh', 'Nahhh'],
    index = readlineSync.keyInSelect(answerQuestionFour, 'Question 4. \n Do you like the color pink?', {
      cancel: false
    });
    switch (index) {
      case 0:
        personalityA += 1;
        break;
      case 1:
        personalityA += 2;
        break;
        default:
          questionFour();
    }
  }
let questionFive = () => {
  let answerQuestionFive = ['Doing big things', 'living at my moms house', 'being a couch potato'],
  index = readlineSync.keyInSelect(answersQuestionFive, 'Question 5. \n Where do you see yourself in the next 10 years? Pick a answer',{
    cancel: false
  });

  switch (index) {
    case 0:
      nestedQuestion1()
      personalityA += 3;
      break;
    case 1:
      personalityA += 2;
      break;
    case 2:
      personalityA += 1;
      break;
      default:
        questionFive();
  }
}
