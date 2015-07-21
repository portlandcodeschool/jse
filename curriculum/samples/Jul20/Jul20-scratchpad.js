/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

if (!thereYet) {
	driveABlock()
}

if (!thereYet) {
	driveABlock()
}

if (!thereYet) {
	driveABlock()
}

while (!thereYet) {
  driveABlock();
}


var x=0, y; //INIT
while (x<10) {//COND
	console.log(x);//WORK
  y = x++;//CHANGE or INCREMENT
  y = ++x;
}

x = 10;
x++;
x

x = undefined;

var x;
var i = 0;
while (!x) {
    i = i + 1;
    if (i == 5) {
        x = true;
    }
    console.log("running");
}

INIT
while (COND) {
   WORK
   CHANGE
}


for (INIT ; COND ; CHANGE ) {
  WORK
  //>>>CHANGE happens here
}

//iterator!!!

for (var i = 0;  i<10 ; i = i+1  ) {
  console.log(i)
}
  
var i;

for (i = 0; i < 8; i=i+1){
    if(i == 5){
        console.log("It's five!");
        i = i+1;
    }
    console.log(i);
}

  var x;
var nums = [3, 1, 4, 1, 5, 9, 2, 7];
//Find the outcome of each of the these expressions:

nums[3];
nums[nums.length-1];
nums[nums[4]];

x = nums.concat(nums);
x[x[x[nums[2]]]];
nums[x[x[x[2]]]];

nums.push(x.pop());
x.push(nums.length);
x.push(x.push(0));

x.length = x[6];

  var x = [1,2,3,4,5];

for (var i=0; i < x.length; i = i + 1){
    if (i % 2 == 0){
        console.log(i + " : " + x[i]);
    }
}

  
/*
Now, write a small program that

declares a variable holding an empty array;
iterates from 1 through 10 and puts each odd number in the array;
prints out the array.
*/
 
var x = [];

for (var i=1 ; i<11 ; i=i+1) {
  if (i%2) {
    x.push(i);
    //OR
    //x[x.length]=i;
  }
}

for (var i=0; i<x.length; ++i) {
  console.log(x[i])
}
  
  
  
  
  
  
  
  
  
  
  
