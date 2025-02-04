showBoard()
function showBoard(){
    addCell('cell cell-3', 6);
    addCell('cell cell-1', 7) ;
    addCell('cell cell-2', 8);
    addCell('cell cell-3', 9);
    addCell('cell cell-1', 10);
    addCell('cell cell-2', 5);
    addCell('', "");
    addCell('', "");
    addCell('', "");
    addCell('cell cell-2', 11);
    addCell('cell cell-1', 4);
    addCell('cell cell-3', 3);
    addCell('', "");
    addCell('cell cell-1', 13);
    addCell('cell cell-3', 12);
    addCell('', "");
    addCell('cell cell-2', 2);
    addCell('',"");
    addCell('cell cell-2', 14);
    addCell('', "");
    addCell('cell start', "start");
    addCell('cell cell-1', 1);
    addCell('', "");
    addCell('cell cell-3', 15);
    addCell('cell finish', "Mål");
    addCell('', "");
    addCell('', "");
}

function addCell(CssClass, number){
    document.getElementById('board').innerHTML += /*HTML*/`
    <div class="${CssClass}">${number}</div>
  
    `;
}
    

    















