const { readFileSync } = require("fs");

function main() {
  // paper choice = 1
  // rock choice = 2
  // scissors choice = 3
  // loss = 0
  // draw = 3
  // win = 6

  const input = readFileSync("./2.txt", "utf-8");

  const rows = input.split("\r\n");
  console.log(rows);

  let totalScore = 0;
  for (const row of rows) {
    let match = row.split(" ");
    if (match[1] == "Z") {
      totalScore += 3;
    } else if (match[1] == "Y") {
      totalScore += 2;
    } else if (match[1] == "X") {
      totalScore += 1;
    }
    // check win
    if (
      (match[1] == "Z" && match[0] == "B") ||
      (match[1] == "X" && match[0] == "C") ||
      (match[1] == "Y" && match[0] == "A")
    ) {
      totalScore += 6;
    } else if (
      (match[1] == "Z" && match[0] == "C") ||
      (match[1] == "X" && match[0] == "A") ||
      (match[1] == "Y" && match[0] == "B")
    ) {
      totalScore += 3;
    }
  }
  console.log(totalScore); // 15min
  
}

main();

export {};
