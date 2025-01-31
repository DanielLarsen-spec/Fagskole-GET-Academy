updateView();
function updateView(){
  
/*Vi kan erstatte Html ved å kalle på en annen funksjon.*/
    addHeaderText('Dag', 'Time', 'Minutt', 'Temperatur')
    addRow(1, 10, 0, 5);
    addRow(1, 10, 15, 6);
    addRow(1, 10, 30, 7);
    addRow(1, 10, 45, 8);
}
    
 
function addRow(day, hour, minute, Temperature){
    document.getElementById('myTable').innerHTML += /*HTML*/`
    <tr>
    <td>${day}</td>
    <td>${hour}</td>
    <td>${minute}</td>
    <td>${Temperature}</td>
    </tr>
    `;
}   

function addHeaderText(day, hour, minute, temperature){
document.getElementById('myTable').innerHTML += /*HTML*/`
<tr>
    <th>${day}</th>
    <th>${hour}</th>
    <th>${minute}</th>
    <th>${temperature}</th>
    </tr>




`;
}
    
    
    
   
   
    





    
    
    
    