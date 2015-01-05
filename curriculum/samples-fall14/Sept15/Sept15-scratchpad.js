 {noise:'quack', feet:2, canSwim:true, canWalk:true, canFly:true}

(1+1)




// Incremental creation

var duck = new Object(); //empty object

duck.noise = 'quack';
duck.feet = 2;
duck.canSwim = true;
duck.canWalk = true;
duck.canFly = true;
typeof duck;

/*
object
*/

//Array:
var arr = [1,2,3,4,5,6];

// Empty-object creation alternatives:
var duck = new Object;
var duck = Object();
var duck = {};



// Object-literal notation
var duck = {noise:'quack', feet:2, canSwim:true, canWalk:true, canFly:true}

// With embedded expressions
var duck = {noise:'qu'+'ack', feet:(1+1), canWalk:false}

// Literal plus incremental:
duck.canWalk = true;
duck.canSwim = true;


//-------
// Nested objects:
var nest = {mama:{noise:'quack',feet:2,canSwim:true}}

// equivalent to:
var duck = {
    noise:'quack',feet:2,canSwim:true};
var duckling = {noise:duck.noise, feet:duck.feet, canSwim:false };
var nest = {mama:duck, baby:duckling};

//equivalent to:
var duck = new Object();
duck.noise='quack';
//etc...
var nest = new Object();
nest.mama = duck;






//Accessing object members...
//via dot notation: obj.key
var duck ={noise:'quack', feet:2};
duck.noise + '!' //'quack'
duck.feet * 2//2
duck.feet = 1;
// It's just an operator...
duck.feet++; //two funnelled operators!

//via index notation: obj[keyExpr]
duck['noise'] //'quack'
var propName = 'feet';
duck[propName];
/*
2
*/
duck['fe'+'et']
duck['feet'] //2
duck['feet']=3;
duck['feet']--;  //two funneled operators!



// Membership chains:
(nest.mama).noise
nest['mama']['noise']
nest['mama'].feet
1+1*2
nest.mama['feet']


//--- Member/property deletion:
delete duck.noise;


//--- Listing properties: for...in

var duck={noise:'quack',feet:2};
for (var key in duck) {
    console.log('key='+key+' val='+duck[key]);
}


// Exercise: Objectify thyself!
// 1) Create an object for yourself
// 2) Create a wrapper object for your entire table.
// 3) Using the table name, print one property of each person 


var obj = {1:'one', 2:'two'};
obj.1; //bad
obj[1]; //ok
obj['1']; //ok

/*
Exception: missing ; before statement
@Scratchpad/3:3
*/

// Reference puzzle...

