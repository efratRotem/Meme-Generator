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



function getMemeImg(imgId) {
    return gImgs.find(img => img.id === imgId)

}

function getMemeTextLine(lineIdx) {
    _setLineTxt()
    return gLines[lineIdx]
}

//Get the text inside <input> and update gLines accordingly
function _setLineTxt() {
    var lineTxt = getLineTxt()
    gLines[0].txt = (lineTxt.value) ? lineTxt.value : lineTxt.placeholder
}

function onchangeInput(el) {
    console.log('el:',el)
}