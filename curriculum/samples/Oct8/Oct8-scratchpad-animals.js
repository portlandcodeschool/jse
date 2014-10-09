

function Animal() {
  
}
Animal.prototype.eats = true;

function Bird() {
}



var protoBird = new Animal();
Bird.prototype = protoBird;
protoBird.constructor = Bird;



Bird.prototype.wings = true;

var bluejay = new Bird();
bluejay.wings

var ostrich = new Bird();
ostrich.fly = false;

function Finch() {
}


var proto = new Bird();
Finch.prototype = proto;
proto.constructor = Finch;

var frank = new Finch();
frank.wings = false;

Finch.prototype.beak = 'strong';


function FlightlessBirds() {

}

var protoFL = new Bird();
FlightlessBird.prototype = protoFL;
protoFL.constructor = FlightlessBird;

protoFL.fly = false;

