const { readFileSync } = require("fs");

async function main() {
  const input = readFileSync("./1.txt", "utf-8");

  const elfCals = input.split("\r\n");
  console.log(elfCals);


  let sums: number[] = [];
  let biggestSum = 0;
  let currentSum = 0;
  let snackCount = 0;
  for (const cal of elfCals) {
    if (cal != "") {
        snackCount++;
      currentSum += +cal;
    } else {
      sums.push(currentSum);
      currentSum = 0;
      snackCount = 0;
    }


  }

  let sortedSums = sums.sort((n1,n2) => n2 - n1);
  console.log(sortedSums[0] + sortedSums[1] + sortedSums[2]); // 4m 58s
  
}

main();

export {};
