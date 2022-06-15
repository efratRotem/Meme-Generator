'use strict'

var gCanvasImg
var gCtxImg

function onInit(){
    gCanvasImg = document.querySelector('.layer1-canvas')
    gCtxImg = gCanvasImg.getContext('2d')
}

function getCanvasImg() {
    return gCanvasImg
}

function getCtxImg() {
    return gCtxImg
}