'use strict'

function renderGallery() {
    const imgs = getImages()

    var strHTML = ''

    imgs.map(img => {
        strHTML += `<img src="img/${img.id}.jpg" alt="gallery-image" class="img img${img.id}" onclick="onImgSelect(${img.id})"> \n`
    })
    var elGallery = document.querySelector('.gallery-container')
    elGallery.innerHTML = strHTML
}

function onImgSelect(imgId) {
    var meme = getMeme()
    meme.selectedImgId = imgId
    console.log('meme:', meme)
    // Hiding Gallery
    var elGallery = document.querySelector('.gallery-container')
    elGallery.style.display = 'none'
    //Showing Meme and editor
    var elMemeEditor = document.querySelector('.main-container')
    elMemeEditor.style.display = 'flex'
    renderMeme()
}