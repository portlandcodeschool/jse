/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */



function hugSomeone(who) {
	//var who='Elmo';
	//		console.log("Before = " + who);

	for (var needHugs = 5; needHugs; needHugs--) {
		who = '('+who+')';
		//console.log("After = " + who);
	}
  return who;
}



/*
undefined
*/
/*
undefined
*/


function prnt(n,d) {
  return (n + '/' + d);
//  return n/d;
}