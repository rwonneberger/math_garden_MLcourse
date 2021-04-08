var answer;
var score = 0;
var backgroundImages = [];

function nextQuestion() {
  const n1 = Math.floor(Math.random() * 5);
  document.getElementById('n1').innerHTML = n1;
  const n2 = Math.floor(Math.random() * 6);
  document.getElementById('n2').innerHTML = n2;

  answer = n1 + n2;
}

function checkAnswer() {
  const prediction = predictImage();
  console.log(answer, prediction)
  if (prediction == answer) {
    score++;
    if (score <= 6) {
      backgroundImages.push(`url('images/background${score}.svg')`);
      document.body.style.backgroundImage = backgroundImages;
      console.log(score);
    } else {
      alert('Congrats, you reached a score of 7! Want to start again?');
      score = 0;
      backgroundImages = [];
      document.body.style.backgroundImage = backgroundImages;
    }
  } else {
    if (score != 0) {
    score--;
    alert('Oops, check your calculation or write your number neater next time!');
    setTimeout(function() {
      backgroundImages.pop();
      document.body.style.backgroundImage = backgroundImages;
    }, 1000);
  }
    console.log(score);
    }
}
