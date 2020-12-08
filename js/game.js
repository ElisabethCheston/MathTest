const board = () => {
    const rows = 4;
    const columns = 4;

// Loop to show bricks. //
for (let i = 0; i < rows * columns; i ++)
};

var image = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]
var lastKnownButtonId = undefined;
var lastKnownButtonNumber = undefined;
var wait = false;
var matches = 0;
//elements
var buttons = document.querySelectorAll("button");
// code
//implementing the array numbers ramdomly to the dataset number in the buttons //
shuffle(numbers);
givenumber();
//functions
function giveNumbers() {
    for (i = 0; i < buttons.length; i++) {
        buttons[i].dataset.number = numbers[i];
    }
}
// https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb //
function shuffle(array) {
    var j, x, i;
for(i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const x = array[i]
    array[i] = array[j]
    array[j] = x
  }
  return array;
}

//loop on an eventlistener to give access to everything clicked on.
for (i= 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (e) {
//variable for turning the buttons
        var turnable = e.target.dataset.turnable;
// first click
        if  (!wait && lastKnownButtonId == undefined && 
            lastKnownButtonNumber == undefined && turnable == 'true') {
                // Otherwise the 'if' statement wont run
                e.target.dataset.turnable = 'false';
                e.target.innerHTML = getgImage(event.target.dataset.number);
                e.target.style.backgroundColor = 'orange';
                //To match the buttons by the dataset number
                lastKnownButtonId = e.target.id;
                lastKnownButtonNumber = e.target.dataset.number;
            }
// second click
             // The id and the Number must not be equal to undefine butt is not ALSO it cant click it self
        else if (!wait && lastKnownButtonId != undefined && 
            lastKnownButtonNumber != undefined && turnable == 'true' 
            && e.target.id != lastKnownButtonId) {
                e.target.dataset.turnable = 'false';
                
                e.target.textContent = e.target.dataset.number;
//match
                if (e.target.dataset.number == lastKnownButtonNumber) {
                    e.target.style.backgroundColor = 'green';
                    document.getElementById(lastKnownButtonId)
                    .style.backgroundColor = 'green';
                    lastKnownButtonId = undefined;
                    lastKnownButtonNumber = undefined;
                    matches++;
                    if (matches == 1) {
                        showWinScreen();
                    }
                }
//no match
                else {
                    document.getElementById(lastKnownButtonId)
                    .style.backgroundColor = 'red';
                    e.target.style.backgroundColor = 'red';
                    wait = true;
                    setTimeout(() => {
                        e.target.dataset.turnable = 'true';
                        e.target.style.backgroundColor = 'white';
                        e.target.innerHTML = getgImage(0);
                        var tempLastClickedButton = document.getElementById
                        (lastKnownButtonId);
                        tempLastClickedButton.dataset.turnable = 'true';
                        tempLastClickedButton.style.backgroundColor = 'white';
                        tempLastClickedButton.innerHTML = getgImage(0);
                        lastKnownButtonId = undefined;
                        lastKnownButtonNumber = undefined;
                        wait = false;
                    }, 1000);
    
                  }
                }
    });
}

