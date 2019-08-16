let  readlineSync  =  require('readline-sync');

let thisIsRight = 0;
let thisIsWrong = 0;

function readiness() {
  getStarted = readlineSync.question("Are you ready to begin\n");
  if (getStarted === "yes") {
    console.log("Challenge accecpted!\n");
  }
  else if (getStarted === "no") {
    console.log("Bye felicia\n");
  }
  else { 
      readiness();
    }
}

function questionOne() {
  getStarted = readlineSync.question("When is Sage's birthday");
  if (getStarted = "October 19, 2018")
  console.log(" wowwwww! so proud!");
}
 // write some code that displays a question and some answer choices to a user
// write some code that changes the value of your variables based on how the user responds

function calculateLove() {
// write some code that compares your variables to each other and displays different results to your user based on those comparisons.
}

console.log("WELCOME TO CECE'S LOVE CALCULATOR!\n")

let name = readlineSync.question( "What is your name?\n")

console.log(`Ok ${name}. I'm going to ask you a series of questions. Based on your answers, I'm going to tell you whether your crush likes you back.\n`)

readiness();
questionOne();
calculateLove();
