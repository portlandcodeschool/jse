var sqr = new Square(0,0,3)
undefined
sqr
Object {  }
sqr.move
function Ctor.prototype.move()
sqr.width
function Ctor.prototype.width()
var sqr = new Square(0,0,3)
undefined
sqr.area()
9
sqr.width()
3
sqr.move(1,1)
undefined
sqr
Object { l: 1, b: 1, r: 4, t: 4 }
Rect
function Ctor()
Rect.every()
Array [  ]
var r1 = new Rect(0,0,1,2)
undefined
var r2 = new Rect(2,3,4,5)
undefined
Rect.every()
Array [ Object, Object ]
Rect.every()[1]
Object { l: 2, b: 3, r: 4, t: 5 }
r1 === Rect.every()[0]
true
Square.prototype instanceof Rect
true
var r2 = new Rect(0,0,1,2)
undefined
var r3 = new Rect(0,0,1,2)
undefined
Rect.every()
Array [ Object, Object, Object, Object, Object ]
Rect.every()
Array [  ]
var r2 = new Rect(0,0,1,2)
undefined
var r3 = new Rect(0,0,1,2)
undefined
Rect.every()
Array [ Object, Object ]
var sqr = new Square(0,0,2)
undefined
sqr.area()
4
sqr.width()
2
sqr.height()
2
sqr.move()
undefined
sqr
Object { l: NaN, b: NaN, r: NaN, t: NaN }
sqr.move
function Ctor.prototype.move()
var sqr = new Square(0,0,2)
undefined
sqr.move
undefined
sqr.move()
TypeError: sqr.move is not a function
