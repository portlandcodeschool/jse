function Checkerboard(container) {
	var numRows = 8;
	var numCols = 8;
	if (typeof container === 'string') {
		container = document.getElementById(container);
	}

	this.el = function() {
		return container;
	}

	this.render = function() {
		container.innerHTML = '';
		
		var tab = document.createElement('table');

		for (var r=0, i=0; r<numRows; ++r) {
			var tr = document.createElement('tr');
			tab.appendChild(tr);
			for (var c=0; c<numCols; ++c, ++i) {
				var td = document.createElement('td');
				td.setAttribute('id','n'+i);
				td.classList.add(((r+c)%2)?'odd':'even');
				tr.appendChild(td);
			}
		}
		container.appendChild(tab);
	}

}

var board;
function doStuff() {
	board = new Checkerboard('checkerboard');
	board.render();
}

window.onload = doStuff;

