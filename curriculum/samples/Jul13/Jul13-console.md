1+1
> 2

4/2
> 2

1+3*4
> 13

(1+(3*4))
> 13

-1
> -1

7%4
> 3

99%10
> 9

80%9
> 8

1+(3*4)
> 13

(1+3)*4
> 16

1+(3*4)
> 13

1 === 1
> true

1===2
> false

var x;
> undefined

delete x
> true

1 + x
> ReferenceError: x is not defined

var x;
> undefined

x = 7
> 7

1+x
> 8

x
> 7

x = -3
> -3

x
> -3

x = true
> true

x
> true

x = 4, x=3, x=false
> false

6,9
> 9

x
> false

x=3,9
> 9

x
> 3

6=3
> ReferenceError: invalid assignment left-hand side

6===3
> false

1+5
> 6

x
> 3

x+936.8
> 939.8

x
> 3

x=1
> 1

x+1
> 2

3+4
> 7

1+1
> 2

x=3+4
> 7

1+3+(x=(5*4))
> 24

typeof 7
> "number"

typeof -3.1415926
> "number"

x = 7
> 7

x%1
> 0

x = -3.141519497347
> -3.141519497347

x%1
> -0.1415194973470002

typeof 8
> "number"

typeof (typeof 8)
> "string"

typeof typeof blarg
> "string"

var blarg
> undefined

blarg
> undefined

30/0 * 0
> NaN

10 + undefined
> NaN

10 + "string"*0
> NaN

typeof NaN
> "number"

typeof 7
> "number"

typeof NaN
> "number"

typeof x
> "number"

x = 'banana'*0
> NaN

typeof x
> "number"

NaN === NaN
> false

isNaN(7)
> false

isNaN(x)
> true

'banana'/2
> NaN

'banana'+2
> "banana2"

"30" + 5
> "305"

var numStudents=18;
var numHelpers=4;
> undefined

"There are "+(numStudents+numHelpers)+" people in the room"
> "There are 22 people in the room"

"There are "+numStudents+numHelpers+" people in the room"
> "There are 184 people in the room"

+"30" + 5
> 35

x='1'
> undefined

var y;
> undefined

y=x+1-1;
> 10

y=x-1+1
> 1

typeof y
> "number"

"10"+1
> "101"

"101"-1
> 100

x
> "1"
