var obj = {a:'a'}
> undefined

'a' in obj
> true

'b' in obj
> false

obj.a = undefined
> undefined

a
> ReferenceError: a is not defined

obj
> Object { a: undefined }

'a' in obj
> true

if (obj.z === undefined)
> SyntaxError: syntax error

if (obj.z === undefined) true
> true

'z' in obj
> false

var obj = {a:'hello'}
> undefined

'a' in obj
> true

var key = 'a'
> undefined

key in obj
> true

'x' in obj
> false

obj.a in obj
> false

var names = {jack:true, sara: true}
> undefined

'jack' in names
> true

typeof null
> "object"

typeof NaN 
> "number"

var x = {}
> undefined

var y = {}
> undefined

x == y
> false

var x = null
> undefined

var y = null
> undefined

x == y
> true

var b;
> undefined

b == null
> true

b === null
> false

null == false
> false

if (null) bang
> undefined

if (obj) true
> true

obj
> Object { a: "hello" }

if (null) bang
> undefined

{}
> undefined

```
"0" Scratchpad/1:1
"1" Scratchpad/1:1
"2" Scratchpad/1:1
"flavor" Scratchpad/1:1
```

arr
> Array [ "a", "b", "c" ]

arr.toString()
> "a,b,c"

pseu
> Object { 0: "a", 1: "b", 2: "c", 3: "d", length: 3 }

arr
> Array [ "a" ]

```
"quack" Scratchpad/1:2
"woof" Scratchpad/1:2
```