const rockBtn = document.querySelector('.therock-btn');
const paperBtn = document.querySelector('.paper-btn');
const scissorBtn = document.querySelector('.scissor-btn');

function clickRockBtn() {
    let result ='';
    let random = Math.round(Math.random() * 2);

    if (random === 0) {
        result = "therock";
    }else if (random === 1) {
        result = "paper";
    }else if (random === 2) {
        result = "scissor";
    }

    let guess = 'therock';

    if (guess === result) {

        alert('You win');
    }else {
        
        alert('You lose');
    }
}


function clickPaperBtn() {
    let result ='';
    let random = Math.round(Math.random() * 2);

    if (random === 0) {
        result = "therock";
    }else if (random === 1) {
        result = "paper";
    }else if (random === 2) {
        result = "scissor";
    }

    let guess = 'paper';

    if (guess === result) {

        alert('You win');
    }else {
        
        alert('You lose');
    }
}

function clickScissorBtn() {
    let result ='';
    let random = Math.round(Math.random() * 2);

    if (random === 0) {
        result = "therock";
    }else if (random === 1) {
        result = "paper";
    }else if (random === 2) {
        result = "scissor";
    }

    let guess = 'scissor';

    if (guess === result) {

        alert('You win');
    }else {
        
        alert('You lose');
    }
}

