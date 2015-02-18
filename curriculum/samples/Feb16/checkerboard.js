
function Checkerboard(container) {
	var numRows = 8;
	var numCols = 8;
	if (typeof container === 'string') {
		container = document.getElementById(container);
	}
	if (!(container instanceof HTMLElement)) {
		return {}
	}
	this.el = function() {
		return container;
	};
	
	this.render = function() {
		//this.el()
		container.innerHTML = '';
		/*
		var str = '<table>';
		for (var r=0; r<numRows; ++r) {
			str+= '<tr></tr>';
		}
		str+='</table>';
		container.innerHTML = str;
		*/
		
		var tab = document.createElement('table');
		var i =0;
		for (var r=0; r<numRows; ++r) {
			var tr = document.createElement('tr');
			tab.appendChild(tr);
			for (var c=0; c<numCols; ++c) {
				i++;
				var td = document.createElement('td');
				//td.setAttribute('id',String('n'+ numCols*r + c));
				td.setAttribute('id',String('n'+ i));
				tr.appendChild(td);
			}
		}
		container.appendChild(tab);
	}
	
}

var board;
function doStuff() {
	//board = new Checkerboard(document.body);
	//console.log(board.el() === document.body);
	
	board = new Checkerboard('checkerboard');
	console.log(board.el());
	board.render();
}

window.onload = doStuff;
