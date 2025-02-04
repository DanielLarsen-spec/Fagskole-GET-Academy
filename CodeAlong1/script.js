
let listElement = "";
updateView();
function updateView(){
  document.getElementById('app').innerHTML = /*HTML*/`
  <label for = "addToDo">To do liste:</label>
  <input onchange="addActivity(this.value)" id="addToDo" type= "text">
  <button onclick="addActivity()">Legg til aktivitet</button>
  <button onclick="removeActivities()">Fjern aktiviteter</button>
  <ul>
  ${listElement}
  
  </ul>
  `;
  
  updateView();
    
  }
  function addActivity(){
    listElement += `<li>${document.getElementById('addToDo').value}</li>` 
    
    
  

}   
    
function removeActivities(){
  
  
}






    

    
    






    
    
    
    
    
    

    
    


