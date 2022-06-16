'use strict'

var gCanvasText
var gCtxText
var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
}

function renderMeme() {
    // var meme = getMeme(1, 0)
    const memeImg = getMemeImg(1)
    const memeTextLine = getMemeTextLine(0)
    const canvas = getCanvas()
    const ctx = getCtx()
    console.log('memeImg:', memeImg)
    var img = new Image()
    img.src = memeImg.url
    img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
    }

    gCanvasText = document.getElementById('text-layer')
    gCtxText = gCanvasText.getContext('2d')
    clearCanvas()
    drawText(gCtxText, memeTextLine, 50, 50)

    console.log('render');
}

// Putting text on maim-canvas as a layer
function drawText(layer, textLine, x, y) {
    const ctx = layer
    console.log('ctx:', ctx)
    ctx.lineWidth = 2
    ctx.font = `${textLine.size}px ${textLine.font}`
    ctx.fillStyle = textLine.color
    ctx.strokeStyle = 'black'
    ctx.fillText(textLine.txt, x, y)
    ctx.strokeText(textLine.txt, x, y)
}

function getMeme() {
    return gMeme
}

//Catching <input>
function getLineTxt() {
    var elLineTxt = document.getElementById('first-line')
    console.dir(elLineTxt)
    return elLineTxt
}

function clearCanvas() {
    gCtxText.clearRect(0, 0, gCanvasText.width, gCanvasText.height);
}