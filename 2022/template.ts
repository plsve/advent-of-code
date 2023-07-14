const { readFileSync } = require("fs");

function main() {

  const input = readFileSync("./4.txt", "utf-8");

  const rows: string[] = input.split("\r\n");
  console.log(rows);


  for (const row of rows) {

  }

  console.log(); // 15min
}

main();

export {};
