// Making the rows for the bricks //
const game = () => {
    const rows = 4;
    const columns = 4;


    // We have to create 2 variables; 1 for the content in the 
    // Container ID for the game.
const containerId = 'game';


// Making a loop to write the bricks out. //
for (let i = 0; i < rows * columns; i++)
};

// Write them all out like this and try to merge them in shuffle.. //
var multi1 = ["21", "3 x 7"]
var multi2 = ["9", "3 x 3"]
var multi3 = ["24", "8 x 3"]
var multi4 = ["18", "2 x 9"]
var multi5 = ["12", "3 x 4"]
var multi6 = ["70", "10 x 7"]
var multi7 = ["40", "5 x 8"]
var multi8 = ["36", "6 x 6"]


var brick1 = ["house", "casa"]
var brick2 = ["window", "ventana"]
...
// Or something like.. //
var image = [["house", "casa"], ["window", "ventana"], ["water", "agua"],...]

// ..can shuffle the bricks //



/*
//variables
var match1 = ["21", "3 x 7"]
var match2 = ["9", "3 x 3"]

var image = [[1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8]]
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
        //  the first click
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
             // the second click
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