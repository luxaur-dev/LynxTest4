// Обработка кликов по полю

document.getElementById("chessboard").addEventListener('click', clickHandler);

let lastClick;
let previousPossibleMovesArr = [];

function clickHandler(e) {
    const clicked = e.target.id;
    const newClick = document.getElementById(clicked);

    // Первый клик выделяет ячейку, последущие отменяют выделение предыдущей
    if (lastClick === undefined) {
        newClick.classList.add('blue');
        lastClick = clicked;
    }

    else {
        document.getElementById(lastClick).classList.remove('blue');
        newClick.classList.add('blue');

        lastClick = clicked;
    }

    // Убирает выделение полей от предыдущего клика
    for (let i = 0; i < previousPossibleMovesArr.length; i++) {
        document.getElementById(previousPossibleMovesArr[i]).classList.remove('green');
    }

    // Подсвечивает возможные ходы
    for (let i = 0; i < possibleMovesArr.length; i++) {
        document.getElementById(possibleMovesArr[i]).classList.add('green');
    }

    previousPossibleMovesArr = possibleMovesArr.slice(0);
}