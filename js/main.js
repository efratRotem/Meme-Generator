'use strict'

var gCanvas
var gCtx

function onInit() {
    gCanvas = document.querySelector('.meme-canvas')
    gCtx = gCanvas.getContext('2d')
    renderGallery()
    renderMeme()
}

function getCanvas() {
    return gCanvas
}

function getCtx() {
    return gCtx
}
