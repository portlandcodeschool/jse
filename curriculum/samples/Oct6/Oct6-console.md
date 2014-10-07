"apple".split()
> Array [ "apple" ]

"apple".split('')
>Array [ "a", "p", "p", "l", "e" ]

var strobj = new String("apple")
> undefined

typeof strobj
> "object"

strobj + " is a fruit"
> "apple is a fruit"

card7b
> Object { flavor: "banana", id: 7, rank: Card.rank(), suit: Card.suit() }

z
> Object {  }

z2
> Object { sum: 3 }

z.constructor
> function plus()

z2.constructor
> function sum()

z instanceof plus
> true

z2 instanceof sum
> true

z2
> Object { sum: 3 }

z
> Object {  }

{}
> undefined

var x = {}
> undefined

x
> Object {  }

x instanceof plus
> false

z instanceof plus
> true

id
> 3

rank
> function Card.rank()

suit
> function Card.suit()

rank()
> "Some rank"

obj5
> "5"

typeof obj5
> "object"

str5
> "5"

typeof str5
> "string"

str5[3]
> undefined

obj5[3]
> undefined

obj5[0]
> "5"

plus
> function plus()

plus.prototype
> Object { , 1 more… }

function donkey() {}
> undefined

donkey.prototype
> Object { , 1 more… }

donkey.prototype.constructor.prototype.constructor
> function donkey()

donk
> Object { coat: "grey" }

donk.constructor
> function Donkey()

donk.coat
> "grey"

donk.noise
> undefined

donk.noise
> "heehaw!"

var dink = new Donkey();
> undefined

dink.noise
> "heehaw!"

dink.coat="purple"
> "purple"

Donkey.prototype.coat = 'grey';
> "grey"

dink.coat
> "purple"

var arr = [1,2,3]
> undefined

Object.prototype.donkey = "HEEHAW!"
> "HEEHAW!"

donk.donkey
> "HEEHAW!"

var obj = {};
> undefined

obj.donkey
> "HEEHAW!"

Math.donkey
> "HEEHAW!"

obj
> Object {  }

isNaN.donkey
> "HEEHAW!"

donk
> Object { coat: "grey" }

donk.constructor
> function Donkey()

Object.getPrototypeOf(donk)
> Object { noise: "heehaw!", coat: "grey", 1 more… }

Object.getPrototypeOf(donk) === Donkey.prototype
> true

donk.prototype
> undefined

donk.constructor.prototype
> Object { noise: "heehaw!", coat: "grey", 1 more… }

donk.__proto__
> Object { noise: "heehaw!", coat: "grey", 1 more… }

Object.getPrototypeOf(Donkey.prototype)
> Object { donkey: "HEEHAW!", 14 more… }

Object.getPrototypeOf(Donkey.prototype) === Object.prototype
> true

"donkey" in donk
> true

"join" in [0,1,2,3,4]
> true

[0,1,2,3].hasOwnProperty('join')
> false
