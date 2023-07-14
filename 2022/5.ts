const { readFileSync } = require("fs");

function main() {

  const input = readFileSync("./5.txt", "utf-8");

  const rows: string[] = input.split("\r\n\r\n");
  let cratesInput = rows[0];
  const proceduresInput = rows[1];
  const procedures = proceduresInput.split("\r\n");
  // console.log(cratesInput);
  // console.log(proceduresInput);


  function getCratesToMove(procedure: string){
    return procedure.slice(4, procedure.indexOf(' from'));
  }

  function getFromCol(procedure: string){
    return procedure.slice(procedure.indexOf('from ') + 5, procedure.indexOf(' to'));
  }
  function getToCol(procedure: string){
    return procedure.slice(procedure.indexOf('to ') + 3);
  }

  function parseCrateRows(input: string){
    let rows = input.split("\r\n");
    rows = rows.slice(0, rows.length - 1);
    // rows.reverse();

    return rows;

  }

  function parseCrates(crateRow: string){
    return crateRow.split(' ').filter(val => val.length == 3);
  }
 

  function getTransposedCrates(cratesInput: string){
    let crateRows = parseCrateRows(cratesInput);
    
    
    let transposedCrates = new Array<number>(9);

    crateRows.forEach((crateRow, crateRowIndex) => {
      let crates = crateRow.split(' ');


    })

  }


  let crateGrid = parseCrateRows(cratesInput);
  console.log(crateGrid);


  function getCrateHeightIndex(col: number, crateGrid: string[]){
    // col 4
    let index = 0;
    for(const row of crateGrid){
      let crate = row.slice((col - 1) * 4, (col - 1) * 4 + 4);
      if(crate[0] == '['){
        return index;
      }
      index++;
    }
  }

  console.log(getCrateHeightIndex(9, crateGrid));
  

  function removeCrate(fromCol: number, crateGrid: string){

  }


  




  for (const proc of procedures) {
    // console.log(getCratesToMove(proc));
    const cratesToMove = getCratesToMove(proc);
    const fromCol = getFromCol(proc);
    const toCol = getToCol(proc);
    


    
  }

  console.log(); // 15min
}

main();

export {};
