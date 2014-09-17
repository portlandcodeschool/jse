var rainy=true, accessory, footwear;
if (rainy) (accessory="umbrella", footwear="galoshes");

/*
galoshes
*/
accessory

/*
umbrella
*/
















if (rainy) {
	accessory="umbrella";
	footwear="galoshes";
}


















if (rainy) {
	accessory="umbrella";
	footwear="galoshes";

}
	
	//and always:














/*
if (rainy) {
	accesory="umbrella"; 
	footwear="galoshes";
} else { //one line here
	accessory= "sunscreen";
	footwear = "sandals";
}
*/














var who="Elmo";
var needHugs = 2;
if (needHugs) {//need two steps...
	who = '('+who+')';
	needHugs--;
}
who;

/*
((Elmo))
*/







// LOOPS!


var who="Elmo";
var needHugs=5;
while (needHugs) {
	who='('+who+')';
	needHugs--;
}
who;

/*
(((((Elmo)))))
*/


//while (COND) CONS








var who="Elmo";
var needHugs=5;
while (needHugs--) {//double-duty: change w. cond!
	who='('+who+')';
}
who;

/*
(((((Elmo)))))
*/

needHugs

/*
-1
*/







// FOR (downward)
var who='Elmo';
//var needHugs;
for (var needHugs = 5; needHugs>0; ) {
	who = '('+who+')';
	needHugs--;
}
/*
1
*/
who;
/*
(((((Elmo)))))
*/
/*
Elmo
*/


/*
(((((Elmo)))))
*/









// UPWARD
for (var hugsGiven = 0; hugsGiven<5; hugsGiven++) {
	who = '('+who+')';
}
/*
((((((((((Elmo))))))))))
*/
who;


/*
((((((((((Elmo))))))))))
*/










// SHORTER:
for (var hugsGiven = 0; hugsGiven++<5; ) {
	who = '('+who+')';
}
who;











// EVEN SHORTER:
for (var i = 0; i++<5; who='('+who+')') {}
who;








var who = 'Elmo';
// CONSOLE REPORT:
for (var i = 0; i<5; i++) {
	console.log("pass #" + i);
	who = '('+who+')';
}

/*
(((((Elmo)))))
*/







// FUNCTION basis:

var who='Elmo';
for (var needHugs = 5; needHugs; needHugs--) {
	who = '('+who+')';
	alert(who);
}
who;






function hugElmo() {
	var who='Elmo';
			console.log("Before = " + who);

	for (var needHugs = 5; needHugs; needHugs--) {
		who = '('+who+')';
		console.log("After = " + who);
	}
}

hugElmo();


















// ASSERTION
function assert(claim,warning) {
    if (!claim) console.log(warning);
}


var x = 1;
//...
assert(x==1,"Problem!");








// VALIDATION:
function isPositiveInt(n) {
    if (typeof n !== 'number') return false;
    if (n <=0 ) return false;
    if (n%1 !== 0) return false;
    return true;
}
isPositiveInt('7')

function hug(who,howmany) {
    assert(typeof who === 'string', "Freak out: who isnt a string");
    //if (typeof who !=='string') return undefined;
    assert(isPositiveInt(howmany), "Freak out: howmany isn't n int: "+howmany); 
    for (var needHugs = howmany; needHugs; needHugs--) {
    	who = '('+who+')';
    }
       return who;
}