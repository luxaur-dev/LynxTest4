// Конвертирует исходную позицию в массив координат
function posConverter(event) {
	let str = event.target.id;
	let position = [str.toUpperCase().charCodeAt(0) - 64, parseInt(str.charAt(1))];
	document.getElementById(str).classList.toggle("blue");
	//console.log("str is: " + str);
	//console.log("click: " + event.target.id);
	//console.log("position is: " + position);
	chessKnight(position);
}
