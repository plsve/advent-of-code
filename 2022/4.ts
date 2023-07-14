const { readFileSync } = require("fs");

function main() {
  const input = readFileSync("./4.txt", "utf-8");

  const rows: string[] = input.split("\r\n");
  console.log(rows);

  let count = 0;
  for (const row of rows) {
    const split = row.split(",");
    const elfA = split[0];
    const elfB = split[1];

    const rangeA = elfA.split("-");
    const rangeB = elfB.split("-");

    console.log(rangeA);
    console.log(rangeB);
    
    //! cant compare string numbers! convert to number first. Because comparing strings like '8' vs '12' only checks the first differing character and returns.

    if (+rangeB[0] >= +rangeA[0] && +rangeB[1] <= +rangeA[1]) {
      console.log('B fits');
      
      count++;
    } else if (+rangeA[0] >= +rangeB[0] && +rangeA[1] <= +rangeB[1]) {
      console.log('A fits');
      count++;
    } else {
      console.log('none');
      
    }

    console.log('-');
    
  }

  console.log(count); // 17min 35s
}

main();

export {};
