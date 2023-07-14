const { readFileSync } = require("fs");

async function main() {
  const input = readFileSync("./1.txt", "utf-8");

  const elfCals = input.split("\r\n");
  console.log(elfCals);

  let biggestSum = 0;
  let currentSum = 0;
  let snackCount = 0;
  for (const cal of elfCals) {
    if (cal != "") {
        snackCount++;
      currentSum += +cal;
    } else {
      if (currentSum > biggestSum) {
        biggestSum = currentSum;
      }
      currentSum = 0;
      snackCount = 0;
    }
  }

  console.log(biggestSum); // 51min
}

main();

export {};
