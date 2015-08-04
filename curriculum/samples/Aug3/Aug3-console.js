someFn
function someFn()
typeof someFn
"function"
var alias = someFn;
undefined
typeof alias
"function"
someFn()
ReferenceError: blahblahblah is not defined
var obj = {}
undefined
paint(obj)
ReferenceError: paint is not defined
paint(obj)
undefined
obj
Object { color: "red" }
var obj = {}
undefined
recolor(obj)
undefined
obj
Object { color: "red" }
objs
Array [ Object, Object, Object ]
objs
Array [ Object, Object, Object ]
paint
function paint()
paint.flavor = 'banana'
"banana"
typeof paint
"function"
paint
function paint()
paint
function paint()
paint.length
1
Math.max.length
2
Math.max(5)
5
objs
Array [ Object, Object, Object ]
"woof" Scratchpad/1:6:2
"woof" Scratchpad/1:5:5
"arf" Scratchpad/1:5:3
"arf" Scratchpad/1:3:2
"quack" Scratchpad/1:3:2
"arf" Scratchpad/1:3:2
"quack" Scratchpad/1:3:2
Math.max()
-Infinity
talk
function talk()
talk.toString()
"function () {
	console.log(this.noise)
}"
dog.talk()
undefined
"arf" Scratchpad/1:3:2
talk()
undefined
undefined Scratchpad/1:3:2
talk
function talk()
this
Window → about:blank
window === this
true
window.window === window
true
var x;
undefined
asdfgafg = 7
7
window.asdfgafg
7
window.x
undefined
x = 9
9
window.x
9
window
Window → about:blank
talk()
undefined
undefined Scratchpad/1:3:2
paint.toString()
"function (obj) {
     obj.color = paint.color;
}"
paint.toString()
"function (obj) {
     obj.color = paint.color;
}"
paint()
TypeError: obj is undefined
paint()
undefined
color
"red"
dog.talk()
undefined
"woof" Scratchpad/1:7:9
duck.talk()
undefined
"quack" Scratchpad/1:7:9
duck
Object { name: "duck", noise: "quack", wingspan: 2, talk: animal/critter.talk() }
dog
Object { name: "dog", noise: "woof", costume: "collar", talk: animal/critter.talk() }
