'use strict'

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Enter your text here',
            size: 45,
            align: 'left',
            color: 'red',
            font: 'Impact'
        }
    ]

}

function renderMeme() {
    console.log('gMeme:',gMeme)
    const canvas = getCanvas()
    const ctx = getCtx()

    const memeImg = getMemeImg(gMeme.selectedImgId)
    console.log('memeImg:', memeImg)
    //Render image
    // var img = new Image()
    // img.src = memeImg.url
    // img.onload = () => {
    //     ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
    // }
    var elImg = document.querySelector(`.img${gMeme.selectedImgId}`)
    console.log('elImg:',elImg)
    ctx.drawImage(elImg, 0, 0, canvas.width, canvas.height)
    //Render text
    const memeLine = gMeme.lines[gMeme.selectedLineIdx]
    ctx.lineWidth = 2
    ctx.font = `${memeLine.size}px ${memeLine.font}`
    ctx.fillStyle = memeLine.color
    ctx.strokeStyle = 'black'
    ctx.fillText(memeLine.txt, 50, 50)
    ctx.strokeText(memeLine.txt, 50, 50)
}

function getMeme() {
    return gMeme
}

//Catching <input> - the text line the user is entering
function getLineTxt() {
    var elLineTxt = document.getElementById('first-line')
    return elLineTxt
}

function onAddText() {
    drawText()
}

function onChangeInput(ev) {
    gMeme.lines[gMeme.selectedLineIdx].txt = ev.target.value
    renderMeme()
}

