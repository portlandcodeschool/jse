if (Object.keys(a).length !== Object.keys(b).length) {
	return false;
}

for (var key in a) {
	/*
	if (! (key in b)) {
		return false;
	}


	//check if ... a's val at key is same as b's val at key
	// Y: continue
	// N: return false

	//check if ...  a's val at key  is NOT same as b's val at key
	// Y: return false
	// N: continue

	if ( a[key] !== b[key] ) {
		return false;
	}
*/

	// OR combine:
	if ( !(key in b) ||
		 ( a[key] !== b[key] )) {
		return false;
	}


}

return true;


// INTERSECTION

function inspectShortObj(shortObj, longObj) {
	for (var key in shortObj) {

		//if key is  in both then --> if key  ALSO in B
		if (key in longObj) {
			// it in result with value (A[key] && B[key])
			obj[key] = (shortObj[key] && longObj[key]);
		}
		//else ignore
	}
}

function intersection(a,b) {
//make result obj
var obj = {};
//find shorter obj of A,B
var lengthA = Object.keys(a).length,
	lengthB = Object.keys(b).length;
var shortObj = (lengthA < lengthB)? a : b;
var longObj =  (lengthA < lengthB)? b : a;
/*
var shortObj, longObj;
if (lengthA < lengthB) {
	shortObj = a;
	longObj =  b;
} else {
	shortObj = b;
	longObj =  a;
}
*/
//loop over shorter's keys... {
for (var key in shortObj) {
	//if key is  in both then --> if key  ALSO in B
	if (key in longObj) {
		// it in result with value (A[key] && B[key])
		obj[key] = (a[key] && b[key]);
	}
	//else ignore
}
//return result
return obj;
}


// SOCIAL NETWORK:
var people = {};

people.meet = function(nameA,nameB) {

	// if names aren't yet objects, ??
	var objA = people.index[nameA];// objA is either undefined or some obj
	if (!objA) {
	//  if falseish (people.index[nameA]) then none yet, so
	// make them so:
		objA = {name:nameA, friends: {} }
	  	people.index[nameA] = objA;
		objA.friends[nameB] = 0;
	};
	//implicitly done: else {
	//	objA = people.index[nameA];
	//}
	//... same thing with other name...

	// At this point: there is an obj for each person and
	//  a name in the friends list for other person


	// is nameB in nameA's friend list?  --> always Y
	// Y: increment count for that entry
	objA.friends[nameB] += 1;
	// N: make entry in nameA's list for nameB

	// is nameA in nameB's friend list?
	// Y: increment count for that entry
	// likewise for other person

	// N: make entry in nameB's list for nameA


	// return new count, either one
	return objA.friends[nameB];



}


