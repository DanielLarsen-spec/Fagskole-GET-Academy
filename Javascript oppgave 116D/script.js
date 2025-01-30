
showRed();
function show(onclickFunction, topColor, middleColor, bottomColor){
    document.getElementById('app').innerHTML = /*HTML*/`
    
    <div onclick="${onclickFunction}" id="trafficLight">
        <div class="light" style="background-color: ${topColor}";></div>
        <div class="light" style ="background-color: ${middleColor}";></div>
        <div class="light" style ="background-color:${bottomColor}";></div>
        </div>
        
        `;
        
    }
    
function showRed(){
    show('showRedAndYellow()', 'red', 'gray', 'gray');
        
    
        
    }
    
function showRedAndYellow(){
    show('showGreen()', 'red', 'yellow', 'gray');
        
        
    }

function showYellow(){
    show('showRed()', 'gray', 'yellow', 'gray');
    
}



function showGreen(){
    show('showYellow()', 'gray', 'gray', 'green');
    
}
    







 
    
    
    
    
    


