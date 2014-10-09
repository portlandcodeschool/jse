function Ctor() {
  return {FAIL:true}
}
> undefined

new Ctor()
> Object {FAIL: true}

Function.prototype === Function.__proto__
> true

Array.prototype === Array.__proto__
> false

Array.__proto__ === Function.prototype
> true

var obj = new Object()
> undefined

Object.keys(Object.prototype)
> []

window === this
> true

window.constructor
> function ()

window.constructor === Window
> true

Window.constructor === Function
> true

Window.prototype instanceof Object
> true

Window.prototype.__proto__
> WindowProperties {  }

Window.prototype.__proto__.__proto__
> EventTargetPrototype { addEventListener: addEventListener(), removeEventListener: removeEventListener(), dispatchEvent: dispatchEvent(), 1 more… }

Window.prototype.__proto__.__proto__.__proto__
> Object { , 14 more… }

Window.prototype.__proto__.__proto__.__proto__.__proto__
> null

Window.prototype.__proto__.__proto__.__proto__ === Object.prototype
> true

Animal.prototype
> Object { eats: true, 1 more… }

Bird.prototype
> Object { constructor: Bird() }

Deque
> function Deque()

var deq = new Deque([1,2,3,4])
> undefined

deq
> Object { array: Array[4] }

deq.top()
> 4

deq.bottom()
> 1

deq.push(5)
> 5

deq.top()
> 5

var que = new Queue([1,2,3,4,5]);
> undefined

que
> Object { array: Array[5], type: "queue" }

que.bottom
> undefined

que.top
> function proto.top()

que.top()
> 5

que.pop()
> 5

que.pop()
> 4

que.unshift(0)
> 4

que.pop()
> 3

que.pop()
> 2

que.pop()
> 1

que.pop()
> 0
