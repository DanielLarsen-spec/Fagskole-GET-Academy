//Oppgave 115A
let mainDiv = document.getElementById('app')
updateView();
function updateView(){
mainDiv.innerHTML = /*HTML*/`
<div class="page">
    <div class="header">header</div>
    <div class="meny">meny</div>
    <div class="mainContent">hovedinnhold</div>
    <div class="footer" style="background-color: lightpink">footer</div>
</div>



`;
}