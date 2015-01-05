/* Dan's prepared version */

var Checkerboard = function(){
	
	function clickAction(x,y) {
		console.log('You clicked on square '+x+','+y);
	}

	function prepareForClicks(elem,x,y) {
		if (!elem) return;
		elem.addEventListener("click",function(){clickAction(x,y);});
	}

	function xyToId(x,y) {
		return 'x'+x+'y'+y;
	}

	function makeTable(w,h) {
		var table = document.createElement('table');
		table.setAttribute('id','checkerboard');

		var tr, td;
		for (var row = 0; row<h; row++) {
			tr = document.createElement('tr');
			table.appendChild(tr);
			for (var col = 0; col<w; col++) {
				td = document.createElement('td');
				td.id = xyToId(col,row);

				prepareForClicks(td,col,row);
				tr.appendChild(td);
				isBlack = (row%2 == col%2);
				td.classList.add(isBlack? 'odd': 'even');

			}
		}
		return table;
	}

	function Checkerboard() { //CTOR
		var table = makeTable(8,8);
		document.body.appendChild(table);

		this.board = table;

		this.drawChecker = function(x,y,drawFn) {
			var sqr = document.getElementById(xyToId(x,y));
			return (sqr && drawFn(sqr));
		}
	}

	return Checkerboard;
}();


// Misc ways to make a checker:

// Raw html:
function drawChecker1(sqr) {
	sqr.innerHTML = 'o';
	sqr.classList.add('textChecker');
}

// Text node:
function drawChecker2(sqr) {
	sqr.classList.add('textChecker');
	sqr.appendChild(document.createTextNode('o'));
}

// Text replacement:
function drawChecker3(sqr) {
	sqr.classList.add('textChecker');
	sqr.appendChild(document.createTextNode(''));
	sqr.firstChild.nodeValue = 'o';
}

// CSS-generated text:
function drawChecker4(sqr) {
	sqr.classList.add('cssTextChecker');
}

// Image element:
function drawChecker5(sqr) {
	var img = document.createElement('img');
	img.src = "BlueDot.png";
	sqr.appendChild(img);
}

// CSS-generated image:
function drawChecker6(sqr) {
	sqr.classList.add('cssImgChecker');
}


function doStuff() {
	var cb = (window.checkerboard = new Checkerboard());

	cb.drawChecker(0,0,drawChecker1);
	cb.drawChecker(1,0,drawChecker2);
	cb.drawChecker(2,0,drawChecker3);
	cb.drawChecker(3,0,drawChecker4);
	cb.drawChecker(4,0,drawChecker5);
	cb.drawChecker(5,0,drawChecker6);

}

window.addEventListener('load',doStuff);
