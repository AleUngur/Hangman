var letters = []; //letters of the input word
var lives = 15;

function addWord() {
  var word = document.getElementById("word-input").value;
  word = word.toUpperCase();
  document.getElementById("word-input").value = "";
  letters = word.split("");
  console.log(letters);
  console.log("array length: " + letters.length);
}

function displayLines() {
  for (var i = 0; i < letters.length; ++i) {
    var col = document.createElement("div");
    col.className = "col-1 my-1 col-lines";
    col.innerHTML = "____";
    col.id = i;
    document.getElementById("word-lines").appendChild(col);
  }
}

var numberOfLives = document.createElement("h3");
function displayLives() {
  var life = document.getElementById("lives");
  numberOfLives.innerText = lives;
  numberOfLives.setAttribute("color", "white");
  life.append(numberOfLives);
}

function guessLetter(letterChosen) {
  var j = 0;
  for (var i = 0; i < letters.length; ++i) {
    //looking for the letter in the word
    if (letterChosen.toUpperCase() == letters[i]) {
      var spaceForLetter = document.getElementById(i);
      spaceForLetter.innerText = letters[i];
    } else {
      ++j;
    }
  }
  shortenLife(j);
}

function shortenLife(x) {
  if (x == letters.length) {
    if (lives > 1) {
      --lives;
      displayLives();
    } else if (lives == 1) {
      --lives;
      displayLives();
      displayMessage();
    }
  }
}

function displayMessage() {
  var nrLives = document.getElementById("lives");
  if (lives == 0) {
    nrLives.innerHTML = "You've been hanged!";
  }
}