/*
function showWinScreen() {
    document.querySelector('.win-container').style.display = 'flex';
    document.getElementById("6").style.display = 'none';
    document.getElementById("7").style.display = 'none';
    document.getElementById("10").style.display = 'none';
    document.getElementById("11").style.display = 'none';
}
function getgImage(number) {
    switch(number) {
    case '1':
        return '<img src="images/ginger.jpg">';
    case '2':
        return '<img src="images/snowman.jpg">';
    case '3':
        return '<img src="images/stars.jpg">';
    case '4':
        return '<img src="images/tree.jpg">';
    case '5':
        return '<img src="images/flower.jpg">';
    case '6':
        return '<img src="images/candy.png">';
    case '7':
        return '<img src="images/candle.jpg">';
    case '8':
        return '<img src="images/mistle.jpg">';
    default:
        return '<img src="images/merry.png">';
    }
}
function reset () {
    lastKnownButtonId = undefined;
    lastKnownButtonNumber = undefined;
    wait = false;
    shuffle(numbers);
    giveNumbers();
    matches = 0;
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].innerHTML = getgImage(0);
        buttons[i].style.backgroundColor = 'white';
        document.querySelector('.win-container').style.display = 'none';
        document.getElementById("6").style.display = 'block';
        document.getElementById("7").style.display = 'block';
        document.getElementById("10").style.display = 'block';
        document.getElementById("11").style.display = 'block';
        console.log('reset');
    }
}
/*
const gameboard = () => {
    const rows = 4;
    const columns = 4;
    // Loop for the bricks //
    for (let i = 0; i < row * columns; i ++) {
        
    }
}
/*
// Variable //
var brickArray = ["A", "A", "B", "B", 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
var brickValues = [];
var brickIds = [];
var brickFlipped = 0;
// Shuffle method //
Array.prototype.brickShuffle = function() {
    var i = this.length, j, temp;
    while(--i > 0 ) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}
// To start a new game //
function newGame () {
    brickFlipped = 0;
    var output = '';
    // This line will take the bricks and shuffle them for a new game. //
    brickArray.brickShuffle();
    // Make a loop over the bricks. //
    for (var i = 0; i < brickArray.length; i++) {
        // The onclick event calls the divs with 'this' and match them with its ID // 
        output +='<div id="brick_'+i+'" oncklick="gameFlipBrick(this,\'' + brickArray[i] + '\')"></div>';
    }
    document.getElementById('game').innerHTML = output;
}
// Flip the bricks //
/*
// Create a varible for all the innerbricks. //
let cards = document.querySelectorAll('.innerbrick');
let firstClick = false
let counter = 0
let brickPair = [] 
function turn() {
}
cards.forEach((card) => {
    card.addEventListener('click', turn)
})
shuffle()
for(let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click',() => {
        if(!firstClick){time()}
        firstClick = true
        if(cards[i].state == 'unclicked') {
            cards[i].style.transform = 'rotateY(180deg)'
            cards[i].state = 'clicked'
            counter++
            cardPair.push(cards[i])
            check()
        }
        else if (cards[i].state == 'clicked') {
            cards[i].style.transform = 'rotateY(0deg)'
            cards[i].state = 'unclicked'
            counter --
            cardPair = []
        }
    })
}
function check() {
    if(counter==2) {
        if(cardPair[0].querySelector('img').src == cardPair[1].querySelector('img').src) {
            matched()
        }
        else {
            unmatched(cardPair[0], cardPair[1])
        }
    }
}
function matched() {
    cardPair[0].state = 'blocked'
    cardPair[1].state = 'blocked'
    counter = 0
    cardPair = []
    let score = document.querySelector('#score').innerHTML
    score++
    document.querySelector('#score').innerHTML = score
}
function unmatched(x, y) {
    setTimeout(() => {
        x.style.transform = 'rotateY(0deg)'
        y.style.transform = 'rotateY(0deg)'
    }, 750)
    cardPair[0].state = 'unclicked'
    cardPair[1].state = 'unclicked'
    counter = 0
    cardPair = []
}
// Making a function for timing the game. //
function time() {
    let secs = 0
    let mins = 0
    let SS
    let MM
    setInterval(() => {
        secs++
        if(secs == 60) { secs = 0; mins++}
        secs <10?SS = `0${secs}`: SS = `${secs}`
        mins <10?SS = `0${mins}`: SS = `${mins}`
        document.querySelector('#time').innerHTML = `${MM}:${SS}`
    }, 1000);
}
// Shuffle function //
function shuffle() {
    let images = document.querySelectorAll('img')
    let srcs = ["test.png", "test.png", "test.png", "test.png", "test.png", "test.png", "test.png", "test.png", "test.png", "test.png", "test.png", "test.png", "test.png", "test.png", "test.png", "test.png",]
    for(i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const x = srcs[i]
    srcs[i] = srcs[j]
    srcs[j] = x
    }
    for (let i = 0; i < images.length; i++) {
        images[i].src = srcs[i];
    }
}
     /*
    //functions
function giveNumbers() {
    for (i = 0; i < buttons.length; i++) {
        buttons [i].dataset.number = numbers[i];
    }
}
// https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb //
function shuffle(array) {
    var j, x, i;
for(i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const x = array[i]
    array[i] = array[j]
    array[j] = x
  }
  return array;
}
}
/*
var image = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]
var lastKnownButtonId = undefined;
var lastKnownButtonNumber = undefined;
var wait = false;
var matches = 0;
//elements
var buttons = document.querySelectorAll("button");
// code
//implementing the array numbers ramdomly to the dataset number in the buttons //
shuffle(image);
givenumber();
//loop on an eventlistener to give access to everything clicked on.
for (i= 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (e) {
//variable for turning the buttons
        var turnable = e.target.dataset.turnable;
// first click
        if  (!wait && lastKnownButtonId == undefined && 
            lastKnownButtonNumber == undefined && turnable == 'true') {
                // Otherwise the 'if' statement wont run
                e.target.dataset.turnable = 'false';
                e.target.innerHTML = getgImage(event.target.dataset.number);
                e.target.style.backgroundColor = 'orange';
                //To match the buttons by the dataset number
                lastKnownButtonId = e.target.id;
                lastKnownButtonNumber = e.target.dataset.number;
            }
// second click
             // The id and the Number must not be equal to undefine butt is not ALSO it cant click it self
        else if (!wait && lastKnownButtonId != undefined && 
            lastKnownButtonNumber != undefined && turnable == 'true' 
            && e.target.id != lastKnownButtonId) {
                e.target.dataset.turnable = 'false';
                
                e.target.textContent = e.target.dataset.number;
//match
                if (e.target.dataset.number == lastKnownButtonNumber) {
                    e.target.style.backgroundColor = 'green';
                    document.getElementById(lastKnownButtonId)
                    .style.backgroundColor = 'green';
                    lastKnownButtonId = undefined;
                    lastKnownButtonNumber = undefined;
                    matches++;
                    if (matches == 1) {
                        showWinScreen();
                    }
                }
//no match
                else {
                    document.getElementById(lastKnownButtonId)
                    .style.backgroundColor = 'red';
                    e.target.style.backgroundColor = 'red';
                    wait = true;
                    setTimeout(() => {
                        e.target.dataset.turnable = 'true';
                        e.target.style.backgroundColor = 'white';
                        e.target.innerHTML = getgImage(0);
                        var tempLastClickedButton = document.getElementById
                        (lastKnownButtonId);
                        tempLastClickedButton.dataset.turnable = 'true';
                        tempLastClickedButton.style.backgroundColor = 'white';
                        tempLastClickedButton.innerHTML = getgImage(0);
                        lastKnownButtonId = undefined;
                        lastKnownButtonNumber = undefined;
                        wait = false;
                    }, 1000);
    
                  }
                }
    });
}
//functions
function giveNumbers() {
    for (i = 0; i < buttons.length; i++) {
        buttons [i].dataset.number = numbers[i];
    }
}
// https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb //
function shuffle(array) {
    var j, x, i;
for(i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const x = array[i]
    array[i] = array[j]
    array[j] = x
  }
  return array;
}
function showWinScreen() {
    document.querySelector('.win-container').style.display = 'flex';
    document.getElementById("6").style.display = 'none';
    document.getElementById("7").style.display = 'none';
    document.getElementById("10").style.display = 'none';
    document.getElementById("11").style.display = 'none';
}
function getgImage(number) {
    switch(number) {
    case '1':
1hctam        return '<img src="images/ginger.jpg">';
    case '2':
2hctam        return '<img src="images/snowman.jpg">';
    case '3':
        return '<img src="images/stars.jpg">';
    case '4':
        return '<img src="images/tree.jpg">';
    case '5':
        return '<img src="images/flower.jpg">';
    case '6':
        return '<img src="images/candy.png">';
    case '7':
        return '<img src="images/candle.jpg">';
    case '8':
        return '<img src="images/mistle.jpg">';
    default:
        return '<img src="images/merry.png">';
    }
}
function reset () {
    lastKnownButtonId = undefined;
    lastKnownButtonNumber = undefined;
    wait = false;
    shuffle(numbers);
    giveNumbers();
    matches = 0;
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].innerHTML = getgImage(0);
        buttons[i].style.backgroundColor = 'white';
        document.querySelector('.win-container').style.display = 'none';
        document.getElementById("6").style.display = 'block';
        document.getElementById("7").style.display = 'block';
        document.getElementById("10").style.display = 'block';
        document.getElementById("11").style.display = 'block';
        console.log('reset');
    }
}
*/
