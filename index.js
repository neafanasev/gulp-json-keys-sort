'use strict';
const PluginError = require('plugin-error');
const through = require('through2');
const json = require('json-keys-sort')

module.exports = () => {
  return through.obj(function(file, enc, cb) {
    if (file.isNull()) {
      cb(null, file);
      return;
    }

    if (file.isStream()) {
      cb(new PluginError('gulp-json-keys-sort', 'Streaming not supported'));
      return;
    }

    try {
      const data = json.sort(JSON.parse(file.contents.toString()))
      file.contents = new Buffer.from(JSON.stringify(data, null, 2));
      this.push(file);
    } catch (err) {
      this.emit('error', new PluginError('gulp-json-keys-sort', err));
    }

    cb();
  });
};
