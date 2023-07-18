const { readFileSync } = require("fs");

interface File {
  name: string;
  size: number;
}
interface Directory {
  name: string;
  parent: Directory | undefined;
  children: Directory[];
  files: File[];
  size: number;
}

function main() {
  const input = readFileSync("./7.txt", "utf-8");

  const rows: string[] = input.split("\r\n");

  let fileSystem: Directory = {
    name: "/",
    parent: undefined,
    children: [],
    files: [],
    size: 0,
  };

  let currentDir = fileSystem;

  function getRootDir(dir: Directory) {
    if (dir.parent == undefined) {
      return dir;
    }
    return getRootDir(dir);
  }


  function processCd(row: string) {
    let newDir = row.slice(5);

    if (newDir == "..") {
      if (currentDir.parent != undefined) {
        currentDir = currentDir.parent;
      }
    } else if (newDir == "/") {
      getRootDir(currentDir);
    } else {

      let childDir = currentDir.children.find((e) => e.name == newDir);
      if (childDir == undefined) {
        childDir = {
          name: newDir,
          parent: currentDir,
          children: [],
          files: [],
          size: 0,
        };
        currentDir.children.push(childDir);
      }
      currentDir = childDir;
    }
  }

  function processLs(row: string) {
    let rowSplit = row.split(" ");
    if (rowSplit[0] == "dir") {
      let newDir = rowSplit[1];
      currentDir.children.push({
        name: newDir,
        parent: currentDir,
        children: [],
        files: [],
        size: 0,
      });
    } else {
      currentDir.files.push({
        size: +rowSplit[0],
        name: rowSplit[1],
      });
    }
  }

  function processRow(row: string) {
    if (row.indexOf("$ cd ") == 0) {
      processCd(row);
    } else if (row.indexOf("$ ls") != 0) {
      processLs(row);
    }
  }

  for (const row of rows) {
    processRow(row);
  }

  let sum = 0;
  function sumFiles(dir: Directory): number {
    for (const file of dir.files) {
      dir.size += file.size;
    }  
    for (const child of dir.children) {
      dir.size += sumFiles(child);
    }    
    if (dir.size <= 100000) {
      sum += dir.size;
    }

    return dir.size;

  }
  sumFiles(fileSystem);
;
  console.log(sum); // 2.5h
  
}

main();

export {};
