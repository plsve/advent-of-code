const { readFileSync } = require("fs");

function main() {
  const input = readFileSync("./8.txt", "utf-8");

  const rows: string[] = input.split("\r\n");

  const squareLength = rows[0].length;
  const squareHeight = rows.length;

  function getShorterTreeCount(num: number, range: number[]) {
    let result = 0;
    for (const n of range) {
      if (n < num) {
        result++;
      } else if (n >= num) {
        result++;
        break;
      } else {
        break;
      }
    }

    return result;
  }

  function getScenicScoreFrom(num: number, index: number, direction: string) {
    const colIndex = index % (squareLength + 2);

    const rowIndex = Math.floor(index / (squareLength + 2));

    let result = 0;

    switch (direction) {
      case "left": {
        const startIndex = rowIndex * (squareLength + 2);
        const rowNumbersString = input.slice(startIndex, startIndex + colIndex);
        const rowNumbers = rowNumbersString.split("").map((r: string) => +r);
        result = getShorterTreeCount(num, rowNumbers.reverse());

        break;
      }
      case "right": {
        const startIndex = rowIndex * (squareLength + 2) + colIndex + 1;

        const endIndex = (rowIndex + 1) * (squareLength + 2) - 2;

        const rowNumbersString = input.slice(startIndex, endIndex);
        const rowNumbers = rowNumbersString.split("").map((r: string) => +r);
        result = getShorterTreeCount(num, rowNumbers);
        break;
      }
      case "top": {
        const columnNumbers: number[] = [];
        for (let i = rowIndex - 1; i >= 0; i--) {
          const char = input.charAt(i * (squareLength + 2) + colIndex);
          columnNumbers.push(+char);
        }
        result = getShorterTreeCount(num, columnNumbers);
        break;
      }
      case "bottom": {
        const columnNumbers: number[] = [];
        for (let i = rowIndex + 1; i <= squareHeight - 1; i++) {
          const char = input.charAt(i * (squareLength + 2) + colIndex);
          columnNumbers.push(+char);
        }
        result = getShorterTreeCount(num, columnNumbers);
      }
    }

    return result;
  }

  let visibleTreeCount = 0;
  let rowIndex = 0;
  let colIndex = 0;

  let topScore = 0;

  for (let i = 0; i < input.length; i++) {
    const isVisible = false;
    const char = input.charAt(i);

    if (char != "\n" && char != "\r") {
      const scenicScores: number[] = [];
      scenicScores.push(getScenicScoreFrom(+char, i, "left"));
      scenicScores.push(getScenicScoreFrom(+char, i, "right"));
      scenicScores.push(getScenicScoreFrom(+char, i, "top"));
      scenicScores.push(getScenicScoreFrom(+char, i, "bottom"));

      const scenicScoresSum = scenicScores.reduce(
        (sum, current) => sum * current,
        1
      );
      topScore = scenicScoresSum > topScore ? scenicScoresSum : topScore;
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

  console.log("Top Score:");
  console.log(topScore); // 22min 6sec
}

main();

export {};
