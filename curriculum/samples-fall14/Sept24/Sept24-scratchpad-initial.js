// Stage 1: simple instance pattern

var redPaintBucket = {supply:100, color:'red'};

redPaintBucket.use = function(need) {
	if (this.supply >= need) {
			this.supply -= need;
			return true;
	}
	return false;
}

// Stage 2a: need more instances...
var bluePaintBucket = {supply:100, color:'blue'};
bluePaintBucket.use = function(need) {
	// as before...
}

var greenPaintBucket = {supply:100, color:'green'};
greenPaintBucket.use = function(need) {
	// as before...
}
// Problem: too much work + risk that instances differ



//Stage 2b:
//Exercise: write function to automate instance-making!
// (i.e. "Factory")

function makePaintBucket(bucketColor) {
	// something...

}

//usage:
var redPaintBucket = makePaintBucket("red");
var bluePaintBucket = makePaintBucket("blue");








// Problem: instance methods are duplicated!
redPaintBucket.use !== bluePaintBucket.use;

// Stage 3:
// EXERCISE: write factory for instances with shared methods
function makePaintBucket(bucketColor) {
	// something...


}
// Also:
//makePaintBucket.useFn = function()...



//usage:
var redPaintBucket = makePaintBucket("red");
var bluePaintBucket = makePaintBucket("blue");



// Methods are shared:
redPaintBucket.use === bluePaintBucket.use;







// ------------- Stage 4 -----------------
//   Convert toolkit into factory!

var cube1 = {size:1, color:'white'};
var cube3 = {size:3, color:'black'};

var cubeKit = {
	volume:function(cube) {
		return cube.size * cube.size * cube.size;
	},
	area:function(cube) {
		return cube.size * cube.size * 6;
	},

	paint: function(cube,bucket) {
		// EXERCISE!
		// Find cube's area, then call bucket.use(area) to
		//  paint the cube (if possible) and return the new color.


	}
}

//usage:
cubeKit.paint(cube1,redPaintBucket);
cubeKit.paint(cube3,redPaintBucket);

cube1.color;
cube3.color;
redPaintBucket.supply;









// Stage 5: automate cube-making

var cubeKit = {

	area:function(cube) {
		return cube.size * cube.size * 6;
	},

	paint: function(cube,bucket) {
		//as above
	},

	makeCube: function(cubeSize,cubeColor) {
		// EXERCISE:
		// make and return a new cube here
	}
}












// Stage 6: reconnect methods as instance methods:

var cubeKit = {
	area:function(cube) {
		return cube.size * cube.size * 6;
	},

	paint: function(cube,bucket) {
		// EXERCISE:
		// as above, modified slightly
	},

	makeCube: function(cubeSize,cubeColor) {
		// EXERCISE:
		// make and return cube with area and paint
		//   attached as instance methods
	}
}
var cube1 = cubeKit.makeCube(1,'white');
var cube3 = cubeKit.makeCube(3,'black');

// 'this' depends on context...
cubeKit.paint(cube1,redPaintBucket);
cube1.paint(cube1,redPaintBucket);









// Stage 7: strip redundant parameter 'cube'
var cubeKit = {
	area:function() {
		return this.size * this.size * 6;
	},

	paint: function(bucket) {
		// EXERCISE:
		// rewrite using 'this' to replace cube

	},

	makeCube: function(cubeSize,cubeColor) {
		var newCube = {size:cubeSize, color:cubeColor};
		newCube.area = this.area;
		newCube.paint = this.paint;
		return newCube;
	}
}
var cube1 = cubeKit.makeCube(1,'white');
var cube3 = cubeKit.makeCube(3,'black');
//cubeKit.paint(cube1,redPaintBucket); //no longer valid
cube1.paint(redPaintBucket);














//Stage 8: Promote makeCube to replace cubeKit as master object
function makeCube(cubeSize,cubeColor) {
		var newCube = {size:cubeSize, color:cubeColor};
		newCube.area = makeCube.area;
		newCube.paint = makeCube.paint;
		return newCube;
	}
makeCube.area = function() {
	return this.size * this.size * 6;
}
makeCube.paint = function() {
	var area = this.area();
	return bucket.use(area) && (this.color = bucket.color);	
}
var cube1 = makeCube(1,'white');
cube1.paint(redPaintBucket);




// General Factory Pattern:
function factory(inits) {
	var instance = {};
	instance.method = factory.method;
	//...
	return instance;
}
factory.method = function() {
	// this means instance
}
var instance = factory(/*details*/);
instance.method();











// Stage 9: Do the same with paintBuckets...
function makePaintBucket(bucketColor) {
	var newBucket = {supply:100, color:bucketColor};
	newBucket.use = makePaintBucket.use;
	return newBucket;
}
makePaintBucket.use = function(need) {
	if (this.supply >= need) {
		this.supply -= need;
		return true;
	}
	return false;		
}

var red  = makePaintBucket('red');
var blue = makePaintBucket('blue');
var cube1 = makeCube(1,'');
var cube3 = makeCube(3,'');
cube1.paint(red);
cube2.paint(blue);
