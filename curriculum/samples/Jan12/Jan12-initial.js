// Exercise: simple arrays:
// 1) think of expression of 2 operators 
// 2) line up in 2 lines
// 3) make array literal...


var left = [];
var right= [];

left.length;
right.length;
left[5];  // reading element
left[4+1] = right[2+3]; //setting element

var both = left.concat(right);








// ====== Review, in Scratchpad: =======

var rainy=true, accessory, footwear;
if (rainy) (accessory="umbrella", footwear="galoshes");










if (rainy) {
	accessory="umbrella";
	footwear="galoshes";
}









if (rainy)
	accessory="umbrella";
	footwear="galoshes";










if (rainy) {
	accesory="umbrella"; 
	footwear="galoshes";
} else { //one line here
	accessory= "sunscreen";
	footwear = "sandals";
}










var who="Elmo";
var needHugs = 2;
//hug once:
if (needHugs) {//need two steps...
	who = '('+who+')';
	needHugs--;
}
who;



// LOOPS!

// INIT;
// while (COND) {
// 		WORK;
//		CHANGE_COND;
// }


var who="Elmo";
var needHugs=5;
while (needHugs) {
	who='('+who+')';
	needHugs--;
}
who;


var who="Elmo";
var needHugs=5;
while (needHugs--) {//double-duty: change w. cond!
	who='('+who+')';
}
who;


// for (INIT; COND; CHANGE_COND) {
//		WORK;
// }


// for loop (downward)
var who='Elmo';
for (var needHugs = 5; needHugs; needHugs--) {
	who = '('+who+')';
}
who;



// for loop, upward
var who='Elmo';
for (var hugsGiven = 0; hugsGiven<5; hugsGiven++) {
	who = '('+who+')';
}
who;


// These have poor clarity
// SHORTER:
var who='Elmo';
for (var hugsGiven = 0; hugsGiven++<5; /*nothing*/) {
	who = '('+who+')';
}
who;



// EVEN SHORTER: (but bad practice!)
var who='Elmo';
for (var i = 0; i++<5; who='('+who+')') {}
who;



// CONSOLE REPORT:
for (var i = 0; i<5; i++) {
	console.log("pass #" + i);
	who = '('+who+')';
}


// EXERCISE:
// 1) Make an array of 10 values.
// 2) write a loop to print every even #'d element, going forward
// 3) write a loop to print every odd #'d element, going backwards

//------------------------------


// FUNCTION basis:

var who='Elmo';
for (var needHugs = 5; needHugs; needHugs--) {
	who = '('+who+')';
}
who;



// Turn it into function:

function hug() {
	var who='Elmo';
	for (var needHugs = 5; needHugs; needHugs--) {
		who = '('+who+')';
	}
}


// Problem: local scope.
// SCOPE and SHADOWING...


// Solution 1: global who
var who='Elmo';
function hug() {
	for (var needHugs = 5; needHugs; needHugs--) {
		who = '('+who+')';
	}
}

// Works, but fragile...


// Better: parameterize!

function hug(who) {
	for (var needHugs = 5; needHugs; needHugs--) {
		who = '('+who+')';
	console.log(who);// add this so we can see what's happening	
	}
}
hug("Elmo");
hug("Barney");
// Doing something locally, but no permanent effect





// Must return result...
function hug(who) {
	for (var needHugs = 5; needHugs; needHugs--) {
		who = '('+who+')';
	//console.log(who);// add this so we can see what's happening	
	}
	return who;
}
hug("Elmo");

hug("Barney");




// Now capture result:
var happyElmo = hug("Elmo");
var happyBarney = hug("Barney");








// Parameterize more details:
function hug(who,howmany) {
	for (var needHugs = howmany; needHugs; needHugs--) {
		who = '('+who+')';
	//console.log(who);// add this so we can see what's happening	
	}
	return who;
}
var happyElmo = hug("Elmo",6);
var happyBarney = hug("Barney",4);









function hug(who,howmany,wrapper) {
	for (var needHugs = howmany; needHugs; needHugs--) {
		who = wrapper[0] + who + wrapper[1];
	//console.log(who);// add this so we can see what's happening	
	}
	return who;
}
var happyElmo = hug("Elmo",6,'()');
var happyBob  = hug("Spongebob",3,'[]');







// Helper function:
function wrap(what,wrapper) {
	return wrapper[0] + what + wrapper[1];
}
function hug(who,howmany,wrapper) {
	for (var needHugs = howmany; needHugs; needHugs--) {
		who = wrap(who,wrapper);
	}
	return who;
}




// Wrapper functions fill in some parameters:
function wrap(what,wrapper) {
	return wrapper[0] + what + wrapper[1];
}
function hug(who,howmany,wrapper) {
	for (var needHugs = howmany; needHugs; needHugs--) {
		who = wrap(who,wrapper);
	}
	return who;
}

function roundHug5(who) {
	return hug(who,5,'()');
}

function hugElmo(howmany) {
	return hug('Elmo',howmany,'()');
}





