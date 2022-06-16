'use strict'

function renderMeme() {
    var elImgContainer = document.querySelector('.img-container')
    elImgContainer.style.height = 500
    elImgContainer.style.width = 500
    elImgContainer.style.backgroundImage = 'url(/img/1.jpg)'
    // elImgContainer.innerText = 'url(/img/1.jpg)'
    console.log('render');

    var text = 'Enter your text here'
    drawText(text, 50, 50)
}

function drawText(text, x, y) {
    var ctx = getCtxText()
    console.log('ctx:', ctx)
    ctx.lineWidth = 2
    ctx.font = '50px Impact'
    ctx.fillStyle = 'white'
    ctx.strokeStyle = 'black'
    ctx.fillText(text, x, y)//Draws (fills) a given text at the given (x, y) position.
    ctx.strokeText(text, x, y)//Draws (strokes) a given text at the given (x, y) position.
}


// function renderMeme() {
//     var img = new Image()
//     img.src = 'img/1.jpg'

//     var canvas = getCanvasImg()
//     var ctx = getCtxImg()

//     img.onload = () => {
//         ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
//     }

//     canvas = document.querySelector('.canvas-layer2')
//     ctx = gCanvasImg.getContext('2d')
//     drawLineOfText(10, 50, ctx)
// }

// function drawLineOfText(x, y, ctx) {
//     ctx.beginPath()
//     ctx.rect(x, y, 450, 75)
//     ctx.fillStyle = 'red'
//     ctx.fillRect(x, y, 400, 75)
// }