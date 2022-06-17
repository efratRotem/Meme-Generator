'use strict'

function getSelectesIdx() {
    var meme = getMeme()
    var selectedIdx = meme.selectedLineIdx
    return selectedIdx
}

function onAdd() {
    var meme = getMeme()
    var newLine = {
        txt: 'Your text comes here',
        size: 45,
        font: 'Impact',
        align: 'left',
        color: 'white',
        isSelected: false
    }
    meme.lines.push(newLine)
    renderMeme()
}

function onDeleteLine() {
    var meme = getMeme()
    var selectedIdx = meme.selectedLineIdx
    console.log('selectedIdx:', selectedIdx)
    meme.lines.findIndex((line, idx) => {
        if (idx === selectedIdx) {
            meme.lines[idx].txt = ''
            meme.lines[idx].isSelected = false
        }
    })
    console.log('meme:', meme)
    renderMeme()
}

function onChangeFontSize(diff) {
    var meme = getMeme()
    meme.lines[meme.selectedLineIdx].size += diff
    renderMeme()
}

function onAlignment(dir) {

    var meme = getMeme()

    switch (dir) {
        case 'left':
            meme.lines[meme.selectedLineIdx].align = 'left'
            break;
        case 'center':
            meme.lines[meme.selectedLineIdx].align = 'center'
            break;
        case 'right':
            meme.lines[meme.selectedLineIdx].align = 'right'
            break;
    }
    renderMeme()
}

function onChangeFont(value = 'Impact') {

    var meme = getMeme()
    meme.lines[meme.selectedLineIdx].font = value
    renderMeme()
}

function onSetColor(ev) {
    var meme = getMeme()
    meme.lines[meme.selectedLineIdx].color = ev.target.value
    renderMeme()
}

function onDownloadImg(elLink) {
    var meme = getMeme()
    meme.lines.map(line => {
        line.isSelected = false
    })
    renderMeme()
    const elCanvas = getCanvas()
    var imgContent = elCanvas.toDataURL('image/jpeg')
    elLink.href = imgContent
}





function onShareImg() {

    var elCanvas = getCanvas()
    const imgDataUrl = elCanvas.toDataURL("image/jpeg");// Gets the canvas content as an image format

    // A function to be called if request succeeds
    function onSuccess(uploadedImgUrl) {
        //Encode the instance of certain characters in the url
        const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        console.log(encodedUploadedImgUrl);
        document.querySelector('.user-msg').innerText = `Your photo is available here: ${uploadedImgUrl}`
        //Create a link that on click will make a post in facebook with the image we uploaded
        document.querySelector('.share-container').innerHTML = `
        <a class="share" href="https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
           Share   
        </a>`
    }
    //Send the image to the server
    doUploadImg(imgDataUrl, onSuccess);
}

function doUploadImg(imgDataUrl, onSuccess) {
    //Pack the image for delivery
    const formData = new FormData();
    formData.append('img', imgDataUrl)
    //Send a post req with the image to the server
    fetch('//ca-upload.com/here/upload.php', {
        method: 'POST',
        body: formData
    })   //Gets the result and extract the text/ url from it
        .then(res => res.text())
        .then((url) => {
            console.log('Got back live url:', url);
            //Pass the url we got to the callBack func onSuccess, that will create the link to facebook
            onSuccess(url)
        })
        .catch((err) => {
            console.error(err)
        })
}
