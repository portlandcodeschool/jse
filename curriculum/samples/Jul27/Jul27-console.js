7
//7
'7'
//"7"
Math
//Math { , 44 more… }
typeof Math
//"object"
typeof console
//"object"
document
//HTMLDocument → about:blank
typeof document
//"object"
var arr = [1,2,3]
//undefined
typeof arr
//"object"
arr.concat(arr)
//Array [ 1, 2, 3, 1, 2, 3 ]
arr[0]
//1
var arr = [true,'banana',Infinity];
//undefined
arr[1]
//"banana"
var obj = {a:true, b:'banana', c:Infinity};
//undefined
var obj2 = { if (true) 1 }
//SyntaxError: missing formal parameter
var obj2 = {true:true, banana:'banana', 'Infinity':Infinity}
//undefined
var obj2 = {'true':true, 'banana':'banana', 'Infinity':Infinity}
//undefined
arr[1]
//"banana"
obj.b
//"banana"
obj['b']
//"banana"
var obj3 = {name:'ba'+'na'+'na'}
//undefined
obj3
//Object { name: "banana" }
q
//ReferenceError: q is not defined
obj
//Object { a: true, b: "banana", c: Infinity }
obj.pi = 3.12
//3.12
obj
//Object { a: true, b: "banana", c: Infinity, pi: 3.12 }
obj["pi"] = 3.14
//3.14
obj
//Object { a: true, b: "banana", c: Infinity, pi: 3.14 }
arr[2]
//Infinity
arr[1+1]
//Infinity
var x = 2
//undefined
arr[x]
//Infinity
var x='y',
	y='x';
//undefined
obj = {x:0, y:1}
//Object { x: 0, y: 1 }
obj[x]
//1
obj['x']
//0
obj.x
//0
obj.y
//1
console.log
//function log()
console.log('hello')
//undefined
//"hello"
console[log(hello)]
//ReferenceError: log is not defined
console['log'(hello)]
//ReferenceError: hello is not defined
console['log'('hello')]
//TypeError: "log" is not a function
console['log']('hello')
//undefined
//"hello"
arr
//Array [ true, "banana", Infinity ]
arr.1
//SyntaxError: missing ; before statement
{}
//undefined
obj
//Object { x: 0, y: 1 }
obj.('x'+'')
//SyntaxError: missing name after . operator
obj['x'+'']
//0
var duck = {noise:'quack', feet:2, canSwim:true};
//undefined
duck
//Object { noise: "quack", feet: 2, canSwim: true }
var nest = {mama:duck}
//undefined
nest
//Object { mama: Object }
nest
//Object { mama: Object }
nest.mama.noise
//"quack"
nest.duck.noise
//TypeError: nest.duck is undefined
nest.mama['noise']
//"quack"
nest['mama']['noise]
//SyntaxError: unterminated string literal '
nest['mama']['noise']
//"quack"
duck['noise']
//"quack"
nest
//Object { mama: Object }
'mama' in nest
//true
'papa' in nest
//false
('ma'+'ma') in nest
//true
nest.hasOwnProperty('mama')
//true
nest.mama
//Object { noise: "quack", feet: 2, canSwim: true }
nest.papa
//undefined
asdflkubas
//ReferenceError: asdflkubas is not defined
if (nest.papa=== undefined) 'not there'
//"not there"
'papa' in nest
//false
nest.papa = undefined
//undefined
'papa' in nest
//true
if (nest.papa=== undefined) 'not there'
//"not there"
console.log(obj)
//undefined
//Object { x: 0, y: 1 }
console.log(nest)
//undefined
//Object { mama: Object, papa: undefined }
Object.keys(nest)
//Array [ "mama", "papa" ]
Object.keys(duck)
//Array [ "noise", "feet", "canSwim" ]
duck
//Object { noise: "quack", feet: 2, canSwim: true }
Object.values(duck)
//TypeError: Object.values is not a function
var keys = Object.keys(duck)
//undefined
keys
//function JSTH_keys()
var props = Object.keys(duck)
//undefined
props
//Array [ "noise", "feet", "canSwim" ]
for (var i =0; i<props.length; ++i) {
  console.log(props[i]); }
//undefined
//"noise"
//"feet"
//"canSwim"
for (var i =0; i<props.length; ++i) {
  console.log(duck[props[i]]); } 
//undefined
//"quack"
//2
//true
for (var key in duck) {console.log(key) }
//undefined
//"noise"
//"feet"
//"canSwim"
for (var key in duck) {console.log(duck[key]) }
//undefined
//"quack"
//2
//true
arr
//Array [ true, "banana", Infinity ]
for (key in arr) {console.log(key)}
//undefined
//"0"
//"1"
//"2"
arr['1']
//"banana"
peopleAt(duck)
//"noise
//feet
//canSwim
//"
