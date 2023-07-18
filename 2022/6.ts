const { readFileSync } = require("fs");

function main() {
  const input = readFileSync("./6.txt", "utf-8");

  let index = 1;
  let buffer = "";

  function checkMarker(buffer: string) {
    let result = false;
    const charSet = new Set();

    for (const char of buffer){
      charSet.add(char);      
    }
    if(charSet.size == 4){
      result = true;
    }
    console.log(charSet);
    
    
    return result;
  }

  let foundMarker = false;
  for (const char of input) {
    if (buffer.length < 4) {
      buffer += char;
    } else {
      buffer = buffer.slice(1) + char;
    }

    foundMarker = checkMarker(buffer);
    if(foundMarker){
      console.log(buffer);
      console.log(index); // 35min
      
      return;      
    }

    index++;
  }

}

main();

export {};
