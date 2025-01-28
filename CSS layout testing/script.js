showPictureUpperLeft();
function showPictureUpperLeft() {
  document.getElementById("app").innerHTML = /*html*/ `
    <h1 class="header">Flytt rundt på Wayne Rooney!</h1>
    
    <div class="container">
        <div>
            <img src="img/Rooney.jpg">
        </div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    
    <div class="buttons">
    <div></div>
    <button disable>▲</button>
    <div></div>
    <button disable>◀</button>
    <div></div>
    <button onclick="showPictureUpperRight()">▶</button>
    <div></div>
    <button onclick="showPictureDownLeft()">▼</button>
    </div>
    
    `;
}

function showPictureUpperRight(){
document.getElementById('app').innerHTML = /*HTML*/`

<div class="container">
<div>
</div><div>
<img src="img/Rooney.jpg">
</div>

<div></div>
<div></div>
</div>

<div class="buttons">
<div></div>
<button disable>▲</button>
<div></div>
<button onclick="showPictureUpperLeft()">◀</button>
<div></div>
<button>▶</button>
<div></div>
<button onclick="showPictureDownRight()">▼</button>
</div>
`;
}

function showPictureDownLeft(){
    document.getElementById('app').innerHTML = /*HTML*/`

    <div class="container">
    <div></div>
    <div>
    </div><div>
    
    <img src="img/Rooney.jpg">
    </div>
    
    <div>
    
    </div>
    </div>
    
    <div class="buttons">
    <div></div>
    <button onclick="showPictureUpperLeft()">▲</button>
    <div></div>
    <button disable>◀</button>
    <div></div>
    <button onclick="showPictureDownRight()">▶</button>
    <div></div>
    <button disable>▼</button>
    </div>
    `; 
}

function showPictureDownRight(){
    document.getElementById('app').innerHTML = /*HTML*/`

    <div class="container">
    <div>
    </div><div>
    </div>
    
    <div></div>
    <div>
    <img src="img/Rooney.jpg">
    
    </div>
    </div>
    
    <div class="buttons">
    <div></div>
    <button onclick="showPictureUpperRight()">▲</button>
    <div></div>
    <button onclick="showPictureDownLeft()">◀</button>
    <div></div>
    <button>▶</button>
    <div></div>
    <button>▼</button>
    </div>
    `;
}





















