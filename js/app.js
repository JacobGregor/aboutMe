'use strict';

let correctAns = 0;
let username = prompt('What is your name?');
function score() {
   return correctAns++;
}

function state() {
   let place = prompt('Do I live in California?');
   let placeConverted = place.toLowerCase();
   let toGiveRandomNum = 1;
   if (placeConverted === 'yes' || placeConverted === 'y') {
      // console.log('You are correct!');
      alert('You are correct!');
      score();
   } else if (placeConverted === 'no' || placeConverted === 'n') {
      // console.log('You are wrong!');
      alert('You are wrong!');
   } else {
      // console.log('Please drink more coffee and focus!');
      alert('Please drink more coffee and focus!');
   }
}
function served() {
   let mil = prompt('Did I served in Army?');
   let military = mil.toLowerCase();
   if (military === 'yes' || military === 'y') {
      //console.log('You are wrong! I am better than that');
      alert('You are wrong! I am not ARMY STRONG');
   } else if (military === 'no' || military === 'n') {
      // console.log('Bingo! Served in Air Force');
      alert('Bingo! Served in Air Force');
      score();
   } else {
      // console.log('This is not that hard!');
      alert('This is not that hard!');
   }  
}
function animal() {
   let pet = prompt('Am I cat person?');
   let petConverted = pet.toLowerCase();
   if (petConverted === 'yes' || petConverted === 'y') {
      //console.log('You are wrong! I hate cats');
      alert('You are wrong! I hate cats');
   } else if (petConverted === 'no' || petConverted === 'n') {
      // console.log('Correct! I like dogs');
      alert('Correct! I like dogs');
      score();
   } else {
      // console.log('You are better than this!');
      alert('You are better than this!');
   }
}
function spouse() {
   let status = prompt('Am I married?');
   let statusConverted = status.toLowerCase();
   if (statusConverted === 'yes' || statusConverted === 'y') {
      //console.log('Correct! made that mistake long time ago')
      alert('Correct! made that mistake long time ago');
      score();
   } else if (statusConverted === 'no' || statusConverted === 'n') {
      // console.log('Wrong! I am not that lucky');
      alert('Wrong! I am not that lucky');
   } else {
      // console.log('You should get married!');
      alert('You should get married!');
   }
}
function tall() {
   let height = prompt('Am I 5ft 10" tall?');
   let heightConverted = height.toLowerCase();
   if (heightConverted === 'yes' || heightConverted === 'y') {
      //console.log('Correct! But on a good day I feel like I am 5ft 11"');
      alert('Correct! But on a good day I feel like I am 5ft 11"');
      score();
   } else if (heightConverted === 'no' || heightConverted === 'n') {
      // console.log('Wrong! its okay everyone makes mistake');
      alert('Wrong! its okay everyone makes mistake');
   } else {
      // console.log('Try that 5 hour energy drink!');
      alert('Try that 5 hour energy drink!');
   }
}
function getRandom(min,max){
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min) + min);
}
function rGenerator() {
   // let randomNum = Math.floor((Math.random() * 50) + 1);
   let randomNum = getRandom(1,50);
   let shot = 0;
   let gnumber;
   let toGiveRandomNum = 1;
   while (randomNum !== gnumber && shot < 4) {
      let guess = prompt('Guess a number between 1-50!');
      gnumber = parseInt(guess);
      if (randomNum < gnumber) {
         alert('Too high, try again!');
      } else if (randomNum > gnumber) {
         alert('Too low, try again!');
      } else if (randomNum === gnumber) {
         toGiveRandomNum + 1;
         alert('Good Job! you got it.');
         score();
      }
      shot++;
   }
   if (toGiveRandomNum !== 2) {
      alert('Correct answer is ' + randomNum);
   }
}
function colors() {
   let guess = 0;
   let rightAns = false;
   let favoriteColors = ['bronze', 'beige', 'brown', 'blurple', 'burgundy'];
   while (guess < 7 && rightAns === false) {
      let color = prompt('What are my favorite colors?');
      for (let index = 0; index < favoriteColors.length; index++) {
         let colorGuess = favoriteColors[index];
         if (color === colorGuess) {
            alert('You are pretty clever!');
            rightAns = true;
            score();
         }
      }
      guess++;
      if (rightAns === false) {
         alert('EEEEERRRR TRY AGAIN!');
      }
   }

      return favoriteColors;
}
alert(username + ', welcome to my world!');

state();
served();
animal();
spouse();
tall();
rGenerator();

let favoriteColors = colors();
alert('My favorite colors are ' + favoriteColors[0] + ', ' + favoriteColors[1] + ', ' + favoriteColors[2] + ', ' + favoriteColors[3] + ', ' + favoriteColors[4]);
alert('Congrats ' + username + ', you gave ' + correctAns + ' correct answers out of 7 and is eligible for participation trophy!');