'use strict'

function renderGallery() {
    const imgs = getImages()

    var strHTML = ''

    imgs.map(img => {
        strHTML += `<img src="img/${img.id}.jpg" alt="gallery-image" class="img img${img.id}"> \n`
    })

console.log('strHTML:',strHTML)

    var elGallery = document.querySelector('.gallery-container')
    elGallery.innerHTML = strHTML
}
