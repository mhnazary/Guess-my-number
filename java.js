

'use strict';

// document.querySelector('.message').textContent = "Guessing Start... ";
// // document.querySelector('.message').textContent = 30;
// console.log(document.querySelector('.number').Value);
// document.querySelector('.number').Value = 30;

// console.log(document.querySelector('.number').Value);
let guess = Math.floor(1 + Math.random() * 20);
// document.querySelector('.guess').textContent = guess;
let count1 = 20;
let highScore = 0;
let displyMessage = function (message) {
    document.querySelector('.message').textContent = message ;
}


document.querySelector('.Check').addEventListener('click', function () {
    let number = Number(document.querySelector('.number').value);

    if (!number) {
        displyMessage('No number enter! ')
    }
    else if (number != guess){
        if(count1>1){
        displyMessage(number > guess ? 'To high Number!':'To low Number!');
        count1--;
        document.querySelector('.count').textContent = count1;}
        else if( count1 > 20 && count1 < 0 ){
           displyMessage('You Lose the game');
            document.querySelector('.count').textContent = 0;
        }
        else {
            displyMessage('Out of Rang !!!');
        }

    }
    else if (number === guess) {
        displyMessage('Correct Number! ');
        document.querySelector('.contineer').style.backgroundColor = '#60b347';
        if (count1 > highScore) {
            highScore = count1;
            document.querySelector('.HighCount').textContent = highScore;
        }

    }
    else {
    }


    if (number > 20 || number < 0) {
        document.querySelector('.message').textContent = 'Out of Range! ';
    }
    if (number >= 20 && number < 0) {
        document.querySelector('.message').textContent = 'Out of Range! ';

    }

    document.querySelector('.again').addEventListener('click', function () {
        guess = Math.floor(1 + Math.random() * 20);
        count1 = 20;
        
        document.querySelector('.message').textContent='Start Guessing ...' ;
        document.querySelector('.count').textContent = 20 ;
        document.querySelector('.number').value = '54' ;
        document.querySelector('.contineer').style.backgroundColor = 'white';
    
        
    })
}
)





