const { readFileSync } = require("fs");

function main() {
  const input = readFileSync("./6.txt", "utf-8");

  console.log(input);

  let index = 1;
  let buffer = "";

  function checkMarker(buffer: string) {
    let result = false;
    const charSet = new Set();

    for (const char of buffer){
      charSet.add(char);      
    }
    if(charSet.size == 14){
      result = true;
    }
    
    
    return result;
  }

  let foundMarker = false;
  for (const char of input) {
    if (buffer.length < 14) {
      buffer += char;
    } else {
      buffer = buffer.slice(1) + char;
    }

    foundMarker = checkMarker(buffer);
    if(foundMarker){
      console.log(index); // 1min
      
      return;      
    }

    index++;
  }

}

main();

export {};
