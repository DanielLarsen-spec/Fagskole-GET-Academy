updateView();
function updateView(){
document.getElementById('app').innerHTML = /*HTML*/`
<div id="mainDiv" style="background-color: rgb(${redLevel}, ${greenLevel}, ${blueLevel})">0</div>
<div>Grønn:</div>
<button onclick="changeColors(0, 25,0)">+</button>
<button onclick="changeColors(0, -25,0)">-</button>
<div>Blå:</div>
<button onclick="changeColors(0, 0, 25)">+</button>
<button onclick="changeColors(0, 0, -25)">-</button>
<div>Rød:</div>
<button onclick="changeColors(25, 0, 0)">+</button>
<button onclick="changeColors(-25, 0, 0)">-</button>

`;
}

