var fs = require('fs'),
Caman = require('caman').Caman,
config;

exports.setConfig = function (config_) {
  config = config_;
}

exports.execute = function (info) {
  Caman(info.path, function () {
    this[info.filter]().render(function () {
      this.save(config.folders.renders + "/" + renderName(info.filter, info.name), true);
      fs.renameSync(info.path, config.folders.originals + "/" + info.filename);
    });
  });
};

function renderName(filter, origName) {
  return filter + "-" + origName + ".png";
}