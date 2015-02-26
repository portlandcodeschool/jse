function Checkerboard(container) {
	var numRows = 8;
	var numCols = 8;
	if (typeof container === 'string') {
		container = document.getElementById(container);
	}

	this.el = function() {
		return container;
	}

	function doClick(evt) {
		//console.log(evt.clientX + ',' + evt.clientY);
		//console.log(this.id);
		window.lastEvent = evt;
		
		var txt = this.firstChild;
		if (txt)
			console.log(txt.nodeValue);
		this.classList.add('hilight');
	}

	this.render = function() {
		container.innerHTML = '';
		
		var tab = document.createElement('table');
		tab.classList.add('grid');

		for (var r=0, i=0; r<numRows; ++r) {
			var tr = document.createElement('tr');
			tab.appendChild(tr);
			for (var c=0; c<numCols; ++c, ++i) {
				var td = document.createElement('td');
				td.setAttribute('id','n'+i);
				td.classList.add('square');
				td.classList.add(((r+c)%2)?'odd':'even');
				td.onclick = doClick;
				tr.appendChild(td);
			}
		}
		container.appendChild(tab);
	}

	/* Version 1
	function putChecker(where,letter) {
		var td = document.getElementById('n'+where);
		// either:
		var txt = document.createTextNode(letter);
		td.appendChild(txt);
		// OR
		// td.innerHTML = letter;
		td.classList.add('textChecker');
	}

	this.populate = function() {
		var xAt = [0,2,4,6,9,11,13,15];
		var oAt = [48,50,52,54,57,59,61,63];
		xAt.forEach(function(num) {
			putChecker(num,'X');
		})
		oAt.forEach(function(num) {
			putChecker(num,'O');
		})
	}
	*/

	// Version 2:
	function putChecker(td,letter) {
		// either:
		var txt = document.createTextNode(letter);
		td.appendChild(txt);
		// OR
		// td.innerHTML = letter;
		td.classList.add('textChecker');
	}

	this.populate = function() {
		var evens = document.getElementsByClassName('even');
		for (var i = 0; i<evens.length; ++i) {
			if (i<8) putChecker(evens[i],'X');
			else if (i>=24) putChecker(evens[i],'O');
		}
	}
}


