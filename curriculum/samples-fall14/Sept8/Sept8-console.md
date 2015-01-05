(1+1)
> 2

if (true) (1+1)
> 2

var x = true;
> undefined

if (x) (1+1)
> 2

if (true) (1+1)
> 2

(if (true) (1+1))+1
> SyntaxError: syntax error

(if (true) (1+1))
> SyntaxError: syntax error

(x? 'a' : 'b')
> "a"

x
> true

(x? 'a' : 'b')+'pple'
> "apple"

var rainy=true; if (rainy) "true enough"
> "true enough"

rainy=false; if (rainy) "true enough"
> false

var x=1, y=2; if (x<y) "true enough"
> "true enough"

x=1; if (x) "true enough"
> "true enough"

x=1; if (3) "true enough"
> "true enough"

if ("false") (1+1)
> 2

if (false) (1+1)
> undefined

if (false) (a;kuasfdv.kbuags)
> SyntaxError: missing ) in parenthetical

if (false) (akuasfdvkbuags)
> undefined

if (x === true) 'a'
> undefined

x
> 1

x = true
> true

if (x === true) 'a'
> "a"

true && false
> false

true && true
> true

true || false
> true

false || true
> true

0 || 1
> 1

0 || true
> true

0 || 1
> 1

false && aflkbuadfkjbadsfkbasfkjb
> false

true && asdsagksadgbkasgbk
> ReferenceError: asdsagksadgbkasgbk is not defined

true || askjblasfgjkblasgjklb
> true

var left = [('i '+'ordered '+'pizza'),(x? true:false), (5+3)-1, (x-y/5), ('hi'+' '+'Joel'), 15*7-10, 'apple' || 'orange']
> undefined

left[0]
> "i ordered pizza"

x
> true

left[1]
> true

y
> 2

left[2]
> 7

left[3]
> 0.6

left[4]
> "hi Joel"

left[5]
> 95

left[6]
> "apple"

left
> Array [ "i ordered pizza", true, 7, 0.6, "hi Joel", 95, "apple" ]

left.length
> 7

var right = [(x=='Greg' ? true : false)+10,("that's not" + " Wayne's" + " basement"), 3%7+1, 1+' coffee'+' now!'] 
> undefined

x
> true

false? true:false
> false

right[0]
> 10

true + 10
> 11

right[1]
> "that's not Wayne's basement"

right[2]
> 4

right[3]
> "1 coffee now!"

right
> Array [ 10, "that's not Wayne's basement", 4, "1 coffee now!" ]

left[2] = 12
> 12

left
> Array [ "i ordered pizza", true, 12, 0.6, "hi Joel", 95, "apple" ]

left[2] ++
> 12

left[2] 
> 13

var all = left.concat(right)
> undefined

all
> Array [ "i ordered pizza", true, 13, 0.6, "hi Joel", 95, "apple", 10, "that's not Wayne's basement", 4, 1 more… ]

all[8]
> "that's not Wayne's basement"

all[8] === right[1]
> true

all[8] = 0
> 0

all[8] === right[1]
> false

all[0] = ' and wings'
> " and wings"

left[0]
> "i ordered pizza"

left+right
> "i ordered pizza,true,13,0.6,hi Joel,95,apple10,that's not Wayne's basement,4,1 coffee now!"
