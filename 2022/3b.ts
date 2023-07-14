const { readFileSync } = require("fs");

function main() {

  const input = readFileSync("./3.txt", "utf-8");

  const rows: string[] = input.split("\r\n");
  console.log(rows);


  function getItemValue(item: string) {
    if (item.charCodeAt(0) >= 97 && item.charCodeAt(0) <= 122) {
      return item.charCodeAt(0) - 96;
    } else if (item.charCodeAt(0) >= 65 && item.charCodeAt(0) <= 90) {
      return item.charCodeAt(0) - 38;
    }
    return 0;
  }

  function findSharedItem(elf1: string, elf2: string, elf3: string) {
    for (let char of elf1) {
      if (elf2.indexOf(char) >= 0 && elf3.indexOf(char) >= 0) {
        return char;
      }
    }
    return "";
  }

  let prioritySum = 0;

  let firstElf = "";
  let secondElf = "";

  for (const row of rows) {
    if (firstElf == "") {
      firstElf = row;
    } else if (secondElf == "") {
      secondElf = row;
    } else {
      let badge = findSharedItem(firstElf, secondElf, row);
      const itemPriority = getItemValue(badge);
      prioritySum += +itemPriority;

      firstElf = "";
      secondElf = "";
    }
  }

  console.log(prioritySum); // 15min
}

main();

export {};
