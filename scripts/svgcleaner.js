//requiring path and fs modules
const path = require("path");
const fs = require("fs");
const { exec } = require("child_process");

var myArgs = process.argv.slice(2);
console.log('svgcleaner.js - optimizing all svgs in ', myArgs[0]);
const directoryPath = myArgs[0];

fs.readdir(directoryPath, function (err, files) {
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }
  var count = 0;
  files.forEach(function (file) {
    if (file.split(".").pop() == "svg") {
      count++;

      console.log(`Optimizing ${file}...`);
      exec(
        // --disable=ConvertPathData,cleanupNumericValues
        `./node_modules/svgo/bin/svgo --pretty --config \'./scripts/svgcleaner.yml\' -q \"${path.join(
          directoryPath,
          file
        )}\"`,
        (err, stdout, stderr) => {
          if (err) {
            console.log(`error while executing svgo on ${file} : ${err}`);
            return 1;
          }
        }
      );
    }
  });
  console.log(`svg cleaner: optimized ${count} files`);
});
