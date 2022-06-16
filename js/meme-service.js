'use strict'

var gLines = [
    {
        txt: 'I sometimes eat Falafel',
        size: 45,
        align: 'left',
        color: 'red',
        font: 'Impact'
    }
]

var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] }];

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
}

function getMeme(imgId, lineIdx) {
    gMeme.selectedImgId = imgId
    gMeme.selectedLineIdx = lineIdx
    return gMeme
}

function getMemeImg(imgId) {
    return gImgs.find(img => img.id === imgId)
   
}

function getMemeTextLine(lineIdx) {
    return gLines[lineIdx]
}