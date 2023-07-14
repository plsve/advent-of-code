const { readFileSync } = require("fs");

function main() {

  const input = readFileSync("./3.txt", "utf-8");

  const rows: string[] = input.split("\r\n");
  console.log(rows);

  function findEqualCharacter(a: string, b: string){
    for(const char of a){
        if(b.indexOf(char) >= 0){
            return char;
        }
    }
    return '';
  }

  function getItemValue(item: string){
    if(item.charCodeAt(0) >= 97 && item.charCodeAt(0) <= 122){
        return item.charCodeAt(0) - 96;
    } else if(item.charCodeAt(0) >= 65 && item.charCodeAt(0) <= 90){
        return item.charCodeAt(0) - 38;
    }
    return 0;
  }


  let prioritySum = 0;
  for (const row of rows) {

    let compartmentA = row.slice(0, row.length / 2);
    let compartmentB = row.slice(row.length / 2);
    let sharedItem: string = findEqualCharacter(compartmentA, compartmentB);
    const itemPriority = getItemValue(sharedItem);
    prioritySum += +itemPriority;
    
    

    
    // let compartments = row.slice() row.length / 2
  }
  
  console.log(prioritySum); // 27min
  
}


main();




export {};
