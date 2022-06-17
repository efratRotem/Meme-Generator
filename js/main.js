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

function onGallery(){
    var elGallery = document.querySelector('.gallery-container')
    elGallery.style.display = 'grid'

    var elMemeEditor = document.querySelector('.main-container')
    elMemeEditor.style.display = 'none'
}

function onAbout(){
    alert('SHABAT at 19:27')
}