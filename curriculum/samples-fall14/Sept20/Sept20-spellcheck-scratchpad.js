/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */
var dictionary = {the:true, dog:true, ran:true, very:true, fast:true };

function markWord(word) { //word is a string; returns marked string
  return '#' + word +'#';
}

function checkWord(word) {// return boolean
  //if ((word) in dictionary) return true;
  //word = word.toLowerCase();
  return (word.toLowerCase() in dictionary);
}

function spellCheck(sentence) { // sentence is a string

  // tokenize: turn string into array
  var wordsArr = sentence.split(' ');
  // loop

  for (var wordNum=0; wordNum < wordsArr.length ; wordNum++) {
     if (!checkWord(wordsArr[wordNum])) {
       wordsArr[wordNum] = markWord(wordsArr[wordNum]);
     }

  }
  
  return wordsArr.join(' ');

}

spellCheck("The very fast dog ran fast.");
