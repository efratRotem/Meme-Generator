'use strict'


function renderMeme() {
    var img = new Image()
    img.src = 'img/1.jpg'

    var canvas = getCanvasImg()
    var ctx = getCtxImg()

    img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
    }

    canvas = document.querySelector('.layer2-canvas')
    ctx = gCanvasImg.getContext('2d')
    drawLineOfText(10, 50, ctx)
}

function drawLineOfText(x, y, ctx) {
    ctx.beginPath()
    ctx.rect(x, y, 450, 75)
    ctx.fillStyle = 'red'
    ctx.fillRect(x, y, 400, 75)
}