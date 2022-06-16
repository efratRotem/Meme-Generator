'use strict'

var gCanvas
var gCtx

function onInit() {
    gCanvas = document.getElementById('img-layer')
    gCtx = gCanvas.getContext('2d')
}

function getCanvas() {
    return gCanvas
}

function getCtx() {
    return gCtx
}
