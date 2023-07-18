const { readFileSync } = require("fs");

function main() {
  const input = readFileSync("./5.txt", "utf-8");

  const rows: string[] = input.split("\r\n\r\n");
  const cratesInput = rows[0];
  const proceduresInput = rows[1];
  console.log(cratesInput);
  console.log(proceduresInput);
  
  
  const procedures = proceduresInput.split("\r\n");

  function getCratesToMove(procedure: string): number {
    return +procedure.slice(4, procedure.indexOf(" from"));
  }

  function getFromCol(procedure: string) {
    return +procedure.slice(
      procedure.indexOf("from ") + 5,
      procedure.indexOf(" to")
    );
  }
  function getToCol(procedure: string) {
    return +procedure.slice(procedure.indexOf("to ") + 3);
  }

  function parseCrateRows(input: string) {
    let rows = input.split("\r\n");
    rows = rows.slice(0, rows.length - 1);
    rows.reverse();

    return rows;
  }

  function initCrateStacks(crateCount: number) {
    const stacks = [] as any;
    for (let i = 0; i < crateCount; i++) {
      stacks.push([] as any);
    }
    return stacks;
  }

  function parseStacks(crateRows: any[]) {
    const crateColCount = (crateRows[0].length + 1) / 4;

    const crateStacks = initCrateStacks(crateColCount);

    for (let i = 0; i < crateColCount; i++) {
      for (let j = 0; j < crateRows.length; j++) {
        const toPush = crateRows[j][1 + i * 4];
        if (toPush != " ") {
          crateStacks[i].push(crateRows[j][1 + i * 4]);
        }
      }
    }

    return crateStacks;
  }

  const crateRows = parseCrateRows(cratesInput);

  const crateStacks = parseStacks(crateRows);

  for (const proc of procedures) {
    const cratesToMove = getCratesToMove(proc);
    const fromCol = getFromCol(proc) - 1;
    const toCol = getToCol(proc) - 1;

    const poppedArr: any[] = [];
    for (let i = 0; i < cratesToMove; i++) {
      const popped = crateStacks[fromCol].pop();
      poppedArr.push(popped);
    }
    crateStacks[toCol].push(...poppedArr.reverse());

    console.log(crateStacks);
    console.log(crateStacks.map((e: any) => e[e.length - 1]).join("")); // ~15m
  }
}

main();

export {};
