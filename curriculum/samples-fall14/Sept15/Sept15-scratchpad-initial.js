 {noise:'quack', feet:2, canSwim:true, canWalk:true, canFly:true}






// Incremental creation

var duck = new Object(); //empty object
// 'Slang' variants:

duck.noise = 'quack';
duck.feet = 2;
duck.canSwim = true;
duck.canWalk = true;
duck.canFly = true;
typeof duck;



// Empty-object creation alternatives:
var duck = new Object;
var duck = Object();
var duck = {};



// Object-literal notation
var duck = {noise:'quack', feet:2, canSwim:true, canWalk:true, canFly:true}

// With embedded expressions
var duck = {noise:'qu'+'ack', feet:(1+1)}

// Literal plus incremental:
duck.canWalk = true;
duck.canSwim = true;


//-------
// Nested objects:
var nest = {mama:{noise:'quack',feet:2,canSwim:true}}

// equivalent to:
var duck = {noise:'quack',feet:2,canSwim:true};
var nest = {mama:duck};

//equivalent to:
var duck = new Object();
duck.noise='quack';
//etc...
var nest = new Object();
nest.mama = duck;






//Accessing object members...
//via dot notation: obj.key
var duck ={noise:'quack', feet:2};
duck.noise //'quack'
duck.feet //2
duck.feet = 1;
// It's just an operator...
duck.feet++; //two funnelled operators!

//via index notation: obj[keyExpr]
duck['noise'] //'quack'
duck['feet'] //2
duck['feet']=3;
duck['feet']--;  //two funneled operators!



// Membership chains:
nest.mama.noise
nest['mama']['noise']
nest['mama'].feet


//--- Member/property deletion:
delete duck.noise;


//--- Listing properties: for...in

var duck={noise:'quack',feet:2};
for (var key in duck) {
    console.log('key='+key+' val='+duck[key]);
}


// Exercise: Objectify thyself!
// 1) Create an object for yourself
// 2) Create a werapper object for your entire table.
// 3) Using the table name, print one property of each person 

// Reference puzzle...

