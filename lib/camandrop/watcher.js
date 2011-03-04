var watch = require('watch'),
render = require('./render'),
config, watchFolder;

exports.start = function (config_) {;
  config = config_;
  
  watchFolder = config.folders.filters;
  render.setConfig(config);
  
  startMonitor();
};

function startMonitor() {
  watch.createMonitor(watchFolder, function (monitor) {
    monitor.on("created", function (f, curr, prev) {
      var info = parse_filename(f);
      
      if (!info) {
        // Not an image
        return true;
      }
      
      render.execute(info);
    });
  });
}

/*
 * TODO - this needs rewriting to handle files that
 * have periods as a part of the name itself.
 */
function parse_filename(file) {
  var info = file.split("/").reverse();
  
  var ext = info[0].split('.')[1].toLowerCase();
  if (ext != 'jpg' && ext != 'jpeg' && ext != 'png') {
    // Not an image
    return false;
  }
  
  return {
    filter: info[1],
    filename: info[0],
    name: info[0].split('.')[0],
    path: file
  };
}