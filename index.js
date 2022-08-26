let pacman = document.getElementById('test');
document.onkeydown = move
var speed = 10, // the box will move by 10 pixels on every step
    xPos = 0,
    yPos = 0;

function move(event) {
    console.log(event.keyCode);
    if (event.keyCode == 37) {
        xPos -= speed;
        pacman.style.left = xPos + 'px'
    } else if (event.keyCode == 39) {
        xPos += speed;
        pacman.style.left = xPos + 'px'
    } else if (event.keyCode == 40) {
        yPos += speed;
        pacman.style.top = yPos + 'px'
    } else if (event.keyCode == 38) {
        yPos -= speed;
        pacman.style.top = yPos + 'px'
    }
}