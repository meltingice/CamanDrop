var config = require('./camandrop/config'),
watcher = require('./camandrop/watcher');

exports.start = function () {
  var appConfig = config.load();
  watcher.start(appConfig);
}