


var Deque = (function() {
    
  function Deque(vals) {
    this.array = vals.slice();
    this.type = "deque";
  }

  var proto = Deque.prototype;

  proto.push = function(val) {
    return this.array.push(val);
  }

  proto.pop = function() {
      return this.array.pop();
  }

  proto.unshift = function(val) {
      return this.array.unshift(val);
  }

  proto.shift = function() {
      return this.array.shift();
  }

  proto.top = function() {
    return this.array[this.array.length-1];
  }

  proto.bottom = function() {
    return this.array[0];
  }

  return Deque;
})()



var Queue = (function(Super){
  function Queue(vals) {
    Super.call(this,vals);
    this.type = "queue";
  }
  var proto = new Super("");
  Queue.prototype = proto;
  proto.constructor = Queue;

  proto.push = undefined;
  proto.shift = undefined;
  proto.bottom = undefined;

  return Queue;
})(Deque);


