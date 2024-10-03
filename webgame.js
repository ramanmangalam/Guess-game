'use script';
// console.log(document.querySelector('.message'));
// document.querySelector('.message').textContent = 'correct number ';
// document.querySelector('.number').textContent = '13';
// document.querySelector('.score').textContent = '10';
// document.querySelector('.highscore').textContent = '20';
// document.querySelector('.guess').value = '12';
// console.log(document.querySelector('.guess').value);

// const x=function () {           // This are both same the pny difference bettwen here we are inside a variable
//     console.log(9)                  but in there we are directly using addevenlistener method
// }

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (mesage) {
  document.querySelector('.message').textContent = mesage;
};

document.querySelector(' .check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof 'guess');

  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number';
    displayMessage('No Number');
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Your Answer is Correct';
    displayMessage('Your Answer IS Correct');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      document.querySelector('.highscore').textContent = highScore;
    } else if (guess !== secretNumber) {
      if (score > 1) {
        // document.querySelector('.message').textContent =
        //   guess > secretNumber ? 'TOOO High' : 'Too Low,You Can Get';
        displayMessage(
          guess > secretNumber ? 'TOOO High' : 'Too Low,You Can Get'
        );
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        // document.querySelector('.message').textContent = 'You Lost The Game';
        displayMessage('You Lost The Game');
        document.querySelector('.score').textContent = 0;
      }
    }
  }

  //    _    ____________ With THE DUPLICATE ACTION ______

  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'TOOO High';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lost The Game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too Low,You Can Get';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.mesage').textContent = 'Your score is over';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

// Second Button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start Guessing';
  displayMessage('Start Guessing');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
