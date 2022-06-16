'use strict'
var gLines = [
    {
        txt: 'I sometimes eat Falafel',
        size: 20,
        align: 'left',
        color: 'red'
    }
]

var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] }];

var gMeme = {
    selectedImgId,
    selectedLineIdx,
}

function getMeme(imgId, lineIdx) {
    gMeme.selectedImgId = imgId
    gMeme.selectedLineIdx = lineIdx
    return gMeme
}

function getSelectedImg(imgId) {
    return gImgs.find(img => {
        img.id === imgId
    })
}

function getSelectedLine(lineIdx) {
    return gImgs.findIndex((line, idx) => {
        idx === lineIdx
    })
}