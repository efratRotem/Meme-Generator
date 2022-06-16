'use strict'

var gCanvasText
var gCtxText

function onInit(){
    gCanvasText = document.querySelector('.canvas-layer2')
    gCtxText = gCanvasText.getContext('2d')
}

function getCanvasText() {
    return gCanvasText
}

function getCtxText() {
    return gCtxText
}
