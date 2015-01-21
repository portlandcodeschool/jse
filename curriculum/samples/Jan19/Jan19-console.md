duck
Object {  }
{}
undefined
duck
Object { noise: "quack" }
duck
Object { noise: "quack", feet: 2, canSwim: true, canWalk: true, canFly: true }
duck
Object { noise: "quack", feet: 2, canSwim: true, canWalk: true, canFly: true, ducklings: Array[2] }
duck
Object { noise: "quack", feet: 2, canSwim: true, canWalk: true, canFly: true, ducklings: Array[2] }
typeof duck
"object"
typeof Math
"object"
typeof console
"object"
typeof Number
"function"
var arr = [1,2,3]
undefined
typeof arr
"object"
arr
Array [ "apple" ]
arr
Array [ <7 empty slots> ]
duck
Object { noise: "quack", feet: 2, canSwim: true, canWalk: true, canFly: true }
obj
Object { 1: "a", 2: "b" }
obj
Object { 1: "a", 2: "b" }
obj
Object { prop: 7 }
{}
undefined
{x:1, y:2, z:3}
SyntaxError: missing ; before statement
{x:1}
1
{x:1, y:2}
SyntaxError: missing ; before statement
4
4
printObj(7)
undefined
7 Scratchpad/1:3
duck
Object { noise: "quack", feet: 2, canSwim: true, canWalk: true, canFly: true }
printObj(duck)
undefined
Object { noise: "quack", feet: 2, canSwim: true, canWalk: true, canFly: true } Scratchpad/1:3
printObj({x:1})
undefined
Object { x: 1 } Scratchpad/1:3
nest
Object { mama: Object }
aarr
ReferenceError: aarr is not defined
arr
Array [ <7 empty slots> ]
arr = [1,2,3]
Array [ 1, 2, 3 ]
arr[0]
1
duck
Object { noise: "quack", feet: 1 }
duck['feet']
1
var x = 'feet'
undefined
duck[x]
1
duck."feet"
SyntaxError: missing name after . operator
duck.feet
1
duck.x
undefined
duck['']
undefined
Math.sqrt(4)
2
Math[sqrt](4)
ReferenceError: sqrt is not defined
Math["sqrt"](4)
2
nest
Object { mama: Object }
nest.mama
Object { noise: "quack", feet: 2, canSwim: true }
nest.mama.noise
"quack"
var dict = {'apple','banana','carrot'}
SyntaxError: missing : after property id
var dict = {'apple':0,'banana':0,'carrot':0}
undefined
dict
Object { apple: 0, banana: 0, carrot: 0 }
dict.apple
0
dict.corn
undefined
delete dict.carrot
true
dict
Object { apple: 0, banana: 0 }
dict.carrot
undefined
dict.bkjasfbkasfbjk
undefined
djkdbhjkv
ReferenceError: djkdbhjkv is not defined
duck
Object { noise: "quack", feet: 1 }
"key=noise val=quack" Scratchpad/1:3
"key=feet val=1" Scratchpad/1:3
nest
Object { mama: Object }
"quack" Scratchpad/1:3
Object.keys(duo)
ReferenceError: duo is not defined
Object.keys(duo)
Array [ "dan", "tom" ]
Object.keys(duck)
Array [ "noise", "feet" ]
var x  = {hello:1}
undefined
x
Object { hello: 1 }
var y = x;
undefined
y
Object { hello: 1 }
var p = 4;
undefined
var q = p;
undefined
p
4
q
4
p = 5
5
q
4
x
Object { hello: 1 }
x.hello
1
x.hello = 2
2
x
Object { hello: 2 }
y
Object { hello: 2 }
x = {hello:3}
Object { hello: 3 }
x
Object { hello: 3 }
y
Object { hello: 2 }
x.hello 
3
x.hello = 4 
4
y
Object { hello: 2 }
x = null
null
x
null
typeof x
"object"
var x = {};
undefined
var y = x;
undefined
x = null;
null
y
Object {  }
{} === null
SyntaxError: expected expression, got '==='
{}
undefined
{} === {}
SyntaxError: expected expression, got '==='
{} == {}
SyntaxError: expected expression, got '=='
x= {}
Object {  }
y = {}
Object {  }
x == y
false
x === y
false
x
Object {  }
y
Object {  }
y = x
Object {  }
x
Object {  }
x == y
true
x = null;
null
y = null;
null
x === y
true
a
null
b
Object { c: Object }
c
null
d
Object { c: Object }
d == b
true
d.c
Object {  }
