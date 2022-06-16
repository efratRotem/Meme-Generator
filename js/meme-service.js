'use strict'

var gImgIdx = 1
var gImgs = [
    { id: gImgIdx++, url: 'img/1.jpg', keywords: ['funny', 'cat'] },
    { id: gImgIdx++, url: 'img/2.jpg', keywords: ['funny', 'cat'] },
    { id: gImgIdx++, url: 'img/3.jpg', keywords: ['funny', 'cat'] }

];


function getImages() {
    return gImgs
}

function getMemeImg(imgId=1) {
    return gImgs.find(img => img.id === imgId)

}

// function getMemeTextLine(lineIdx) {
//     _setLineTxt()
//     return gLines[lineIdx]
// }

// //Get the text inside <input> and update gLines accordingly
// function _setLineTxt() {
//     var lineTxt = getLineTxt()
//     gLines[0].txt = (lineTxt.value) ? lineTxt.value : lineTxt.placeholder
// }


