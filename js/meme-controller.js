'use strict'

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Your text comes here 1',
            size: 45,
            font: 'Impact',
            align: 'left',
            color: 'white',
            isSelected: true,
            startTextYCord: 50
        },
        {
            txt: 'Your text comes here',
            size: 45,
            font: 'Impact',
            align: 'left',
            color: 'white',
            isSelected: false,
            startTextYCord: 450
        }

    ]

}

var gSelection = 1

function renderMeme() {

    console.log('gMeme:', gMeme)
    const canvas = getCanvas()
    const ctx = getCtx()

    // ctx.clearRect(0, 0, canvas.width, canvas.height)

    const memeImg = getMemeImg(gMeme.selectedImgId)
    //Render image
    // var img = new Image()
    // img.src = memeImg.url
    // img.onload = () => {
    //     ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
    // }
    var elImg = document.querySelector(`.img${gMeme.selectedImgId}`)
    ctx.drawImage(elImg, 0, 0, canvas.width, canvas.height)

    //Render text
    gMeme.lines.map((memeLine, idx) => {
        ctx.lineWidth = 2
        ctx.font = `${memeLine.size}px ${memeLine.font}`
        ctx.fillStyle = memeLine.color
        ctx.strokeStyle = 'black'

        //Align the text accordingly to user choice
        var startTextXCord = getXCord()
        var startTextYCord = memeLine.startTextYCord

        // if (idx === 0) startTextYCord = 50
        // else if (idx === 1) startTextYCord = 450
        // else startTextYCord = 250

        ctx.fillText(memeLine.txt, startTextXCord, startTextYCord)
        ctx.strokeText(memeLine.txt, startTextXCord, startTextYCord)

        // Drawing rectangle to focus on chosen line
        if (memeLine.isSelected) {
            drawRect(0, startTextYCord - 50)
        }

    })
}

function drawRect(x, y) {
    const ctx = getCtx()

    ctx.beginPath();
    ctx.rect(x, y, 500, 70);
    ctx.strokeStyle = 'black';
    ctx.stroke();
}

function getMeme() {
    return gMeme
}

//Catching <input> - the text line the user is entering
function getLineTxt() {
    var elLineTxt = document.getElementById('text-line')
    return elLineTxt
}


function onChangeInput(ev) {
    gMeme.lines[gMeme.selectedLineIdx].txt = ev.target.value
    renderMeme()
}

function onSwitchLines() {

    gMeme.selectedLineIdx = gSelection

    gMeme.lines.map((line, idx) => {
        line.isSelected = (idx === gSelection) ? true : false
    })

    const elTextLine = document.getElementById('text-line')
    elTextLine.value = gMeme.lines[gMeme.selectedLineIdx].txt
    // elTextLine.focus()

    //Draw focus on text line above canvas

    if (gMeme.lines[gSelection].isSelected) drawRect(0, 50 * (gSelection * 8))
    renderMeme()
    gSelection++
    if (gSelection === gMeme.lines.length) gSelection = 0
    console.log('gMeme.lines.length:', gMeme.lines.length)
    console.log('gSelection:', gSelection)
}

function getXCord() {
    var startTextFrom
    const canvas = getCanvas()
    const ctx = getCtx()

    let text = ctx.measureText(gMeme.lines[gMeme.selectedLineIdx].txt)

    switch (gMeme.lines[gMeme.selectedLineIdx].align) {
        case 'left':
            startTextFrom = 10
            break;
        case 'center':
            startTextFrom = canvas.width / 2 - text.width / 2
            break;
        case 'right':
            startTextFrom = canvas.width - text.width
            break;
    }
    return startTextFrom
}