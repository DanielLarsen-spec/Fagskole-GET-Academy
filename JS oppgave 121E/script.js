updateView();
function updateView() {
  Html();
  createHouse("green", '', 'greenId');
  createBox("square-one", "green", "greenId");
  createBox("square-two", "green", "greenId");
  createBox("square-three", "green", "greenId");
  createBox("square-four", "green", "greenId");

  createHouse("yellow", "right:0;", 'yellowId');
  createBox("square-one", "yellow", "yellowId");
  createBox("square-two", "yellow", "yellowId");
  createBox("square-three", "yellow", "yellowId");
  createBox("square-four", "yellow", "yellowId");

  createHouse("red", "bottom:0;", 'redId');
  createBox("square-one", "red", "redId");
  createBox("square-two", "red", "redId");
  createBox("square-three", "red", "redId");
  createBox("square-four", "red", "redId");

  createHouse("blue", "bottom:0; right:0;", 'blueId');
  createBox("square-one", "blue", "blueId");
  createBox("square-two", "blue", "blueId");
  createBox("square-three", "blue", "blueId");
  createBox("square-four", "blue", "blueId");
}

function createHouse(houseType, placement, houseId) {
  document.getElementById("board").innerHTML += /*HTML*/ `
  
  <div class="house ${houseType}" style="${placement}">
    <div id="box${houseId}" class="box"></div>
  </div>
  
  `;
}

function createBox(squareNumber, squareColor, boxId) {
  document.getElementById("box" + boxId).innerHTML += /*HTML*/ `
  <div class="square ${squareNumber} ${squareColor}"></div>
  
  
  
  
  
  `;
}

function Html() {
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
