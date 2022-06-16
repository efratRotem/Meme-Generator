'use strict'

var gCanvasText
var gCtxText
var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
}

function renderMeme() {
    const memeImg = getMemeImg(gMeme.selectedImgId)
    const memeTextLine = getMemeTextLine(gMeme.selectedLineIdx)
    // Get image-layer - the image canvas
    const canvas = getCanvas()
    const ctx = getCtx()
    console.log('memeImg:', memeImg)
    var img = new Image()
    img.src = memeImg.url
    img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
    }
    //Get text-layer - the text canvas
    gCanvasText = document.getElementById('text-layer')
    gCtxText = gCanvasText.getContext('2d')
    //Clearing former text
    _clearCanvas()
    //Drawing new text
    drawText(gCtxText, memeTextLine, 50, 50)
}

// Putting text on maim-container as a canvas layer
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

function _clearCanvas() {
    gCtxText.clearRect(0, 0, gCanvasText.width, gCanvasText.height);
}