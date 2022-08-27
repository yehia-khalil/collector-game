let pacman = document.getElementById('test');
document.onkeydown = move
let speed = 10, // the box will move by 10 pixels on every step
    xPos = 0,
    yPos = 0;
let moves = {
    37: () => { //left
        xPos -= speed;
        pacman.style.left = xPos + 'px'
        pacman.style.cssText += "-moz-transform: scale(-1, 1);-webkit-transform: scale(-1, 1);-o-transform: scale(-1, 1);-ms-transform: scale(-1, 1);transform: scale(-1, 1);"
    },
    39: () => { //right
        xPos += speed;
        pacman.style.left = xPos + 'px'
        pacman.style.transform = '';
    },
    40: () => { //up
        yPos += speed;
        pacman.style.top = yPos + 'px'
        pacman.style.transform = 'rotate(+0.25turn)';
    },
    38: () => { //down
        yPos -= speed;
        pacman.style.top = yPos + 'px'
        pacman.style.transform = 'rotate(-0.25turn)';
    }
}
function move(event) {
    moves[event.keyCode]();
}