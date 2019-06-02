// Конвертирует исходную позицию в массив координат

document.getElementById("chessboard").addEventListener('click', posConverter);

function posConverter(event) {
	const str = event.target.id;
	const convertedLetter = str.toUpperCase().charCodeAt(0) - 64;
	const posNumber = parseInt(str.charAt(1));

	let startPositionArr = [];

	startPositionArr.push(convertedLetter, posNumber);

	chessKnight(startPositionArr);
}


