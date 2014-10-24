var through     = require('through2');
var furtivework = require('furtivework');

module.exports = function(options) {
  return through.obj(function(file, encoding, callback) {
    if (!file.isBuffer()) {
      callback();
    }

    var src = file.contents.toString();
    var css = furtivework(src, { source: file.path });

    file.contents = new Buffer(css);
    this.push(file);
    callback();
  });
};
