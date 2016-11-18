var fs = require('fs');

module.exports = function(path, mode) {
  var dirSeparator = require('path').sep;
  var splitPath = path.split(dirSeparator);

  for (var i = 0; i < splitPath.length; i++) {
    var tempPath = splitPath.slice(0, i+1).join(dirSeparator);
    if (tempPath === '') tempPath = dirSeparator;
    if (!fs.existsSync(tempPath)) {
      fs.mkdirSync(tempPath, mode);
    }
  }
};
