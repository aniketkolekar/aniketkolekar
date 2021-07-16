const fs = require('fs');
const path = require('path');

const removeDir = function (path) {
  fs.rm(path, { recursive: true, force: true }, (err) => {
    if (err) {
      throw err;
    }
  });
};

const pathToHuskyDir = path.join(__dirname, '.husky', '_');

removeDir(pathToHuskyDir);
