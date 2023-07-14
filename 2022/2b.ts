const { readFileSync } = require("fs");

function main() {
  // rock choice = 1
  // paper choice = 2
  // scissors choice = 3
  // loss = 0
  // draw = 3
  // win = 6

  // X = needs to lose
  // Y = draw
  // Z = win

  function getResult(opponentShape: string, requiredResult: string) {
    let result;
    if (requiredResult == "X") {
      if (opponentShape == "A") {
        result = "z";
      } else if (opponentShape == "B") {
        result = "x";
      } else if (opponentShape == "C") {
        result = "y";
      }
    } else if (requiredResult == "Y") {
      if (opponentShape == "A") {
        result = "x";
      } else if (opponentShape == "B") {
        result = "y";
      } else if (opponentShape == "C") {
        result = "z";
      }
    }
    if (requiredResult == "Z") {
      if (opponentShape == "A") {
        result = "y";
      } else if (opponentShape == "B") {
        result = "z";
      } else if (opponentShape == "C") {
        result = "x";
      }
    }
    return result;
  }
  const input = readFileSync("./2.txt", "utf-8");

  const rows = input.split("\r\n");
  console.log(rows);

  let totalScore = 0;
  for (const row of rows) {
    let match = row.split(" ");

    match[1] = getResult(match[0], match[1]);
    // console.log(match);    
    // console.log('-');
    
    

    if (match[1] == "z") {
      totalScore += 3;
    } else if (match[1] == "y") {
      totalScore += 2;
    } else if (match[1] == "x") {
      totalScore += 1;
    }
    // check win
    if (
      (match[1] == "z" && match[0] == "B") ||
      (match[1] == "x" && match[0] == "C") ||
      (match[1] == "y" && match[0] == "A")
    ) {
      totalScore += 6;
    } else if (
      (match[1] == "z" && match[0] == "C") ||
      (match[1] == "x" && match[0] == "A") ||
      (match[1] == "y" && match[0] == "B")
    ) {
      totalScore += 3;
    }
  }
  console.log(totalScore); // 13m 29s
}

main();

export {};
