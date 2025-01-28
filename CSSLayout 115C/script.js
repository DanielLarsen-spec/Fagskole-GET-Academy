let minDiv = document.getElementById('app')

updateView();
function updateView(){
minDiv.innerHTML = /*HTML*/`
<h1>Oppgave 115C</h1>
<h3>Mitt skjema</h3>
    <div class="container">
        <label for="Firstname">first name: </label>
        <input id="FirstName" type="text">
        <label for="LastName">Last Name:</label>
        <input id="LastName" type="text">
        <label for="R">En til hundre:</label>
        <input id="RangeBar" type="range">
        <label for="inputNum">Skriv inn ett tall:</label>
        <input id="inputNum" type="number">
        
        
        
        
        <div>Favoritt språk:</div> <br>
        <label for="HTML">HTML</label>
        <input class="HyperLink" id="HTML" type="radio" name="fav_language"> 
        <label for="CSS">CSS</label> 
        <input class="Cascadesheets" id="CSS" type="radio" name="fav_language"> 
        <label for="JS">Javascript</label>
        <input class="Javascript" id="JS" type="radio" name="fav_language">
        
        
        </div>
        
        
        
    
    
`;
}