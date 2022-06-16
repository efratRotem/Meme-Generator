'use strict'

function onChangeFontSize(diff){
    var meme = getMeme()
    meme.lines[meme.selectedLineIdx].size += diff
    renderMeme()
}

function onSetColor(ev){
    var meme = getMeme()
    meme.lines[meme.selectedLineIdx].color = ev.target.value
    renderMeme()
}