updateView();
function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/`
        <h1>Memory game</h1>
        <div id="picBox" class="container">
            <div onclick="drawPictures()"><img class="card_hidden" src="Memorygame/img/bilde1.jpg"></div>
            <div onclick="drawPictures()"><img class="card_hidden" src="Memorygame/img/bilde2.jpg"></div>
            <div onclick="drawPictures()"><img class="card_hidden" src="Memorygame/img/bilde3.jpg"></div>
            <div onclick="drawPictures()"><img class="card_hidden" src="Memorygame/img/bilde1.jpg"></div>
            <div onclick="drawPictures()"><img class="card_hidden" src="Memorygame/img/bilde2.jpg"></div>
            <div onclick="drawPictures()"><img class="card_hidden" src="Memorygame/img/bilde3.jpg"></div>
        </div>
    `;
             



}

function drawPictures(showPic){
    document.getElementById('picBox').innerHTML = /*HTML*/`
        
    `;    

 
    

}
    
function win(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <div>Gratulerer, du vant</div>
    `;
}