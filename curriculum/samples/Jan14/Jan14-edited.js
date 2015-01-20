// --- Functions Review ---

// Must return result...
function hug(who) {
	for (var needHugs = 5; needHugs; needHugs--) {
		who = '('+who+')';
	//console.log(who);// add this so we can see what's happening	
	}
	return who;
}

// and capture result:
var happyElmo = hug("Elmo");
var happyBarney = hug("Barney");




// DIAGRAM!




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








// Parameterize even more details:
function hug(who,howmany,wrapper) {
	if (!wrapper) wrapper = '()'; //default value
	for (var needHugs = howmany; needHugs; needHugs--) {
		who = wrapper[0] + who + wrapper[1];
	//console.log(who);// add this so we can see what's happening	
	}
	return who;
}
var happyElmo = hug("Elmo",6,'()');
var happyBob  = hug("Spongebob",3,'[]');



var happyBob  = hug("Spongebob",3,'[]');


var happy67 = hug(67,-1);

/*
Exception: wrapper is undefined
wrap@Scratchpad/1:4:2
hug@Scratchpad/1:8:1
@Scratchpad/1:2:15
*/
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

function roundHug5(who) {
	return hug(who,5,'()');
}

function hugElmo(howmany) {
	return hug('Elmo',howmany,'()');
}


var happyDanniel = roundHug5('Danniel');


// === SAFEGUARDS and ASSERTIONS ===

function assert(claim,warning) {
    if (!claim) {
    	console.log(warning);
    }
    return claim;
}


var x = 1;
//...

x = 2;
assert(x==1,"Problem! x is not 1");
assert(Number.isFinite(Infinity), 'Infinity is tooo big!');







// VALIDATION FUNCTION:
function isPositiveInt(n) {
	if (typeof n !== 'number') {
		return false;
	}
	if (n <= 0) {
		return false;
	}
	if (n%1 === 0) return true;
	return (n%1 === 0);
	return (Math.trunc(n) === n);
	
 	//...your code here
}
isPositiveInt(7); 	//true

isPositiveInt('-5.5');	//false
isPositiveInt(-5.5);//false
isPositiveInt(5.5);	//false


function show(n) {
		return n;
}
function write(n) {
	console.log(n);
}

// EXERCISE! Write defensive hug:

function wrap(what,wrapper) {
	return wrapper[0] + what + wrapper[1];
}
function hug(who,howmany,wrapper) {
	// be paranoid here...
	assert(typeof who === 'string', "Panic!  Who is not a string!");
	assert(typeof wrapper === 'string', "Panic!  Wrapper is not a string!");
	assert(wrapper.length === 2, "Panic!  Wrapper is not length 2" );
	
	if (!assert(isPositiveInt(howmany), "ZOMGWTF!  homwmany is not a positive int!")) {
		return;
	}
	for (var needHugs = howmany; needHugs; needHugs--) {
		who = wrap(who,wrapper);
	}
	return who;
}

// ...so that bad calls are safe:
// hug(NaN,0,'');
/*
undefined
*/
// hug('Elmo',-1.1,'()');











//  === TESTING ===

// Preliminary (wrong!) test for prime numbers:
function isPrime(n) {
	// something goes here eventually
	return (n%2 !==0);
}

// Before developing correct code...
// Write tests first!


// Version 0: test each case independently:
function testPrimes0() {
	assert(isPrime(0)===false,	'0 failed to return false');
	assert(isPrime(1)===false,	'1 failed to return false');
	assert(isPrime(2)===true,	'2 failed to return true');
	assert(isPrime(3)===true,	'3 failed to return true');
	assert(isPrime(4)===false,	'4 failed to return false');
	assert(isPrime(5)===true,	'5 failed to return true');
	//...
}















// Version 1: loop over array of all cases:
function testPrimes1() {
	var primeness = [
		false, false, true, true, false, //0..4
		true, false, true, false, false, //5..9
		false, true, false, true, false, //10..14
		false, false, true, false, true  //15..19
	];

	for (var num = 0; num < primeness.length; ++num) {
		assert(isPrime(num) === primeness[num], num + " failed to return " + primeness[num] );
	}
	// EXERCISE: code here!

}














// Version 2: identify only positive cases:
function testPrimes2() {
	var knownPrimes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47];
	// Easy to test primes:

	// EXERCISE: code here!
	for (var pos = 0; pos < knownPrimes.length ; pos++) {
			var num = knownPrimes[pos];
			assert(isPrime(num)===true, num + " failed to return true");
	}

	// but how to test non-primes in between?
	// Test is incomplete!
}

















// Version 3: infer negative cases:
function testPrimes3() {
	var knownPrimes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47];
	var primeness = [];
	//populate primeness array:
	for (var i = 0; i < knownPrimes.length; ++i) {
		var n = knownPrimes[i];
		primeness[n] = true;
	}
	// in-between elements (non-primes) are still undefined!

	console.log(primeness);
	
	// now test all numbers:
	for (var n = 0; n < primeness.length; ++n) {
		assert(
			//isPrime(n)===primeness[n] // <--Won't work!
			primeness[n]? //if expect true
				isPrime(n)===true:
				isPrime(n)===false,
			n+' failed'
		);
	}
}

// Hooray, done writing Tests!  Now for code:

// EXERCISE: Write a function to determine primeness!

// Helper function:
function isPositiveInteger(n) {
	//as before ...
}
// Main function:
function isPrime(n) {
	//...
}








// === Invalid arguments and Failure codes ===

// Imagine the function:
function largestPrimeUpTo(n) {
	// Returns biggest prime not bigger than n
}







function testLargestPrimeUpTo_successes() {
	assert(largestPrimeUpTo(2)		=== 2, '2 fails');
	assert(largestPrimeUpTo(2.5)	=== 2, '2.2 fails');
	assert(largestPrimeUpTo(3)		=== 3, '3 fails');
	assert(largestPrimeUpTo(3.5)	=== 3, '3.5 fails');
	assert(largestPrimeUpTo(4.5)	=== 3, '4.5 fails');
	assert(largestPrimeUpTo(5) 		=== 5, '5 fails');
	//...
}





// Also needs to handle failure...



function testLargestPrimeUpTo_failures() {
	//assert(largestPrimeUpTo(1)	=== NaN, '1 fails');// won't work
	assert(Number.isNaN(largestPrimeUpTo(1)),
						'1 fails');
	assert(Number.isNaN(largestPrimeUpTo(0)),
						'0 fails');
	assert(Number.isNaN(largestPrimeUpTo(-1)),
						'-1 fails');
	//...
}








//EXERCISE: use an array of potential bad inputs
function testLargestPrimeUpTo_failures() {
	var badVals = [/*...*/];
	//check them...

}







// Finally: write the function:
function largestPrimeUpTo(n) {
	// Returns biggest prime not bigger than n
}
