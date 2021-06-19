
    let td
    let tr
    let cells = []
    let snakeStack = []
    let cookieEaten = false;
    let cookieExists = false;
    let prevStack = []
    let lastDirection = "left"
    let xDimension
    let yDimension
    let milis = 120
    let changeDirection
    let draw
    let moved
    let paragraph = document.querySelector('.paragraph');
    let mainDiv = document.querySelector('.mainDiv')
    let table = document.createElement('table')
    let inputY = document.querySelector('.gridY')

    let button = document.querySelector('.lala')
    document.querySelector('.lala').addEventListener('click', init)
    mainDiv.appendChild(table)


    document.querySelector('body').addEventListener("keyup", () => {
        console.log(event.key)
        console.log(snakeStack)

        if (moved) {
            switch (event.key) {
                case 'ArrowUp':
                    if (lastDirection != 'down')
                        lastDirection = 'up'

                    break;

                case 'ArrowDown':
                    if (lastDirection != 'up')
                        lastDirection = 'down'

                    break;
                case 'ArrowLeft':
                    if (lastDirection != 'right')
                        lastDirection = 'left'

                    break;
                case 'ArrowRight':
                    if (lastDirection != 'left')
                        lastDirection = 'right'

                    break;
            }
            moved = false;
        }

    })






    function moveUp() {
        let a = snakeStack[0]

        if (a.coordY > 0) {
            snakeStack.unshift(cells[snakeStack[0].coordY - 1][snakeStack[0].coordX])
            if (!a.cookieExists) {
                last = snakeStack[snakeStack.length - 1].style.backgroundColor = "White"
                snakeStack.pop(snakeStack[snakeStack.length - 1])
            } else {
                cookieEaten = true
                a.cookieExists = false;
            }

        } else {
            snakeStack.unshift(cells[yDimension - 1][snakeStack[0].coordX])
            if (!a.cookieExists) {
                last = snakeStack[snakeStack.length - 1].style.backgroundColor = "White"
                snakeStack.pop(snakeStack[snakeStack.length - 1])
            } else {
                cookieEaten = true
                a.cookieExists = false;
            }
        }
        lastDirection = 'up'

    }

    function moveDown() {
        let a = snakeStack[0]

        if (a.coordY < yDimension - 1) {
            snakeStack.unshift(cells[snakeStack[0].coordY + 1][snakeStack[0].coordX])
            if (!a.cookieExists) {
                last = snakeStack[snakeStack.length - 1].style.backgroundColor = "White"
                snakeStack.pop(snakeStack[snakeStack.length - 1])
            } else {
                cookieEaten = true
                a.cookieExists = false;
            }

        }
        else {
            snakeStack.unshift(cells[0][snakeStack[0].coordX])
            if (!a.cookieExists) {
                last = snakeStack[snakeStack.length - 1].style.backgroundColor = "White"
                snakeStack.pop(snakeStack[snakeStack.length - 1])
            } else {
                cookieEaten = true
                a.cookieExists = false;
            }
        }
        lastDirection = 'down'

    }



    function moveLeft() {
        let a = snakeStack[0]

        if (a.coordX > 0) {
            snakeStack.unshift(cells[snakeStack[0].coordY][snakeStack[0].coordX - 1])
            if (!a.cookieExists) {
                last = snakeStack[snakeStack.length - 1].style.backgroundColor = "White"
                snakeStack.pop(snakeStack[snakeStack.length - 1])
            } else {
                cookieEaten = true
                a.cookieExists = false;
            }

        } else {
            snakeStack.unshift(cells[snakeStack[0].coordY][yDimension - 1])
            if (!a.cookieExists) {
                last = snakeStack[snakeStack.length - 1].style.backgroundColor = "White"
                snakeStack.pop(snakeStack[snakeStack.length - 1])
            } else {
                cookieEaten = true
                a.cookieExists = false;
            }
        }
        lastDirection = 'left'

    }

    function moveRight() {
        let a = snakeStack[0]

        if (a.coordX < xDimension - 1) {
            snakeStack.unshift(cells[snakeStack[0].coordY][snakeStack[0].coordX + 1])
            if (!a.cookieExists) {
                last = snakeStack[snakeStack.length - 1].style.backgroundColor = "White"
                snakeStack.pop(snakeStack[snakeStack.length - 1])
            } else {
                cookieEaten = true
                a.cookieExists = false;
            }

        } else {
            snakeStack.unshift(cells[snakeStack[0].coordY][0])
            if (!a.cookieExists) {
                last = snakeStack[snakeStack.length - 1].style.backgroundColor = "White"
                snakeStack.pop(snakeStack[snakeStack.length - 1])
            } else {
                cookieEaten = true
                a.cookieExists = false;
            }
        }
        lastDirection = 'right'

    }



    function paintBoxesInSnake() {
        snakeStack[0].style.backgroundColor = "black"
        for (i = 1; i < snakeStack.length; i++) {
            snakeStack[i].style.backgroundColor = "Red"
            console.log("arr")
        }
    }

    function generateCookie() {
        done = false
        do {
            let x = Math.floor((Math.random() * xDimension))
            let y = Math.floor((Math.random() * yDimension))
            if (!snakeStack.includes(cells[y][x])) {
                console.log(x, y)
                cells[y][x].style.backgroundColor = "Green"
                cells[y][x].cookieExists = true;
                done = true
            }
        } while (!done)
    }


    function checkLost() {
        for (i = 1; i < snakeStack.length; i++) {
            prevStack[i - 1] = snakeStack[i]
        }
        if (prevStack.includes(snakeStack[0])) {
            clearInterval(changeDirection)
            clearInterval(draw)
            button.style.display = "inline"
            document.querySelector(".info").style.display="inline";
            inputY.style.display = "inline"
            alert("you lost")

        }



    }


    function init() {
        yDimension = inputY.value;
        xDimension = yDimension;
        cells = []
        snakeStack = []
        prevStack = []
        table = null
        mainDiv.removeChild(mainDiv.childNodes[1])
        table = document.createElement('table')
        mainDiv.appendChild(table)
        for (i = 0; i < yDimension; i++) {
            tr = document.createElement('tr')
            table.appendChild(tr)
            cells.push([]);
            for (j = 0; j < xDimension; j++) {
                td = document.createElement('td')
                td.coordY = i;
                td.coordX = j;
                cells[i].push(td)
                tr.appendChild(td)
                console.log()
            }

        }
        button.style.display = "none"
        document.querySelector(".info").style.display="none";
        inputY.style.display = "none"
        clearInterval(changeDirection)
        clearInterval(draw)
        console.log("a")
        for (i = 0; i < yDimension; i++) {

            for (j = 0; j < xDimension; j++) {
                cells[i][j].cookieExists = false
                cells[i][j].style.backgroundColor = "White"
            }
        }


        snakeStack.push(cells[Math.floor(yDimension / 2)][Math.floor(xDimension / 2)])
        snakeStack.push(cells[Math.floor(yDimension / 2)][Math.floor(xDimension / 2) - 1])

        last = snakeStack[snakeStack.length - 1]
        lastDirection = "left"
        console.log(snakeStack)
        paintBoxesInSnake();
        generateCookie()
        directionInterval()
        drawInterval()



    }
    let pauseBtn = document.querySelector('.pause')

    let paused = false


    pauseBtn.addEventListener('click', () => {
        if (!paused) {
            clearInterval(changeDirection)
            clearInterval(draw)
            pauseBtn.innerHTML = "Unpause"
            paused = true
        } else {
            directionInterval()
            drawInterval()
            pauseBtn.innerHTML = "Pause"
            paused = false
        }


    })
    let minusBtn = document.querySelector('.minus')
    minusBtn.addEventListener('click', () => {
        if (milis > 10) {
            milis += 20
            clearInterval(changeDirection)
            clearInterval(draw)
            directionInterval()
            drawInterval()
        }
    })
    let plusBtn = document.querySelector('.plus')
    plusBtn.addEventListener('click', () => {
        if (milis < 200) {
            milis += -20
            clearInterval(changeDirection)
            clearInterval(draw)
            directionInterval()
            drawInterval()
        }
    })
    function directionInterval() {
        changeDirection = setInterval(function () {
            switch (lastDirection) {
                case 'left': moveLeft();
                    break;
                case 'right': moveRight();
                    break;
                case 'up': moveUp();
                    break;
                case 'down': moveDown();
                    break;
            }
            moved = true;
        }, milis)
    }
    function drawInterval() {
        draw = setInterval(function () {
            paintBoxesInSnake();
            if (cookieEaten) {
                generateCookie();
                cookieEaten = false;
            }
            checkLost();
        }, 50)
    }