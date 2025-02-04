updateView();
function updateView(){
    addInputText('fname', 'lname');
    addInputRange();
    addInputNumber();
    addInputRadio();
    addInputCheckbox();
}
//Sette alt inn i sammem funskjon //
function addInputText(forname, lastname){
    document.getElementById('app').innerHTML = /*HTML*/`
    <label for="${forname}">First name:</label><br/>
    <input type="text" id="${lastname}"><br/>
    `;
    
    document.getElementById('app').innerHTML += /*HTML*/`
    <label for="$">Last name:</label><br/>
    <input type="text" id="${addInputTextIdLastname}"><br/>
    `;
}
    
function addInputRange(){
    document.getElementById('app').innerHTML += /*HTML*/`
    <label for="zero2hundred">En til hundre:</label><br/>
    <input type="range" min="1" max="100" step="1" id="zero2hundred"><br/>
    `;
}
    
 
function addInputNumber(){
    document.getElementById('app').innerHTML += /*HTML*/`
    <label for="number">Skriv inn et tall:</label><br/>
    <input type="number" id="number"><br/>
    `;
}
    
function addInputRadio(){
    document.getElementById('app').innerHTML += /*HTML*/`
    <input type="radio" id="html" name="fav_language">
    <label for="html">HTML</label><br/>
    `;
    
    document.getElementById('app').innerHTML += /*HTML*/`
    <input type="radio" id="css" name="fav_language">
    <label for="css">CSS</label><br>
    `;
    
    document.getElementById('app').innerHTML += /*HTML*/`
    <input type="radio" id="javascript" name="fav_language">
    <label for="javascript">JavaScript</label><br/>
    `;
}

function addInputCheckbox(){
    document.getElementById('app').innerHTML += /*HTML*/`
    <input type="checkbox" id="vehicle1">
    <label for="vehicle1"> I have a bike</label><br/>
    `;



    document.getElementById('app').innerHTML += /*HTML*/`
    <input type="checkbox" id="vehicle2">
    <label for="vehicle2"> I have a car</label><br/>
    `;



    document.getElementById('app').innerHTML += /*HTML*/`
    <input type="checkbox" id="vehicle3">
    <label for="vehicle3"> I have a boat</label><br/>
    `;

}
    
    




    



    

    
    
 
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    

