```
"hello" Scratchpad/1:3
"done!" Scratchpad/1:3
1 Scratchpad/1:3
2 Scratchpad/1:3
3 Scratchpad/1:3
"one" Scratchpad/1:3
"two" Scratchpad/1:3
"three" Scratchpad/1:3
"four" Scratchpad/1:3
2 Scratchpad/1:3
4 Scratchpad/1:3
6 Scratchpad/1:3
8 Scratchpad/1:3
10 Scratchpad/1:3
12 Scratchpad/1:3
14 Scratchpad/1:3
2 Scratchpad/1:3
4 Scratchpad/1:3
6 Scratchpad/1:3
8 Scratchpad/1:3
10 Scratchpad/1:3
12 Scratchpad/1:3
14 Scratchpad/1:3
```

this
> Window → about:blank

window
> Window → about:blank

window === this
> true

global scope
> SyntaxError: missing ; before statement

q
> ReferenceError: q is not defined

var q
> undefined

q
> undefined

z = 1
> 1

z
> 1

this.z
> 1

this.q
> undefined

var r = 2;
> undefined

this.r
> 2

this
> Window → about:blank

this.callFnOnSomeArray
> function callFnOnSomeArray()

var house = {kitchen:{}, garage:{}}
> undefined

this.house === house
> true

this.house.kitchen
> Object {  }

this.window === this
> true

this.this === this
> false

this.length
> 0

this[0]
> undefined

paintThis('purple')
> undefined

this.color
> "purple"

window.color
> "purple"

var s = 1
> undefined

delete s
> true

s
> ReferenceError: s is not defined

s = 1
> 1

s
> 1

delete s
> true

s
> ReferenceError: s is not defined

```
"x=one y=two" Scratchpad/1:5
"x=two y=Three" Scratchpad/1:5
"x=one y=Three" Scratchpad/1:5
"x=two y=four" Scratchpad/1:5
"x=Three y=four" Scratchpad/1:5
"x=one y=four" Scratchpad/1:5
"x=5 y=8" Scratchpad/1:5
"x=8 y=2" Scratchpad/1:5
"x=5 y=2" Scratchpad/1:5
"x=4 y=9" Scratchpad/1:5
"x=9 y=0" Scratchpad/1:5
"x=4 y=0" Scratchpad/1:5
"x=8 y=0" Scratchpad/1:5
"x=2 y=0" Scratchpad/1:5
"x=2 y=4" Scratchpad/1:5
"x=5 y=4" Scratchpad/1:5
"x=5 y=9" Scratchpad/1:5
"x=8 y=9" Scratchpad/1:5
"x=9 y=11" Scratchpad/1:5
```