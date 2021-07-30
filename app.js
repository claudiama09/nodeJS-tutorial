var http = require("http");
var fs = require("fs");

http.createServer(function (req, res) {
  const fileStream = fs.createReadStream("./content/big.txt", "utf8");
  fileSystem.on("open", () => {
    fileSystem.pipe();
  });

  fileSystem.on("error", (error) => {
    res.end(error);
  });
});
