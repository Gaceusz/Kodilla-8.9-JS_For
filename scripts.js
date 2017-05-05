function drawStar(j, star) {
	var element = "";
	for (var i = 1; i <= j; i++) {
		element = element.concat(star);
	}
	return element;
}

function drawTree(y) {
	for (var i = 1; i <= y; i++) {
		console.log(drawStar(" ") + drawStar(i, "*"))
	}
}

drawTree(5); 