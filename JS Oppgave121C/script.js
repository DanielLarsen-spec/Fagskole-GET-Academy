updateView();
function updateView(){
    addInputText('fname', 'lname');
    addInputRange('zero2hundred');
    addInputNumber('number');
    addInputRadio('Html', 'Css', 'Javascript');
    addInputCheckbox('vehicle1', 'vehicle2', 'vehicle3');
}
//Sette alt inn i sammem funskjon //
function addInputText(forname, lastname){
    document.getElementById('app').innerHTML = /*HTML*/`
    <label for="${forname}">First name:</label><br/>
    <input type="text" id="${lastname}"><br/>
    `;
    
    document.getElementById('app').innerHTML += /*HTML*/`
    <label for="${lastname}">Last name:</label><br/>
    <input type="text" id="${lastname}"><br/>
    `;
}
    
function addInputRange(rangeNumber){
    document.getElementById('app').innerHTML += /*HTML*/`
    <label for="${rangeNumber}">En til hundre:</label><br/>
    <input type="range" min="1" max="100" step="1" id="${rangeNumber}"><br/>
    `;
}
    
 
function addInputNumber(inputNumber){
    document.getElementById('app').innerHTML += /*HTML*/`
    <label for="${inputNumber}">Skriv inn et tall:</label><br/>
    <input type="number" id="${inputNumber}"><br/>
    `;
}
    
function addInputRadio(html, css, js){
    document.getElementById('app').innerHTML += /*HTML*/`
    <input type="radio" id="${html}" name="fav_language">
    <label for="${html}">HTML</label><br/>
    `;
    
    document.getElementById('app').innerHTML += /*HTML*/`
    <input type="radio" id="${css}" name="fav_language">
    <label for="${css}">CSS</label><br>
    `;
    
    document.getElementById('app').innerHTML += /*HTML*/`
    <input type="radio" id="${js}" name="fav_language">
    <label for="${js}">JavaScript</label><br/>
    `;
}

function addInputCheckbox(bike, car, boat){
    document.getElementById('app').innerHTML += /*HTML*/`
    <input type="checkbox" id="${bike}">
    <label for="${bike}"> I have a bike</label><br/>
    `;



    document.getElementById('app').innerHTML += /*HTML*/`
    <input type="checkbox" id="${car}">
    <label for="${car}"> I have a car</label><br/>
    `;



    document.getElementById('app').innerHTML += /*HTML*/`
    <input type="checkbox" id="${boat}">
    <label for="${boat}"> I have a boat</label><br/>
    `;

}
    
    




    



    

    
    
 
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    

