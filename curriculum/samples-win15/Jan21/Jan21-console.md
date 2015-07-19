> "red" Scratchpad/1:5
> "blue" Scratchpad/1:4

myCar.color
> "red"

blerg
> ReferenceError: blerg is not defined

obj
> Object { prop: 1 }

obj.blerg
> undefined

obj
> Object { prop: 1 }

obj.blerg = undefined
> undefined

obj
> Object { prop: 1, blerg: undefined }

obj.blerg
> undefined

obj
> Object { prop: 1, blerg: undefined }

obj.prop
> 1

obj. 
> SyntaxError: missing name after . operator

obj[' ']
> undefined

obj[' '] = 'space'
> "space"

obj
> Object { prop: 1, blerg: undefined,  : "space" }

obj[' ']
> "space"

obj[''] = 'empty'
> "empty"

obj
> Object { prop: 1, blerg: undefined,  : "space", : "empty" }

obj['']
> "empty"

keys
> function JSTH_keys()

keys
> function JSTH_keys()

obj
> Object { a: 1, b: 2, g: 6 }

keys
> function JSTH_keys()

objkeys
> Array [ "a", "b", "g" ]

undefined<12
> false

"undefined"<"12"
> false

undefined < "zee"
> false

"undefined"<"zee"
> true
> "a" Scratchpad/1:4
> "b" Scratchpad/1:4
> "g" Scratchpad/1:4
> 1 Scratchpad/1:4
> 2 Scratchpad/1:4
> 6 Scratchpad/1:4

echo('hello')
> "hello"

repeat('hello')
> "hello"

hello('Greg')
> undefined
> "Hello, Greg" Scratchpad/1:2

obj
> Object { a: 1, b: 2, g: 6 }

obj()
> TypeError: obj is not a function

console.log.length
> 0

Math.sqrt.length
> 1

hello
> function hello()

hello.flavor
> "banana"
> "quack" Scratchpad/1:3
> "woof" Scratchpad/1:3
> "quack" Scratchpad/1:3
> "purr" Scratchpad/1:5

rect
> Object { l: 0, r: 1, b: 0, t: 2, width: rect.width(), height: rect.height(), area: rect.area(), move: rect.move() }
rect.area()
> 2

rect.move(-3, 2)
> undefined

rect
> Object { l: -3, r: -2, b: 2, t: 4, width: rect.width(), height: rect.height(), area: rect.area(), move: rect.move() }
> "Feeding Spot" Scratchpad/1:4
> "Feeding Fluffy" Scratchpad/1:4

spot
> Object { species: "dog", noise: "woof", weight: 115, talk: spot.talk(), feed: spot.feed() }

fluffy
> Object { species: "cat", noise: "purr", weight: 75, talk: spot.talk(), feed: spot.feed() }
