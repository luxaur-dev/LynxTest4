// Возвращает строку результата

let possibleMovesArr = [];

function posReturn(...arr){
  const xGood = arr[0];
  const xFinalPos = [];
  const yFinalPos = arr[1];

  possibleMovesArr = [];

  /*
  Конвертирует x-координату в буквенное значение и конкатенирует к нему y-координату,
  сохраняя массив возможных ходов
   */

  for (let i = 0; i < xGood.length; i++) {
    xFinalPos.push(String.fromCharCode(64 + xGood[i]));
    possibleMovesArr.push(xFinalPos[i] + yFinalPos[i]);
  }
}