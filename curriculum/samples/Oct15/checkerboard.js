function makeBoard() {
	var $tab,$row,$cell;
	$tab = $('<table>')
				.attr('id','checkerboard')
				.appendTo('body');

	for (var i=0; i<8; i++) {
		$row = $('<tr>').appendTo($tab);
		for (var j=0; j<8; j++) {
	    	$cell = $('<td>')
	    		.addClass((i%2==j%2)?'odd':'even')
	    		.appendTo($row);
	  	}
	}
}

$(makeBoard);
