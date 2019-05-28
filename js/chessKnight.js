// Принимает массив координат и возвращает 2 массива с возможными позициями
function chessKnight(...arr) {
	 //Размерность доски
  let Board = 8;
  
	 //Исходная позиция коня
  let xPos = arr[0][0];
  let yPos = arr[0][1];
  
	 //Все возможные ходы конем
  let xMove = [2, 1, -1, -2, -2, -1, 1, 2];
  let yMove = [1, 2, 2, 1, -1, -2, -2, -1];
  
   //Верный ход
  let xGood = [];
  let yGood = [];
	
  for (let i=0; i<=8; i++) {
  	let x = xPos + xMove[i];
    let y = yPos + yMove[i];
    if (x > 0 && y > 0 && x <= Board && y <= Board) {
    	xGood.push(x);
    	yGood.push(y);
    }
  }
  posReturn(xGood, yGood);
}