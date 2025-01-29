let mainDiv = document.getElementById('app');
let yourLocation = "Du står uten for leiligheten"
updateView();
function updateView(){
    mainDiv.innerHTML = /*HTML*/`
    <h2>Oppgave 116C</h2>
    <h1>Leilighet klikkerspill</h1>
    <div>${yourLocation}</div>
    <button onclick="EnterHallWay('Du står i gangen')">Gå inn til gangen</button>
    
    `;
}
    
 function EnterHallWay(newLocation){
    yourLocation = newLocation;
    mainDiv.innerHTML = /*HTML*/`
        <div>${newLocation}</div>
        <button onclick="EnterLivingRoom('Du står i stuen')">Gå til stuen</button>
        <button onclick="EnterKitchen('Du står på kjøkkenet')">Gå til kjøkkenet</button>
        <button onclick="EnterBathRoom('Du står på badet')">Gå til badet</button>
        
    `;
    
}   
    
function EnterLivingRoom(newLocation){
    yourLocation = newLocation;
    mainDiv.innerHTML = /*HTML*/`
        <div>${newLocation}</div>
        <button onclick="EnterHallWay('Du står i gangen')">Gå tilbake fra gangen</button>
        <button onclick="EnterKitchen('Du står på kjøkkenet')">Gå til kjøkkenet</button>
        `;
     
}

function EnterKitchen(newLocation){
    yourLocation = newLocation;
    mainDiv.innerHTML = /*HTML*/`
        <div>${newLocation}</div>
        <button onclick="EnterHallWay('Du står i gangen')">Gå til gangen</button>
        <button onclick="EnterLivingRoom('Du står i stuen')">Gå til stuen</button>
        `;
}
    
function EnterBathRoom(newLocation){
    yourLocation = newLocation;
    mainDiv.innerHTML = /*HTML*/`
    <div>${newLocation}</div>
    <button onclick="EnterHallWay('Du står i gangen')">Gå tilbake til gangen</button>
    `;
}


    
        
    
    