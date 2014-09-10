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
for (var needHugs = 5; needHugs; needHugs--) {
	who = '('+who+')';
}
who;


/*
(((((Elmo)))))
*/









// UPWARD
for (var hugsGiven = 0; hugsGiven<5; hugsGiven++) {
	who = '('+who+')';
}
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









// CONSOLE REPORT:
for (var i = 0; i<5; i++) {
	console.log("pass #" + i);
	who = '('+who+')';
}








// FUNCTION basis:

var who='Elmo';
for (var needHugs = 5; needHugs; needHugs--) {
	who = '('+who+')';
}
who;

