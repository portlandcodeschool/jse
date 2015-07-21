1+1
2
console.log('hello')
VM174:2 hello
undefined
var p;
undefined
var q = 9;
undefined
q = 9
9
thumbnail.html:1 GET chrome-search://thumb2/http://backbonejs.org/ net::ERR_FAILED
thumbnail.html:1 GET chrome-search://thumb2/http://localhost:9001/ net::ERR_FAILED
var x = 20;
x = x + 5;
console.log(typeof x);
VM287:4 number
undefined
x = "a string";
console.log(typeof x);
console.log(typeof (x + undefined));

VM293:3 string
VM293:4 string
undefined
x + undefined
"a stringundefined"
typeof (x + undefined)
"string"
x=5
5
!((x >= 0) && (x <= 10)) === (!(x >= 0) || !(x <= 10))
true
!((x >= 0) && (x <= 10)) === ((x < 0) || (x > 10))
true
x = 'banana'
"banana"
!((x >= 0) && (x <= 10)) === (!(x >= 0) || !(x <= 10))
true
!((x >= 0) && (x <= 10)) === ((x < 0) || (x > 10))
false
var x=1, y=1; x === y === 1;
false
var x=2, y=2; x === y === 2;
false
var x=2, y=2; x == y == 2;
false
var x = 0; -1 < x < 1
false
if (x<10) 'less than ten';
"less than ten"
x
0
if (x>10) 'less than ten';
undefined
if (x<10) console.log(x);
VM510:2 0
undefined
if (x<10) console.log(x); else console.log('nope')
VM599:2 0
undefined
if (x>10) console.log(x); else console.log('nope')
VM600:2 nope
undefined
if (x) console.log(x); else console.log('nope')
VM602:2 nope
undefined
x
0
x = 1
1
if (x) console.log(x); else console.log('nope')
VM617:2 1
undefined
!"coffee"
false
!"tea"
false
!0
true
!1
false
!2
false
!Infinity
false
2 && 1 && 0
0
!undefined
true
!"false"
false
if ("false") console.log('yes!')
VM901:2 yes!
undefined
if ("0") console.log('yes!')
VM902:2 yes!
undefined
var x, y=1; x || y;
1
var x = 0; (x === 1 || 2)
2
if (x === 1 || 2) "yes"
"yes"
var rainy=true, accessory, footwear;
if (rainy)
	accessory="umbrella";
	footwear="galoshes";
"galoshes"
true || arglebarg
true
arglebarg
VM999:2 Uncaught ReferenceError: arglebarg is not defined