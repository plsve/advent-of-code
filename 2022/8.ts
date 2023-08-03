const { readFileSync } = require("fs");

function main() {
  const input = readFileSync("./8.txt", "utf-8");

  const rows: string[] = input.split("\r\n");

  const squareLength = rows[0].length;
  const squareHeight = rows.length;

  function isHighestInRange(num: number, range: number[]) {

    let result = true;
    for (const n of range) {
      if (n >= num) {
        result = false;
      }
    }

    return result;
  }

  function isVisibleFrom(num: number, index: number, direction: string) {
    const colIndex = index % (squareLength + 2);

    const rowIndex = Math.floor(index / (squareLength + 2));

    let isTreeVisible = false;
    switch (direction) {
      case "left": {
        const startIndex = rowIndex * (squareLength + 2);
        const rowNumbersString = input.slice(startIndex, startIndex + colIndex);
        const rowNumbers = rowNumbersString.split("").map((r: string) => +r);
        isTreeVisible = isHighestInRange(num, rowNumbers);
        
        break;
      }
      case "right": {

        const startIndex = rowIndex * (squareLength + 2) + colIndex + 1;

        const endIndex = (rowIndex + 1) * (squareLength + 2) - 2;

        const rowNumbersString = input.slice(startIndex, endIndex);
        const rowNumbers = rowNumbersString.split("").map((r: string) => +r);
        isTreeVisible = isHighestInRange(num, rowNumbers);
        break;
      }
      case "top": {
        const columnNumbers: number[] = [];
        for (let i = rowIndex - 1; i >= 0; i--) {
          const char = input.charAt(i * (squareLength + 2) + colIndex);
          columnNumbers.push(+char);
          
        }
        isTreeVisible = isHighestInRange(num, columnNumbers);
        break;
      }
      case "bottom": {
        const columnNumbers: number[] = [];
        for (let i = rowIndex + 1; i <= squareHeight - 1; i++) {
          const char = input.charAt(i * (squareLength + 2) + colIndex);
          columnNumbers.push(+char);
          
        }
        isTreeVisible = isHighestInRange(num, columnNumbers);
      }
    }
    return isTreeVisible;
  }

  let visibleTreeCount = 0;
  let rowIndex = 0;
  let colIndex = 0;

  for (let i = 0; i < input.length; i++) {
    let isVisible = false;
    const char = input.charAt(i);

    if (char != "\n" && char != "\r") {
      isVisible ||= isVisibleFrom(+char, i, "left");
      isVisible ||= isVisibleFrom(+char, i, "right");
      isVisible ||= isVisibleFrom(+char, i, "top");
      isVisible ||= isVisibleFrom(+char, i, "bottom");
    }
    if (isVisible) {
      visibleTreeCount++;
    }

    colIndex++;
    if (char == "\n") {
      rowIndex++;
      colIndex = 0;
    }
  }

  console.log(visibleTreeCount); // 2h
}

main();

export {};
