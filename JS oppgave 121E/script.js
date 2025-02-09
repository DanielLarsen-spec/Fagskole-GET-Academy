function updateView() {
    let html = document.getElementById('board');
    html.innerHTML = "";
    drawHouses('board1');
    drawHouses('board2');
    drawHouses('board3');
    drawHouses('board4');
    squareLocation();
    drawHouseYellow();
    
    
}






function drawHouses(ID){
    addHouseGreenHtml(ID, "house green", "box", "square square-one green");
    addHouseGreenHtml(ID, "house green", "box", "square square-two green");
    addHouseGreenHtml(ID, "house green", "box", "square square-three green");
    addHouseGreenHtml(ID, "house green", "box", "square square-four green");
    addHouseYellowHtml("house yellow", "box", "square square-one yellow");
    
}





    




function addHouseGreenHtml(squareID, house, box, squares) {
  let html = document.getElementById("board");
  html.innerHTML += /*HTML*/ `
    <div class="${house}">
        <div class="${box}">
            <div id="${squareID}" class="${squares}"></div>
           
            
        </div>
    </div>
           
            `;

}

function addHouseYellowHtml(house, box, square) {
  document.getElementById("board").innerHTML += /*HTML*/ `
    <div class="${house}" style="right: 0">
    <div class="${box}">
    <div class="${square}"></div>
    <div class="square square-two yellow"></div>
    <div class="square square-three yellow"></div>
    <div class="square square-four yellow"></div>
    </div>
    </div>
    `;
}
function addHouseRedHtml() {
  document.getElementById("board").innerHTML += /*HTML*/ `
    
    <div class="house red" style="bottom: 0">
    <div class="box">
    <div class="square square-one red"></div>
    <div class="square square-two red"></div>
    <div class="square square-three red"></div>
    <div class="square square-four red"></div>
    </div>
    </div>
    `;
}
function addHouseBlueHtml() {
  document.getElementById("board").innerHTML += /*HTML*/ `
    <div class="house blue" style="bottom: 0;right: 0">
    <div class="box">
    <div class="square square-one blue"></div>
    <div class="square square-two blue"></div>
    <div class="square square-three blue"></div>
    <div class="square square-four blue"></div>
    </div>
    </div>
    `;
}
function squareLocation() {
  document.getElementById("board").innerHTML += /*HTML*/ `
<div class="home"></div>
<div class="cells" style="top: 40%;"></div>
<div class="cells g-start" style="top: 40%;left:6.66%;"></div>
<div class="cells" style="top: 40%;left:13.32%;"></div>
<div class="cells" style="top: 40%;left:19.98%;"></div>
<div class="cells" style="top: 40%;left:26.64%;"></div>
<div class="cells" style="top: 40%;left:33.3%;"></div>

<div class="cells" style="top: 0;left:40%;"></div>
<div class="cells" style="top: 6.66%;left:40%;"></div>
<div class="cells safe" style="top: 13.32%;left:40%;"></div>
<div class="cells" style="top: 19.98%;left:40%;"></div>
<div class="cells" style="top: 26.64%;left:40%;"></div>
<div class="cells" style="top: 33.3%;left:40%;"></div>

<div class="cells" style="top: 0;left:46.66%;"></div>
<div class="cells yellow" style="top: 6.66%;left:46.66%;"></div>
<div class="cells yellow" style="top: 13.32%;left:46.66%;"></div>
<div class="cells yellow" style="top: 19.98%;left:46.66%;"></div>
<div class="cells yellow" style="top: 26.64%;left:46.66%;"></div>
<div class="cells yellow" style="top: 33.3%;left:46.66%;"></div>

<div class="cells" style="top: 0;left:53.32%;"></div>
<div class="cells y-start" style="top: 6.66%;left:53.32%;"></div>
<div class="cells" style="top: 13.32%;left:53.32%;"></div>
<div class="cells" style="top: 19.98%;left:53.32%;"></div>
        <div class="cells" style="top: 26.64%;left:53.32%;"></div>
        <div class="cells" style="top: 33.3%;left:53.32%;"></div>
        
        <div class="cells" style="top: 40%; right: 33.3%"></div>
        <div class="cells" style="top: 40%;right:26.64%;"></div>
        <div class="cells" style="top: 40%;right:19.98%;"></div>
        <div class="cells safe" style="top: 40%;right:13.32%;"></div>
        <div class="cells" style="top: 40%;right:6.66%;"></div>
        <div class="cells" style="top: 40%;right:0;"></div>
        
        <div class="cells blue" style="top: 46.66%; right: 33.3%"></div>
        <div class="cells blue" style="top: 46.66%;right:26.64%;"></div>
        <div class="cells blue" style="top: 46.66%;right:19.98%;"></div>
        <div class="cells blue" style="top: 46.66%;right:13.32%;"></div>
        <div class="cells blue" style="top: 46.66%;right:6.66%;"></div>
        <div class="cells" style="top: 46.66%;right:0;"></div>
        
        <div class="cells" style="top: 53.32%; right: 33.3%"></div>
        <div class="cells" style="top: 53.32%;right:26.64%;"></div>
        <div class="cells" style="top: 53.32%;right:19.98%;"></div>
        <div class="cells" style="top: 53.32%;right:13.32%;"></div>
        <div class="cells b-start" style="top: 53.32%;right:6.66%;"></div>
        <div class="cells" style="top: 53.32%;right:0;"></div>
        
        <div class="cells" style="bottom: 0;left:53.32%;"></div>
        <div class="cells" style="bottom: 6.66%;left:53.32%;"></div>
        <div class="cells safe" style="bottom: 13.32%;left:53.32%;"></div>
        <div class="cells" style="bottom: 19.98%;left:53.32%;"></div>
        <div class="cells" style="bottom: 26.64%;left:53.32%;"></div>
        <div class="cells" style="bottom: 33.3%;left:53.32%;"></div>
        
        <div class="cells" style="bottom: 0;left:46.66%;"></div>
        <div class="cells red " style="bottom: 6.66%;left:46.66%;"></div>
        <div class="cells red" style="bottom: 13.32%;left:46.66%;"></div>
        <div class="cells red" style="bottom: 19.98%;left:46.66%;"></div>
        <div class="cells red" style="bottom: 26.64%;left:46.66%;"></div>
        <div class="cells red" style="bottom: 33.3%;left:46.66%;"></div>
        
        <div class="cells" style="bottom: 0;left:40%;"></div>
        <div class="cells r-start" style="bottom: 6.66%;left:40%;"></div>
        <div class="cells" style="bottom: 13.32%;left:40%;"></div>
        <div class="cells" style="bottom: 19.98%;left:40%;"></div>
        <div class="cells" style="bottom: 26.64%;left:40%;"></div>
        <div class="cells" style="bottom: 33.3%;left:40%;"></div>
        
        <div class="cells" style="top: 53.32%; left: 33.3%"></div>
        <div class="cells" style="top: 53.32%;left:26.64%;"></div>
        <div class="cells" style="top: 53.32%;left:19.98%;"></div>
        <div class="cells safe" style="top: 53.32%;left:13.32%;"></div>
        <div class="cells" style="top: 53.32%;left:6.66%;"></div>
        <div class="cells" style="top: 53.32%;left:0;"></div>
        
        <div class="cells green" style="top: 46.66%;left: 33.3%"></div>
        <div class="cells green" style="top: 46.66%;left:26.64%;"></div>
        <div class="cells green" style="top: 46.66%;left:19.98%;"></div>
        <div class="cells green" style="top: 46.66%;left:13.32%;"></div>
        <div class="cells green" style="top: 46.66%;left:6.66%;"></div>
        <div class="cells" style="top: 46.66%;left:0;"></div>
        `;
}
