class Game {
    constructor (selector) {
        this.clickCount = 1;
        this.board = Array.from(document.querySelectorAll(selector));
        this.gameWon = false;
        this.gameDraw = false;
    }
    startGame() {
        this.board.forEach(function(item) {
        item.addEventListener('click', mark);
        })
    }
    increaseCount() {
        this.clickCount ++ ;
    }
    endGame() {
        this.board.forEach(function(item) {
            item.removeEventListener('click', mark);
        })
    }
}

class Player {
    constructor (playerName, signature) {
        this.playerName = playerName;
        this.signature = signature;
        this.firstRowScore = 0;
        this.secondRowScore = 0;
        this.thirdRowScore = 0;
        this.firstColScore = 0;
        this.secondColScore = 0;
        this.thirdColScore = 0;
        this.firstDiagScore = 0;
        this.secondDiagScore = 0;
    }
    increaseScore (item) {
        switch (newGame.board.indexOf(item)) {
            case 0:
                this.firstRowScore += 1;
                this.firstColScore += 1;
                this.firstDiagScore += 1;
                break
            case 1:
                this.firstRowScore += 1;
                this.secondColScore += 1;
                break
            case 2:
                this.firstRowScore += 1;
                this.thirdColScore += 1;
                this.secondDiagScore += 1;
                break
            case 3:
                this.secondRowScore += 1;
                this.firstColScore += 1;
                break
            case 4:
                this.secondRowScore += 1;
                this.secondColScore += 1;
                this.firstDiagScore += 1;
                this.secondDiagScore += 1;
                break
            case 5:
                this.thirdColScore += 1;
                this.secondRowScore += 1;
                break
            case 6:
                this.thirdRowScore += 1;
                this.firstColScore += 1;
                this.secondDiagScore += 1;
                break
            case 7:
                this.thirdRowScore += 1;
                this.secondColScore += 1;
                break
            case 8:
                this.thirdRowScore += 1;
                this.thirdColScore += 1;
                this.firstDiagScore += 1;
                break 
        }
       
    };
    checkWin() {
        for (let key in this) {
            if (this[key] === 3) {
                newGame.endGame();
                return alert(`Гравець ${this.playerName} виграв`);
            }
        }
    }
    sign(item) {
        item.classList.add(this.signature);
    }
}
const newGame = new Game('.cell');
const firstPlayer = new Player('Мішка', 'mark-x');
const secondPlayer = new Player('Їжачок', 'mark-o');
function mark () {
    if (!(this.classList.contains(firstPlayer.mark)) && !(this.classList.contains(secondPlayer.mark)))
    if (newGame.clickCount % 2 == 1) {
        firstPlayer.sign(this);
        newGame.increaseCount();
        firstPlayer.increaseScore(this);
        firstPlayer.checkWin();
    }
    else {
        secondPlayer.sign(this);
        newGame.increaseCount();
        secondPlayer.increaseScore(this);
        secondPlayer.checkWin();
    }
};
newGame.startGame();


