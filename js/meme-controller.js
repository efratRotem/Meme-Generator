'use strict'

var gCanvasText
var gCtxText

function renderMeme() {
    // var meme = getMeme(1, 0)
    var memeImg = getMemeImg(1)
    var memeTextLine = getMemeTextLine(0)
    var canvas = getCanvas()
    var ctx = getCtx()
    console.log('memeImg:', memeImg)
    var img = new Image()
    img.src = memeImg.url
    img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
    }

    gCanvasText = document.getElementById('text-layer')
    gCtxText = gCanvasText.getContext('2d')

    drawText(gCtxText, memeTextLine, 50, 50)

    console.log('render');
}

function drawText(layer, textLine, x, y) {
    var ctx = layer
    console.log('ctx:', ctx)
    ctx.lineWidth = 2
    ctx.font = `${textLine.size}px ${textLine.font}`
    ctx.fillStyle = 'white'
    ctx.strokeStyle = 'black'
    ctx.fillText(textLine.txt, x, y)//Draws (fills) a given text at the given (x, y) position.
    ctx.strokeText(textLine.txt, x, y)//Draws (strokes) a given text at the given (x, y) position.
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