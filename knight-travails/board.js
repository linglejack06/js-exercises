class Move {
  constructor(x, y, distance, arr = []) {
    this.x = x;
    this.y = y;
    this.distance = distance;
    this.path = arr
  }
  isValid() {
    if (this.x > 0 && this.x < 7 && this.y > 0 && this.x < 7) return true;
    return false;
  }
}
class Board {
  constructor() {
    this.q = [];
    this.xOptions = [-2, -1, 1, 2, -2, -1, 1, 2];
    this.yOptions = [-1, -2, -2, -1, 1, 2, 2, 1];
  }
  stepsToTarget(startPos, targetPos) {
    let startMove = new Move(startPos[0], startPos[1], 0, [[startPos[0], startPos[1]]]);
    let visited = new Array(8);
    for (let i = 0; i < 8; i++) {
      visited[i] = new Array(8);
      for (let j = 0; j < 8; j++) {
        visited[i][j] = false;
      }
    }
    this.q.push(startMove);
    while(this.q.length !== 0) {
      let currentMove = this.q.shift();
      if (currentMove.x === targetPos[0] && currentMove.y === targetPos[1]) {
        return currentMove;
      }
      for (let i = 0; i < 8; i++) {
        let x = currentMove.x + this.xOptions[i];
        let y = currentMove.y + this.yOptions[i];
        let possibleMove = new Move(x, y, currentMove.distance + 1);
        if(possibleMove.isValid() && !visited[x][y]) {
          // spreads previous array into new path
          possibleMove.path = [ ...currentMove.path, [x, y]];
          this.q.push(possibleMove);
          visited[x][y] = true;
        }
      }
    }
  }
  printSteps(start, target) {
    let finalMove = this.stepsToTarget(start, target);
    console.log(`It took ${finalMove.distance} steps to reach ${target}`);
    finalMove.path.forEach((move) => console.log(move))
  }
};
let board = new Board();
board.printSteps([0,0], [3,3])
