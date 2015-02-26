var board;
function doStuff() {
	board = new Checkerboard('checkerboard');
	board.render();
	board.populate();

	
}

window.onload = doStuff;
