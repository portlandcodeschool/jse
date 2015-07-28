/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

function personIsAt(name,tableObj) {
  if (name in tableObj) {
    return true;
  } else {
    return false;
  }
}

// Shorter:
function personIsAt(name,tableObj) {
  return (name in tableObj);
}


function peopleAt(tableObj) {
  var allTheNames = '';
  for (var name in tableObj) {
    allTheNames += name + '\n';
  }
  return allTheNames;
}










