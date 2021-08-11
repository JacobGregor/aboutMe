'use strict';

let username = prompt('What is your name?');
     let alertuser = alert(username + ', welcome to my world!');
     let place = prompt('Do I live in California?');
     let placeConverted = place.toLowerCase();
     if (placeConverted === 'yes' || placeConverted === 'y') {
      // console.log('You are correct!');
       alert('You are correct!');
     } else if (placeConverted === 'no' || placeConverted === 'n') {
      // console.log('You are wrong!');
       alert('You are wrong!');
     } else {
        // console.log('Please drink more coffee and focus!');
       alert('Please drink more coffee and focus!');
     }
     
     let mil = prompt('Did I served in Army?');
     let military = mil.toLowerCase();
     if (military === 'yes' || military === 'y') {
      //console.log('You are wrong! I am better than that');
       alert('You are wrong! I am not ARMY STRONG');
     } else if (military === 'no' || military === 'n') {
        // console.log('Bingo! Served in Air Force');
       alert('Bingo! Served in Air Force');
     } else {
        // console.log('This is not that hard!');
       alert('This is not that hard!');
     }
     
     
     let pet = prompt('Am I cat person?');
     console.log(pet);
     let petConverted = pet.toLowerCase();
     console.log(petConverted);
     if (petConverted === 'yes' || petConverted === 'y') {
      //console.log('You are wrong! I hate cats');
       alert('You are wrong! I hate cats');
     } else if (petConverted === 'no' || petConverted === 'n') {
        // console.log('Correct! I like dogs');
       alert('Correct! I like dogs');
     } else {
        // console.log('You are better than this!');
       alert('You are better than this!');
     }
     
     let status = prompt('Am I married?');
     console.log(status);
     let statusConverted = status.toLowerCase();
     console.log(statusConverted);
     if (statusConverted === 'yes' || statusConverted === 'y') {
      //console.log('Correct! made that mistake long time ago')
       alert('Correct! made that mistake long time ago');
     } else if (statusConverted === 'no' || statusConverted === 'n') {
        // console.log('Wrong! I am not that lucky');
        alert('Wrong! I am not that lucky');
     } else {
        // console.log('You should get married!');
        alert('You should get married!');
     }
     
     let height = prompt('Am I 5ft 10" tall?');
     console.log(height);
     let heightConverted = height.toLowerCase();
     console.log(heightConverted);
     if (heightConverted === 'yes' || heightConverted === 'y') {
      //console.log('Correct! But on a good day I feel like I am 5ft 11"');
       alert('Correct! But on a good day I feel like I am 5ft 11"');
     } else if (heightConverted === 'no' || heightConverted === 'n') {
        // console.log('Wrong! its okay everyone makes mistake');
        alert('Wrong! its okay everyone makes mistake');
     } else {
        // console.log('Try that 5 hour energy drink!');
        alert('Try that 5 hour energy drink!');
     }
  
     let finalalert = alert('Congrats! '+username +', you are eligible for participation trophy!');