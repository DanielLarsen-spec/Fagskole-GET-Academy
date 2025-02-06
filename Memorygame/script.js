let firstCard = '';
let secondCard = '';
let firstCardId = '';
let secondCardId = '';
updateView();
function updateView() {
    createHiddenCardHtml('img1a', 'Bilder/1.png')
    createHiddenCardHtml('img2a', 'Bilder/2.png')
    createHiddenCardHtml('img3a', 'Bilder/3.jpg')
    createHiddenCardHtml('img1b', 'Bilder/1.png')
    createHiddenCardHtml('img2b', 'Bilder/2.png')
    createHiddenCardHtml('img3b', 'Bilder/3.jpg')
    ;
    console.log(document.getElementById('app'));
}

function createHiddenCardHtml(imgId, picture) {
    document.getElementById('app').innerHTML += /*HTML*/`  
        <div id="${imgId}" class="hiddenImgStyle">
            <img onclick="showCard('${imgId}', '${picture}')" class="cardHidden" src="${picture}">
        </div>
    `;
}
  
function showCard(imgId, picture){
    if(firstCard !== '' && secondCard !== ''){
        closeCards()
    }
    if(firstCard === '') {
        firstCard = picture;
        firstCardId = imgId;

    }
    else if(secondCard === '' && imgId !== firstCard) {
        secondCard = picture;
        secondCardId = imgId;

        if(firstCard === secondCard){
              
        }
    }
    document.getElementById(imgId).innerHTML = /*HTML*/`
    <img onclick="showCard('${imgId}', '${picture}')" class="cardShow" src="${picture}">
    `;
    console.log(firstCard)
    console.log(firstCardId)
    console.log(secondCard)
    console.log(secondCardId)  
}

function closeCards(){
    if(firstCard !== ''){
        document.getElementById(firstCardId).innerHTML = /*HTML*/`
        <img onclick="showCard('${firstCardId}', '${firstCard}')" class="cardHidden" src="${firstCard}">
        `; 
        document.getElementById(secondCardId).innerHTML = /*HTML*/`
        <img onclick="showCard('${secondCardId}', '${secondCard}')" class="cardHidden" src="${secondCard}">
        `; 
    }

}

function reset(){
    firstCard = '';
    secondCard = '';
    firstCardId = '';
    secondCardId = '';
}