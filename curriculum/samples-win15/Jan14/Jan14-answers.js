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

function roundHug5(who) {
	return hug(who,5,'()');
}

function hugElmo(howmany) {
	return hug('Elmo',howmany,'()');
}





// SAFEGUARDS and ASSERTION
function assert(claim,warning) {
    if (!claim) {
    	console.log(warning);
    }
    return claim;
}


var x = 1;
//...
assert(x==1,"Problem!");








// VALIDATION FUNCTION:
function isPositiveInt(n) {
    if (typeof n !== 'number') return false;
    if (n <=0 ) return false;
    if (n%1 !== 0) return false;
    return true;
}
isPositiveInt('7');


// DEFENSIVE HUG:
function hug(who,howmany) {
    assert(typeof who === 'string',
    		"Warning: who isnt a string");
    //if (typeof who !=='string') return undefined;
    if (!assert(isPositiveInt(howmany),
    			"Panic! ZOMGWTF!? Howmany isn't a positive int: "+howmany))
    	return;
    for (var needHugs = howmany; needHugs; needHugs--) {
    	who = '('+who+')';
    }
    return who;
}

// Bad call is safe:
hug('Elmo',-1.1);




// Preliminary (wrong!) test for prime numbers:
function isPrime(n) { 	//really means isOdd()...
	return ((n%2) === 1); //true for odd numbers, else false
}

// Before developing correct code...
// Write tests first!


function assert(claim, warning) {
	if (!claim) { //report only failures:
		console.log(warning);
	}
}

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

	for (var n = 0; n < primeness.length; ++n) {
		assert(
			isPrime(n) === primeness[n], //claim
			n+' failed to return '+primeness[n]  //warning
		);
	}
}





// Version 2: identify only positive cases:
function testPrimes2() {
	var knownPrimes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47];
	// Easy to test primes:
	for (var i = 0; i < knownPrimes.length; ++i) {
		assert(
			isPrime(knownPrimes[i]),
			knownPrimes[i]+' failed'
		);
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
			primeness[n]?
				isPrime(n)===true:
				isPrime(n)===false,
			n+' failed'
		);
	}
}

// Hooray, done writing Tests!  Now for code:

// Write a function to determine primeness!


// Helper function:
function isInteger(n) {
	//...
}
// Main function:
function isPrime(n) {
	//...
}



/*
function isInteger(n) {
	if (typeof n !== "number")
		return false;
	return (n%1 === 0);
	//OR:
	// return (n===Math.floor(n));
	//OR ES6-only function:
	// return Number.isInteger(n)
}

function isPrime(n) {
    if (n<2 || !isInteger(n))
        return false;    // excludes 0,1,and non-integers
    // search for number which divides n evenly...
    var sqrt=Math.sqrt(n); // only need to search up to n's square root
    for (var test=2; test<=sqrt; test++) {
        if (isInteger(n/test))
            return false;  //found one; n isn't prime
    }
    return true;//n must be prime
 }
*/

// Invalid arguments and Failure codes

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

/*
function testLargestPrimeUpTo_failures() {
	var badVals = [0,1,-1,Infinity,-Infinity,'','1','a',true,false,undefined];
	for (var i = 0; i < badVals.length; ++i) {
		var badVal = badVals[i];
		assert(Number.isNaN(largestPrimeUpTo(badVal)),
				badVal+' fails'
		);
	}
}
*/


/*
function largestPrimeUpTo(n) {
	if (isNaN(n) || !Number.isFinite(n)) {
		return NaN;
	}
	for (n = Math.floor(n); n>=2; --n) {
		if (isPrime(n)) {
			return n;
		}
	}
	return NaN;
}
*/
