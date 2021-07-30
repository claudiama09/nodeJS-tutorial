// STREAMS

// 1) writable
// 2) readable
// 3) duplex (both read and write)
// 4) transform

// One frequent use case of streams is to read files
const { writeFileSync } = require("fs");

for (let i = 0; i < 10000; i++) {
  writeFileSync("./content/big.txt", `hello ${i}\n`, { flag: "a" });
}
