var letters = [];
var lives = 15;

function addWord() {
  var word = document.getElementById("word-input").value;
  console.log("word: " + word);
  document.getElementById("word-input").value = "";
  letters.push(word.split(""));
  console.log(letters);
}
