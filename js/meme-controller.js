'use strict'

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Your text comes here',
            size: 45,
            font: 'Impact',
            align: 'left',
            color: 'white',
            isSelected: true
        },
        {
            txt: 'Your text comes here',
            size: 45,
            font: 'Impact',
            align: 'left',
            color: 'white',
            isSelected: false
        }

    ]

}

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
        ctx.fillText(memeLine.txt, 50, 50 * (idx * 8 + 1))
        ctx.strokeText(memeLine.txt, 50, 50 * (idx * 8 + 1))


        if (memeLine.isSelected) drawRect(0, 50 * (idx * 8) + 5)

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

    var selectedIdx
    var unselectedIdx

    if (gMeme.selectedLineIdx === 0) {
        selectedIdx = 1
        unselectedIdx = 0
    } else {
        selectedIdx = 0
        unselectedIdx = 1
    }

    gMeme.lines[selectedIdx].isSelected = true
    gMeme.lines[unselectedIdx].isSelected = false
    gMeme.selectedLineIdx = selectedIdx

    const elTextLine = document.getElementById('text-line')
    elTextLine.value = gMeme.lines[gMeme.selectedLineIdx].txt
    // elTextLine.focus()

    //Draw focus on text line above canvas

    if (gMeme.lines[selectedIdx].isSelected) drawRect(0, 50 * (selectedIdx * 8))
    renderMeme()
}
